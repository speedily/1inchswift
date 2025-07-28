import { SDK, NetworkEnum, PresetEnum, HashLock, OrderStatus } from '@1inch/cross-chain-sdk'
import Web3 from 'web3'
import { randomBytes } from 'crypto'

export interface SwapQuote {
  fromToken: string
  toToken: string
  fromAmount: string
  toAmount: string
  rate: string
  gasEstimate: string
  presets: any
}

export interface SwapOrder {
  hash: string
  quoteId: string
  order: any
  status: OrderStatus
}

class OneInchService {
  private sdk: SDK | null = null
  private web3: Web3 | null = null

  constructor() {
    this.initializeSDK()
  }

  private async initializeSDK() {
    try {
      const authKey = process.env.REACT_APP_1INCH_API_KEY
      if (!authKey) {
        throw new Error('1inch API key not found')
      }

      const rpcUrl = process.env.REACT_APP_ETHEREUM_RPC_URL || 'https://ethereum-rpc.publicnode.com'
      this.web3 = new Web3(rpcUrl)

      this.sdk = new SDK({
        url: 'https://api.1inch.dev/fusion-plus',
        authKey,
        blockchainProvider: null // Will be set when wallet connects
      })
    } catch (error) {
      console.error('Failed to initialize 1inch SDK:', error)
    }
  }

  public async getQuote(params: {
    fromToken: string
    toToken: string
    amount: string
    fromChain: string
    toChain: string
    walletAddress: string
  }): Promise<SwapQuote | null> {
    try {
      if (!this.sdk) {
        throw new Error('SDK not initialized')
      }

      const chainIdMap: { [key: string]: NetworkEnum } = {
        ethereum: NetworkEnum.ETHEREUM,
        polygon: NetworkEnum.POLYGON,
        bsc: NetworkEnum.BINANCE,
        optimism: NetworkEnum.OPTIMISM,
        arbitrum: NetworkEnum.ARBITRUM
      }

      const fromChainId = chainIdMap[params.fromChain]
      const toChainId = chainIdMap[params.toChain]

      if (!fromChainId || !toChainId) {
        throw new Error('Unsupported chain')
      }

      const quote = await this.sdk.getQuote({
        amount: params.amount,
        srcChainId: fromChainId,
        dstChainId: toChainId,
        enableEstimate: true,
        srcTokenAddress: this.getTokenAddress(params.fromToken, params.fromChain),
        dstTokenAddress: this.getTokenAddress(params.toToken, params.toChain),
        walletAddress: params.walletAddress
      })

      return {
        fromToken: params.fromToken,
        toToken: params.toToken,
        fromAmount: params.amount,
        toAmount: quote.dstAmount,
        rate: quote.rate,
        gasEstimate: quote.gasEstimate || '0',
        presets: quote.presets
      }
    } catch (error) {
      console.error('Error getting quote:', error)
      return null
    }
  }

  public async createOrder(params: {
    quote: SwapQuote
    walletAddress: string
    privateKey: string
  }): Promise<SwapOrder | null> {
    try {
      if (!this.sdk || !this.web3) {
        throw new Error('SDK not initialized')
      }

      // Set up blockchain provider with private key
      const { PrivateKeyProviderConnector } = await import('@1inch/cross-chain-sdk')
      const blockchainProvider = new PrivateKeyProviderConnector(params.privateKey, this.web3)

      const sdkWithProvider = new SDK({
        url: 'https://api.1inch.dev/fusion-plus',
        authKey: process.env.REACT_APP_1INCH_API_KEY!,
        blockchainProvider
      })

      const preset = PresetEnum.fast

      // Generate secrets for HashLock
      const secrets = Array.from({
        length: params.quote.presets[preset].secretsCount
      }).map(() => '0x' + randomBytes(32).toString('hex'))

      const hashLock = secrets.length === 1
        ? HashLock.forSingleFill(secrets[0])
        : HashLock.forMultipleFills(HashLock.getMerkleLeaves(secrets))

      const secretHashes = secrets.map((s) => HashLock.hashSecret(s))

      // Create order
      const { hash, quoteId, order } = await sdkWithProvider.createOrder(params.quote as any, {
        walletAddress: params.walletAddress,
        hashLock,
        preset,
        source: '1inchswift',
        secretHashes
      })

      return {
        hash,
        quoteId,
        order,
        status: OrderStatus.Created
      }
    } catch (error) {
      console.error('Error creating order:', error)
      return null
    }
  }

  public async submitOrder(order: SwapOrder): Promise<boolean> {
    try {
      if (!this.sdk) {
        throw new Error('SDK not initialized')
      }

      await this.sdk.submitOrder(
        NetworkEnum.ETHEREUM, // This should be dynamic based on the order
        order.order,
        order.quoteId,
        [] // secretHashes would be passed here
      )

      return true
    } catch (error) {
      console.error('Error submitting order:', error)
      return false
    }
  }

  public async getOrderStatus(hash: string): Promise<OrderStatus | null> {
    try {
      if (!this.sdk) {
        throw new Error('SDK not initialized')
      }

      const { status } = await this.sdk.getOrderStatus(hash)
      return status
    } catch (error) {
      console.error('Error getting order status:', error)
      return null
    }
  }

  private getTokenAddress(token: string, chain: string): string {
    // This would contain actual token addresses for each chain
    const tokenAddresses: { [key: string]: { [key: string]: string } } = {
      ethereum: {
        USDT: '0xdac17f958d2ee523a2206206994597c13d831ec7',
        USDC: '0xa0b86a33e6441b8c4b8c4b8c4b8c4b8c4b8c4b8c',
        ETH: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        WETH: '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2'
      },
      polygon: {
        USDT: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
        USDC: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
        MATIC: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        WMATIC: '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
      },
      bsc: {
        USDT: '0x55d398326f99059ff775485246999027b3197955',
        USDC: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
        BNB: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
        WBNB: '0xbb4cdb9cbd36b01bd1cbaef2af88c6c9d3b4b8c8'
      }
    }

    return tokenAddresses[chain]?.[token] || '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
  }
}

export default new OneInchService() 