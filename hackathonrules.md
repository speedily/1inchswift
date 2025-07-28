# ETHGlobal Unite Hackathon Rules & Prizes

## Overview
ETHGlobal Unite is a hackathon focused on building cross-chain DeFi applications with a total prize pool of $530,000 across multiple sponsors.

## Prize Categories

### 1. 1inch - $500,000 Total Prize Pool

#### About 1inch
1inch provides a suite of powerful tools that enable developers to build smooth DeFi experiences on Ethereum, Ethereum L2s, and beyond. Hackers can utilize open-source SDKs, smart contract protocols, and robust APIs to build onchain applications.

#### Priority Fusion+ Chains - $224,000

**🚀 Extend Fusion+ to Aptos - $32,000**
- 1st place: $12,000
- 2nd place: $7,500
- 3rd place: $5,000
- 4th place: $4,000
- 5th place: $3,500

**🪙 Extend Fusion+ to Bitcoin (Doge/LTC/etc.) - $32,000**
- 1st place: $12,000
- 2nd place: $7,500
- 3rd place: $5,000
- 4th place: $4,000
- 5th place: $3,500

**🌌 Extend Fusion+ to Cosmos - $32,000**
- 1st place: $12,000
- 2nd place: $7,500
- 3rd place: $5,000
- 4th place: $4,000
- 5th place: $3,500

**🌐 Extend Fusion+ to Near - $32,000**
- 1st place: $12,000
- 2nd place: $7,500
- 3rd place: $5,000
- 4th place: $4,000
- 5th place: $3,500

**🌊 Extend Fusion+ to Sui - $32,000**
- 1st place: $12,000
- 2nd place: $7,500
- 3rd place: $5,000
- 4th place: $4,000
- 5th place: $3,500

**⚡ Extend Fusion+ to Tron - $32,000**
- 1st place: $12,000
- 2nd place: $7,500
- 3rd place: $5,000
- 4th place: $4,000
- 5th place: $3,500

**💫 Extend Fusion+ to Stellar - $32,000**
- 1st place: $12,000
- 2nd place: $7,500
- 3rd place: $5,000
- 4th place: $4,000
- 5th place: $3,500

#### Standard Fusion+ Chains - $180,000

**📱 Extend Fusion+ to Ton - $20,000**
- 1st place: $7,500
- 2nd place: $5,000
- 3rd place: $3,000
- 4th place: $2,500
- 5th place: $2,000

**🏎️ Extend Fusion+ to Monad - $20,000**
- 1st place: $7,500
- 2nd place: $5,000
- 3rd place: $3,000
- 4th place: $2,500
- 5th place: $2,000

**🛡️ Extend Fusion+ to Starknet - $20,000**
- 1st place: $7,500
- 2nd place: $5,000
- 3rd place: $3,000
- 4th place: $2,500
- 5th place: $2,000

**🏛️ Extend Fusion+ to Cardano - $20,000**
- 1st place: $7,500
- 2nd place: $5,000
- 3rd place: $3,000
- 4th place: $2,500
- 5th place: $2,000

**🌐 Extend Fusion+ to XRP Ledger - $20,000**
- 1st place: $7,500
- 2nd place: $5,000
- 3rd place: $3,000
- 4th place: $2,500
- 5th place: $2,000

**🔗 Extend Fusion+ to ICP - $20,000**
- 1st place: $7,500
- 2nd place: $5,000
- 3rd place: $3,000
- 4th place: $2,500
- 5th place: $2,000

**🌿 Extend Fusion+ to Tezos - $20,000**
- 1st place: $7,500
- 2nd place: $5,000
- 3rd place: $3,000
- 4th place: $2,500
- 5th place: $2,000

**🔗 Extend Fusion+ to Polkadot - $20,000**
- 1st place: $7,500
- 2nd place: $5,000
- 3rd place: $3,000
- 4th place: $2,500
- 5th place: $2,000

**⚡ Extend Fusion+ to EOS - $20,000**
- 1st place: $7,500
- 2nd place: $5,000
- 3rd place: $3,000
- 4th place: $2,500
- 5th place: $2,000

**🌌 Extend Fusion+ to Cosmos - $20,000**
- 1st place: $7,500
- 2nd place: $5,000
- 3rd place: $3,000
- 4th place: $2,500
- 5th place: $2,000

#### General 1inch Requirements for All Fusion+ Challenges

**Core Requirements:**
- Preserve hashlock and timelock functionality for the non-EVM implementation
- Swap functionality should be bidirectional (swaps should be possible to and from Ethereum)
- Onchain (mainnet or testnet) execution of token transfers should be presented during the final demo

**Stretch Goals (not hard requirements):**
- UI
- Enable partial fills
- Relayer and resolver

#### Technical Implementation with 1inch Cross-Chain SDK

**Setup Example:**
```typescript
import { SDK, PrivateKeyProviderConnector, NetworkEnum } from '@1inch/cross-chain-sdk'
import Web3 from 'web3'

const privateKey = '0x...'
const rpc = 'https://ethereum-rpc.publicnode.com'
const authKey = 'your-auth-key'
const source = 'hackathon-project'

const web3 = new Web3(rpc)
const walletAddress = web3.eth.accounts.privateKeyToAccount(privateKey).address

const sdk = new SDK({
    url: 'https://api.1inch.dev/fusion-plus',
    authKey,
    blockchainProvider: new PrivateKeyProviderConnector(privateKey, web3)
})
```

**Key SDK Features for Hackathon Projects:**
- **Quote Estimation**: Get cross-chain swap quotes with `sdk.getQuote()`
- **Order Creation**: Create atomic swap orders with hashlock functionality
- **Secret Management**: Handle HashLock secrets for secure cross-chain transfers
- **Order Monitoring**: Track order status and execution progress
- **Multi-Fill Support**: Handle partial fills and complex swap scenarios

**Required Components for Fusion+ Integration:**
1. **HashLock Implementation**: Secure cross-chain atomic swaps
2. **Secret Generation**: Cryptographic secrets for order execution
3. **Order Lifecycle Management**: Creation, submission, and monitoring
4. **Cross-Chain Communication**: Bidirectional swap functionality

#### SDK Selection Guide for Hackathon Projects

**For Fusion+ Chain Extensions:**
- **Primary**: Cross-Chain SDK + Fusion SDK
- **Chain-Specific**: Use relevant chain SDK (e.g., Solana Fusion SDK for Solana)
- **Backend**: 1inch SDK Go for high-performance server implementations
- **Analysis**: Limit Order SDK Python for data analysis and ML integration

**For Solana Development:**
- **Core Framework**: Anchor Framework for Solana program development
- **Fusion Integration**: Solana Fusion Protocol + Solana Fusion SDK
- **Frontend**: Solana Frontend Playground for UI development
- **TypeScript**: Use 1inch TypeScript Config for consistent setup

**For Mobile Applications:**
- **iOS**: WalletConnect Swift V2 for modern iOS wallet integration
- **Cross-Platform**: Combine with Cross-Chain SDK for swap functionality
- **UI/UX**: Integrate with existing mobile frameworks

**For Advanced Trading Strategies:**
- **Limit Orders**: Limit Order SDK for advanced order types
- **AMM Integration**: Bancor SDK or Mooniswap SDK for liquidity pools
- **Multi-Protocol**: Combine multiple SDKs for comprehensive DeFi solutions

**For Backend Services:**
- **High-Performance**: 1inch SDK Go for server-side implementations
- **Data Processing**: Limit Order SDK Python for analytics
- **API Services**: Cross-Chain SDK for REST API development

#### Protocol Deployment Information

**Limit Order Protocol Deployments (v4.3.2):**
- **Ethereum Mainnet**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **BSC Mainnet**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **Polygon Mainnet**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **Optimism Mainnet**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **Arbitrum One**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **Gnosis Chain**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **Avalanche**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **Fantom**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **Aurora**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **Kaia**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **Base**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **zkSync Era**: `0x6fd4383cb451173d5f9304f041c7bcbf27d561ff`

**Security Considerations:**
- **Audited Versions**: Use tagged releases (v4.3.2, v4.0.0, v3.0.1, v2)
- **Master Branch Warning**: Contains work-in-progress code, not audited
- **Security Audits**: Available in [1inch Audits Repository](https://github.com/1inch/1inch-audits)
- **Gas Optimization**: Use [Gas Comparison Tools](https://github.com/1inch/gas-comparison)

### 2. Etherlink - $10,000 Total Prize Pool

#### About Etherlink
Etherlink is a high-performance, EVM-compatible Layer 2 built on the Tezos blockchain. It combines low fees, fast finality, and institutional-grade security, making it ideal for DeFi applications and real-world use cases.

#### Prize: 🟢 Hack the Stack: Bring Fusion+ to Etherlink - $10,000
- 1st place: $5,000
- 2nd place: $3,000
- 3rd place: $2,000

**Challenge:** Build a prototype that integrates Etherlink with the 1inch Fusion+ protocol, enabling token swaps via 1inch routed through Etherlink's Layer 2 network.

**Qualification Requirements:**
1. Deploy on Etherlink using Solidity (EVM-compatible) smart contracts
2. Demonstrate how your project integrates or extends 1inch Fusion+ on Etherlink
3. Include a clear README with instructions on:
   - How to run or test the code
   - What components were built or modified
   - Which 1inch protocol features were used or extended
4. Be submitted before the ETHGlobal Unite deadline and presented during judging
5. Be original work created during the hackathon

**Bonus points for:**
- Technical depth and practical utility
- Working UI or CLI to demonstrate integration
- Clear potential for future development or 1inch partnership

### 3. Stellar - $10,000 Total Prize Pool

#### About Stellar
Stellar is an open-source blockchain network designed for fast, low-cost cross-border payments and asset tokenization. It can process thousands of transactions per second with settlement times of 3-5 seconds and fees typically under a penny.

#### Prize: ✨ Best use of Stellar x 1inch - $10,000
- 1st place: $5,000
- 2nd place: $3,000
- 3rd place: $2,000

**Challenge:** Build an application that combines Stellar's fast, low-cost transactions with 1inch's DEX aggregation technology.

**Qualification Requirements:**
- Must integrate both Stellar blockchain and 1inch API/protocols in a meaningful way
- Project should demonstrate functional use of each platform's core capabilities

### 4. NEAR - $10,000 Total Prize Pool

#### About NEAR
NEAR Protocol is a scalable blockchain platform that enables seamless cross-chain development through Chain Abstraction. The Shade Agent Framework allows developers to build secure decentralized agents in Trusted Execution Environments.

#### Prize: 🔗 Best 1inch Fusion+ Solver Built with NEAR's Shade Agent Framework - $10,000
- Up to 2 teams will receive $5,000 each

**Challenge:** Build a decentralized solver that integrates with 1inch Fusion+ for cross-chain swaps using NEAR's Shade Agent Framework and Trusted Execution Environment.

**Qualification Requirements:**
- Your solver must listen for quote requests (mocked)
- Produce valid 1inch Fusion meta-orders using NEAR's Chain Signatures
- Include comprehensive documentation with setup instructions
- Demonstrate end-to-end functionality
- Bonus points for modular architecture that extends to other protocols

## General Rules & Guidelines

### Submission Requirements
- All projects must be original work created during the hackathon
- Projects must be submitted before the ETHGlobal Unite deadline
- Final demos must be presented during judging
- All code must be open source and available on GitHub

### Documentation Requirements
- Clear README with setup and usage instructions
- Documentation of which protocols/APIs were used
- Explanation of the technical implementation
- Demo instructions for judges

### Judging Criteria
- Technical innovation and complexity
- Practical utility and real-world applicability
- Code quality and documentation
- Demo presentation and functionality
- Integration depth with sponsor technologies

### Development Best Practices

#### 1inch Fusion+ Implementation Patterns
- **HashLock Security**: Implement proper cryptographic secret generation and management
- **Order Lifecycle**: Handle the complete order flow from creation to execution
- **Error Handling**: Implement robust error handling for cross-chain operations
- **Gas Optimization**: Consider gas costs for both source and destination chains
- **User Experience**: Provide clear feedback on order status and progress

#### Cross-Chain Development Considerations
- **Network Compatibility**: Ensure your implementation works with the target chain's architecture
- **Token Standards**: Handle different token standards (ERC-20, native tokens, etc.)
- **Block Time Differences**: Account for varying block times across chains
- **Liquidity Requirements**: Consider liquidity availability on both chains
- **Security Auditing**: Implement proper security measures for cross-chain operations

#### Recommended Development Workflow
1. **Setup Environment**: Install required SDKs and configure development environment
2. **Prototype Core Logic**: Implement basic cross-chain swap functionality
3. **Add Security Features**: Implement HashLock and secret management
4. **Test Thoroughly**: Test on testnets for all target chains
5. **Optimize Performance**: Improve gas efficiency and user experience
6. **Document Everything**: Create comprehensive documentation and demo instructions

### Resources & Support

#### 1inch Development Resources
- **1inch Hackathon Guide**: https://hackathon.1inch.community
- **Fusion+ Whitepaper**: https://1inch.io/assets/1inch-fusion-plus.pdf
- **Building with 1inch Guide**: https://carnelian-raft-206.notion.site/Building-with-1inch-132af144f6708092be0ee25ec80cec4d
- **1inch Welcome Landing Page**: https://carnelian-raft-206.notion.site/Welcome-to-the-1inch-Hackathon-Landing-Page-1b4af144f6708016bd70c3ec7bbd7027

#### 1inch SDKs & Tools

**Core SDKs:**
- **Cross-Chain SDK**: https://github.com/1inch/cross-chain-sdk
  - TypeScript SDK for creating atomic swaps through 1inch
  - Supports Fusion+ protocol integration
  - Includes HashLock functionality for secure cross-chain swaps
  - Installation: `npm install @1inch/cross-chain-sdk`
  - Latest version: v0.2.1-rc.58 (142 releases)

- **Fusion SDK**: https://github.com/1inch/fusion-sdk
  - Core Fusion protocol SDK for cross-chain swaps
  - Provides base functionality for Fusion+ implementations
  - Essential for hackathon projects extending Fusion+ to new chains

- **Limit Order SDK**: https://github.com/1inch/limit-order-sdk
  - JavaScript/TypeScript SDK for limit order functionality
  - Enables advanced trading strategies and order types
  - Integration with Limit Order Protocol smart contracts

**Chain-Specific SDKs:**
- **Solana Fusion SDK**: https://github.com/1inch/solana-fusion-sdk
  - TypeScript SDK for Solana blockchain integration
  - Latest version: v0.1.14 (38 releases)
  - Enables Fusion+ swaps involving Solana
  - Useful for projects extending Fusion+ to Solana ecosystem

**Multi-Language SDKs:**
- **1inch SDK Go**: https://github.com/1inch/1inch-sdk-go
  - Go language implementation of 1inch SDK
  - Server-side integration capabilities
  - High-performance backend implementations

- **Limit Order SDK Python**: https://github.com/1inch/limit-order-sdk-py
  - Python implementation for limit order functionality
  - Data analysis and trading bot development
  - Machine learning integration capabilities

**Mobile & Wallet Integration:**
- **WalletConnect Swift V2**: https://github.com/1inch/WalletConnectSwiftV2
  - iOS wallet integration using WalletConnect protocol
  - Latest WalletConnect standards implementation
  - Mobile app development for iOS

- **WalletConnect Swift**: https://github.com/1inch/WalletConnectSwift
  - Legacy iOS wallet integration
  - WalletConnect protocol implementation
  - Mobile wallet functionality

**DeFi Protocol SDKs:**
- **Bancor SDK**: https://github.com/1inch/bancor-sdk
  - Integration with Bancor protocol
  - Automated market maker (AMM) functionality
  - Liquidity provision and trading

- **Mooniswap SDK**: https://github.com/1inch/mooniswap-sdk
  - Mooniswap protocol integration
  - AMM trading functionality
  - Liquidity pool management

#### 1inch Protocol Components

**Core Protocols:**
- **Limit Order Protocol**: https://github.com/1inch/limit-order-protocol
  - Smart contracts for limit order functionality (276 stars, 123 forks)
  - Latest version: v4.3.2 (38 releases, 1,535 commits)
  - Supports ERC-20, ERC-721, ERC-1155 tokens
  - Features: extreme flexibility, high gas efficiency, Dutch auctions
  - Deployed on 12+ chains including Ethereum, BSC, Polygon, Optimism, Arbitrum

- **Fusion Protocol**: https://github.com/1inch/fusion-protocol
  - Core Fusion protocol implementation
  - Cross-chain atomic swap functionality
  - Foundation for Fusion+ extensions

- **Solana Fusion Protocol**: https://github.com/1inch/solana-fusion-protocol
  - Solana-specific Fusion protocol implementation
  - Non-EVM chain integration for Fusion+

**Development Tools & Utilities:**
- **Solidity Utils**: https://github.com/1inch/solidity-utils
  - Solidity utility library (214 stars, 61 forks)
  - Latest release: 6.6.0 (4 releases)
  - TypeScript 64.4%, Solidity 34.5%

- **EVM Helpers**: https://github.com/1inch/evm-helpers
  - Ethereum Virtual Machine helper functions
  - Cross-chain development utilities

- **TypeScript Byte Utils**: https://github.com/1inch/ts-byte-utils-lib
  - TypeScript byte manipulation utilities
  - Low-level blockchain data handling

- **Calldata Compressor**: https://github.com/1inch/calldata-compressor
  - Gas optimization for smart contract calls
  - Compression utilities for blockchain transactions

**Cross-Chain & Resolver Components:**
- **Cross-Chain Swap**: https://github.com/1inch/cross-chain-swap
  - Cross-chain swap implementation
  - Multi-chain trading functionality

- **Fusion Resolver Example**: https://github.com/1inch/fusion-resolver-example
  - Example implementation of Fusion resolvers
  - Reference for hackathon projects

- **Cross-Chain Resolver Example**: https://github.com/1inch/cross-chain-resolver-example
  - Cross-chain resolver implementation examples
  - Template for hackathon submissions

**Token & Asset Management:**
- **Token Hooks**: https://github.com/1inch/token-hooks
  - React hooks for token interactions
  - Frontend development utilities

- **Address Token**: https://github.com/1inch/address-token
  - Token address management utilities
  - Multi-chain token handling

- **1inch Token**: https://github.com/1inch/1inch-token
  - 1INCH token contract implementation
  - Governance and utility token

**Infrastructure & Network:**
- **P2P Network**: https://github.com/1inch/p2p-network
  - Peer-to-peer network implementation
  - Decentralized communication layer

- **Spot Price Aggregator**: https://github.com/1inch/spot-price-aggregator
  - Real-time price aggregation
  - Market data utilities

- **Merkle Distribution**: https://github.com/1inch/merkle-distribution
  - Merkle tree-based token distribution
  - Airdrop and reward distribution utilities

**DeFi & Staking:**
- **Farming**: https://github.com/1inch/farming
  - Yield farming protocol implementation
  - Liquidity mining utilities

- **Delegating**: https://github.com/1inch/delegating
  - Staking delegation functionality
  - Governance participation tools

**Frontend & UI:**
- **Solana Frontend Playground**: https://github.com/1inch/solana-frontend-playground
  - Solana development playground
  - Frontend examples for Solana integration

- **ST1INCH**: https://github.com/1inch/st1inch
  - Staked 1INCH token implementation
  - Staking derivative token

**Development Infrastructure:**
- **Multicall**: https://github.com/1inch/multicall
  - Batch transaction utilities
  - Gas-efficient contract interactions

- **ESLint Config**: https://github.com/1inch/eslint-config
  - Code quality configuration
  - Development standards

- **TypeScript Config**: https://github.com/1inch/tsconfig
  - Common TypeScript configuration for all Node.js repositories
  - Standardized TypeScript setup across 1inch projects
  - Installation: `yarn add -D https://github.com/1inch/tsconfig.git#v1.0.0`
  - 10 releases, 23 commits

**Solana Development Tools:**
- **Anchor Framework**: https://github.com/1inch/anchor
  - Solana Sealevel Framework fork (1,627 commits)
  - Rust eDSL for writing Solana programs
  - TypeScript client generation from IDL
  - CLI and workspace management
  - Language distribution: Rust 55.7%, TypeScript 38.8%, JavaScript 5.0%
  - Essential for Solana Fusion+ implementations

**Mobile Development Tools:**
- **Wallet Core**: https://github.com/1inch/wallet-core
  - Core wallet functionality implementation
  - Cross-platform wallet development

- **Mixpanel Android**: https://github.com/1inch/mixpanel-android
  - Android analytics integration
  - User behavior tracking for mobile apps

- **SwiftGen Plugin**: https://github.com/1inch/SwiftGenPlugin
  - iOS asset generation plugin
  - Automated resource management for iOS apps

**Security & Audits:**
- **1inch Audits**: https://github.com/1inch/1inch-audits
  - Security audit reports
  - Protocol security documentation

- **Gas Comparison**: https://github.com/1inch/gas-comparison
  - Gas cost analysis tools
  - Performance optimization utilities

**Community & Documentation:**
- **Community**: https://github.com/1inch/community
  - Community guidelines and resources
  - Developer community information

#### Other Platform Resources
- **Etherlink Docs**: https://docs.etherlink.com/
- **Stellar Developer Docs**: https://developers.stellar.org/
- **NEAR Intents Overview**: https://docs.near.org/chain-abstraction/intents/overview

### Important Notes
- All prize amounts are in USD
- Winners will be announced at the conclusion of the hackathon
- Prize distribution is subject to ETHGlobal's terms and conditions
- Teams may be eligible for multiple prizes if they meet the criteria
- Judges' decisions are final

### Getting Started with 1inch Fusion+ Development

#### Prerequisites
- **Node.js & npm**: For SDK installation and development
- **Web3 Provider**: Access to RPC endpoints for target chains
- **1inch API Key**: Request from [1inch Developer Portal](https://portal.1inch.dev/)
- **Target Chain Knowledge**: Understanding of the specific chain you're extending to

#### Quick Start Steps
1. **Install Core SDKs**: 
   - `npm install @1inch/cross-chain-sdk`
   - `npm install @1inch/fusion-sdk`
   - `npm install @1inch/limit-order-sdk`
2. **Install Chain-Specific SDKs** (if needed):
   - `npm install @1inch/solana-fusion-sdk` (for Solana projects)
3. **Get API Access**: Register for 1inch developer access
4. **Choose Target Chain**: Select from the priority or standard Fusion+ chains
5. **Study Chain Architecture**: Understand the target chain's consensus and token model
6. **Implement Core Logic**: Start with basic quote and order functionality
7. **Add Security Layer**: Implement HashLock and secret management
8. **Test & Iterate**: Deploy on testnets and refine your implementation

#### SDK Installation Commands
```bash
# Core SDKs
npm install @1inch/cross-chain-sdk
npm install @1inch/fusion-sdk
npm install @1inch/limit-order-sdk

# Chain-specific SDKs
npm install @1inch/solana-fusion-sdk

# Mobile SDKs (iOS)
# Add to Podfile: pod 'WalletConnectSwiftV2'

# Python SDK
pip install 1inch-limit-order-sdk

# Go SDK
go get github.com/1inch/1inch-sdk-go

# TypeScript Config
yarn add -D https://github.com/1inch/tsconfig.git#v1.0.0

# Solana Development
# Install Anchor CLI: npm install -g @coral-xyz/anchor-cli
# Install Rust: curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh

#### Common Pitfalls to Avoid
- **Insufficient Testing**: Test thoroughly on testnets before mainnet
- **Poor Error Handling**: Implement comprehensive error handling for cross-chain operations
- **Security Oversights**: Don't skip HashLock implementation or proper secret management
- **Incomplete Documentation**: Ensure your README is comprehensive and clear
- **Ignoring Gas Costs**: Consider gas optimization for both chains
- **SDK Version Conflicts**: Use compatible versions of different 1inch SDKs
- **Chain-Specific Requirements**: Don't assume all chains work the same way

#### SDK Version Compatibility
- **Cross-Chain SDK**: v0.2.1-rc.58 (latest, 142 releases)
- **Solana Fusion SDK**: v0.1.14 (latest, 38 releases)
- **Fusion SDK**: Check for latest stable release
- **Limit Order SDK**: Use latest stable version for production
- **Mobile SDKs**: WalletConnect Swift V2 for modern iOS development

#### Development Environment Setup
```bash
# Node.js environment
node --version  # Recommended: 18.x or higher
npm --version   # Recommended: 9.x or higher

# For Go development
go version      # Recommended: 1.19 or higher

# For Python development
python --version # Recommended: 3.8 or higher

# For iOS development
xcode --version  # Recommended: 14.0 or higher

# For Solana development
rustc --version # Recommended: 1.70 or higher
anchor --version # Install via: npm install -g @coral-xyz/anchor-cli
solana --version # Install via: sh -c "$(curl -sSfL https://release.solana.com/stable/install)"
```

#### Essential Development Tools for Hackathon Projects

**Smart Contract Development:**
- **Solidity Utils**: Essential for smart contract development
- **EVM Helpers**: Cross-chain development utilities
- **TypeScript Byte Utils**: Low-level blockchain data handling
- **Calldata Compressor**: Gas optimization for transactions

**Cross-Chain Development:**
- **Fusion Resolver Example**: Reference implementation for resolvers
- **Cross-Chain Resolver Example**: Template for hackathon submissions
- **Cross-Chain Swap**: Core swap implementation patterns

**Frontend Development:**
- **Token Hooks**: React hooks for token interactions
- **Solana Frontend Playground**: Solana integration examples
- **Address Token**: Multi-chain token handling utilities

**Infrastructure & Performance:**
- **Multicall**: Batch transaction utilities
- **Spot Price Aggregator**: Real-time market data
- **P2P Network**: Decentralized communication layer
- **Merkle Distribution**: Token distribution utilities

**Security & Quality:**
- **1inch Audits**: Security audit reports and best practices
- **Gas Comparison**: Performance optimization tools
- **ESLint Config**: Code quality standards

**Development Standards:**
- **TypeScript Config**: Standardized TypeScript configuration
- **Code Quality**: ESLint and TypeScript standards
- **Mobile Development**: iOS and Android development tools

### Community Resources & Support

#### Getting Help During the Hackathon
- **Community Repository**: https://github.com/1inch/community
  - Developer community guidelines
  - Best practices and resources
  - Community support channels

#### Reference Implementations
- **Fusion Resolver Example**: https://github.com/1inch/fusion-resolver-example
  - Complete resolver implementation
  - Template for hackathon projects
  - Best practices for Fusion+ integration

- **Cross-Chain Resolver Example**: https://github.com/1inch/cross-chain-resolver-example
  - Cross-chain resolver patterns
  - Multi-chain implementation examples
  - Security considerations for cross-chain operations

#### Development Best Practices
- **Security First**: Always use audited versions of protocols
- **Gas Optimization**: Use calldata compression and multicall utilities
- **Testing**: Test thoroughly on testnets before mainnet deployment
- **Documentation**: Follow the comprehensive documentation in each repository
- **Community Standards**: Follow the ESLint configuration for code quality

#### TypeScript Configuration Setup
```json
{
  "extends": "@1inch/tsconfig",
  "include": ["src"],
  "compilerOptions": {
    "typeRoots": [
      "./src/types-overrides",
      "./node_modules/@types"
    ],
    "outDir": "./dist",
    "baseUrl": "./"
  }
}
```

#### Solana Development Workflow
1. **Setup Anchor**: Install Anchor CLI and Rust toolchain
2. **Create Project**: Use Anchor framework for Solana program development
3. **Implement Fusion**: Integrate Solana Fusion Protocol
4. **Frontend Integration**: Use Solana Frontend Playground
5. **Testing**: Deploy to Solana devnet for testing
6. **Documentation**: Follow Anchor documentation patterns

#### Repository Statistics
- **Total Repositories**: 25+ active repositories
- **Most Popular**: Limit Order Protocol (276 stars, 123 forks)
- **Development Activity**: 1,535+ commits across major protocols
- **Language Distribution**: TypeScript, Solidity, JavaScript, Go, Python
- **Security Focus**: Dedicated audit repository with comprehensive reports

---

*This document is based on information from [ETHGlobal Unite Prizes](https://ethglobal.com/events/unite/prizes) and should be used as a reference for hackathon participants.* 