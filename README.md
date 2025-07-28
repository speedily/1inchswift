# 1inchSwift

A cross-chain DeFi application built for the ETHGlobal Unite hackathon, extending 1inch Fusion+ to new blockchain networks.

## 🚀 Project Overview

1inchSwift is a cross-chain swap application that extends the 1inch Fusion+ protocol to enable seamless token swaps across multiple blockchain networks. Built with modern web technologies and following 1inch development standards.

## 🏆 Hackathon Category

This project is designed for the **1inch Fusion+ Chain Extensions** category, specifically targeting cross-chain swap functionality with HashLock security and bidirectional swap capabilities.

## 🛠️ Technology Stack

### Core Technologies
- **Frontend**: React.js with TypeScript
- **Blockchain Integration**: 1inch Cross-Chain SDK
- **Smart Contracts**: Solidity (EVM-compatible)
- **Development Tools**: 1inch TypeScript Config, ESLint Config

### 1inch SDKs Used
- **Cross-Chain SDK**: `@1inch/cross-chain-sdk`
- **Fusion SDK**: `@1inch/fusion-sdk`
- **Limit Order SDK**: `@1inch/limit-order-sdk`

## 📋 Requirements Met

### Core Requirements ✅
- [x] Preserve hashlock and timelock functionality
- [x] Bidirectional swap functionality (to and from Ethereum)
- [x] Onchain execution of token transfers
- [x] HashLock implementation for secure cross-chain swaps
- [x] Secret generation and management
- [x] Order lifecycle management

### Stretch Goals 🎯
- [x] User-friendly UI/UX
- [x] Partial fills support
- [x] Relayer and resolver implementation
- [x] Comprehensive documentation

## 🚀 Quick Start

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher
- 1inch API key (register at [1inch Developer Portal](https://portal.1inch.dev/))

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd 1inchswift

# Install dependencies
npm install

# Install 1inch SDKs
npm install @1inch/cross-chain-sdk @1inch/fusion-sdk @1inch/limit-order-sdk

# Install TypeScript config
yarn add -D https://github.com/1inch/tsconfig.git#v1.0.0

# Start development server
npm run dev
```

### Environment Setup

Create a `.env` file in the root directory:

```env
REACT_APP_1INCH_API_KEY=your_api_key_here
REACT_APP_1INCH_API_URL=https://api.1inch.dev/fusion-plus
REACT_APP_ETHEREUM_RPC_URL=your_ethereum_rpc_url
REACT_APP_POLYGON_RPC_URL=your_polygon_rpc_url
REACT_APP_BSC_RPC_URL=your_bsc_rpc_url
```

## 🏗️ Project Structure

```
1inchswift/
├── src/
│   ├── components/          # React components
│   ├── hooks/              # Custom React hooks
│   ├── services/           # 1inch API services
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   └── contracts/          # Smart contract interfaces
├── public/                 # Static assets
├── docs/                   # Documentation
├── tests/                  # Test files
└── package.json
```

## 🔧 Development

### Running the Application

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Run tests
npm test

# Lint code
npm run lint
```

### Smart Contract Integration

The project integrates with 1inch Limit Order Protocol deployed on multiple chains:

- **Ethereum Mainnet**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **Polygon Mainnet**: `0x111111125421ca6dc452d289314280a0f8842a65`
- **BSC Mainnet**: `0x111111125421ca6dc452d289314280a0f8842a65`

## 🔐 Security Features

- **HashLock Implementation**: Secure cross-chain atomic swaps
- **Secret Management**: Cryptographic secret generation and handling
- **Order Validation**: Comprehensive order validation and error handling
- **Gas Optimization**: Efficient transaction handling with calldata compression

## 📊 Features

### Core Functionality
- **Cross-Chain Swaps**: Swap tokens between different blockchain networks
- **Real-Time Quotes**: Get live swap quotes with 1inch aggregation
- **Order Management**: Create, track, and manage swap orders
- **Wallet Integration**: Connect with MetaMask and other Web3 wallets

### Advanced Features
- **Partial Fills**: Support for partial order execution
- **Order History**: Track all past and current orders
- **Gas Estimation**: Real-time gas cost estimation
- **Price Charts**: Visual representation of token prices

## 🧪 Testing

### Test Networks
- **Ethereum**: Goerli testnet
- **Polygon**: Mumbai testnet
- **BSC**: BSC testnet

### Running Tests

```bash
# Unit tests
npm run test:unit

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

## 📚 Documentation

- **API Documentation**: [docs/api.md](docs/api.md)
- **Smart Contract Documentation**: [docs/contracts.md](docs/contracts.md)
- **Deployment Guide**: [docs/deployment.md](docs/deployment.md)

## 🤝 Contributing

This project was created for the ETHGlobal Unite hackathon. For development guidelines, please refer to the [1inch Community Repository](https://github.com/1inch/community).

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **1inch Team**: For providing the comprehensive SDKs and documentation
- **ETHGlobal**: For organizing the hackathon
- **Open Source Community**: For the amazing tools and libraries used

## 📞 Support

For questions or support during the hackathon:
- Check the [1inch Hackathon Guide](https://hackathon.1inch.community)
- Review the [Fusion+ Whitepaper](https://1inch.io/assets/1inch-fusion-plus.pdf)
- Join the 1inch community discussions

---

**Built with ❤️ for ETHGlobal Unite Hackathon** 