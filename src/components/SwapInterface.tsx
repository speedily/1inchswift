import React, { useState } from 'react'
import { useAccount } from 'wagmi'
import { useForm } from 'react-hook-form'

interface SwapFormData {
  fromToken: string
  toToken: string
  amount: string
  fromChain: string
  toChain: string
}

const SwapInterface: React.FC = () => {
  const { address, isConnected } = useAccount()
  const [isLoading, setIsLoading] = useState(false)
  const [quote, setQuote] = useState<any>(null)

  const { register, handleSubmit, watch, setValue } = useForm<SwapFormData>({
    defaultValues: {
      fromToken: 'USDT',
      toToken: 'ETH',
      amount: '',
      fromChain: 'ethereum',
      toChain: 'polygon'
    }
  })

  const onSubmit = async (data: SwapFormData) => {
    if (!isConnected) {
      alert('Please connect your wallet first')
      return
    }

    setIsLoading(true)
    try {
      // TODO: Implement 1inch Fusion+ swap logic
      console.log('Swap data:', data)
      // This would integrate with 1inch Cross-Chain SDK
    } catch (error) {
      console.error('Swap error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const getQuote = async () => {
    const formData = watch()
    if (!formData.amount || !isConnected) return

    setIsLoading(true)
    try {
      // TODO: Implement quote fetching with 1inch API
      console.log('Getting quote for:', formData)
    } catch (error) {
      console.error('Quote error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Cross-Chain Swap</h2>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* From Chain and Token */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From Chain
              </label>
              <select
                {...register('fromChain')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="ethereum">Ethereum</option>
                <option value="polygon">Polygon</option>
                <option value="bsc">BSC</option>
                <option value="optimism">Optimism</option>
                <option value="arbitrum">Arbitrum</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                From Token
              </label>
              <select
                {...register('fromToken')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="USDT">USDT</option>
                <option value="USDC">USDC</option>
                <option value="ETH">ETH</option>
                <option value="MATIC">MATIC</option>
                <option value="BNB">BNB</option>
              </select>
            </div>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Amount
            </label>
            <input
              type="number"
              {...register('amount')}
              placeholder="0.0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={getQuote}
            />
          </div>

          {/* To Chain and Token */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To Chain
              </label>
              <select
                {...register('toChain')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="polygon">Polygon</option>
                <option value="ethereum">Ethereum</option>
                <option value="bsc">BSC</option>
                <option value="optimism">Optimism</option>
                <option value="arbitrum">Arbitrum</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                To Token
              </label>
              <select
                {...register('toToken')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
                <option value="USDC">USDC</option>
                <option value="MATIC">MATIC</option>
                <option value="BNB">BNB</option>
              </select>
            </div>
          </div>

          {/* Quote Display */}
          {quote && (
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">Quote</h3>
              <div className="text-sm text-gray-600">
                <p>You will receive: {quote.toAmount} {quote.toToken}</p>
                <p>Exchange rate: 1 {quote.fromToken} = {quote.rate} {quote.toToken}</p>
                <p>Estimated gas: {quote.gasEstimate}</p>
              </div>
            </div>
          )}

          {/* Swap Button */}
          <button
            type="submit"
            disabled={!isConnected || isLoading}
            className="w-full bg-blue-500 text-white py-3 px-4 rounded-md hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Processing...' : isConnected ? 'Swap' : 'Connect Wallet to Swap'}
          </button>
        </form>

        {/* Wallet Status */}
        {!isConnected && (
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <p className="text-yellow-800 text-sm">
              Please connect your wallet to start swapping
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SwapInterface 