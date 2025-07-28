import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiConfig, createConfig, mainnet, polygon, bsc } from 'wagmi'
import { createPublicClient, http } from 'viem'
import { walletConnectProvider, EIP6963Connector, injected, coinbaseWallet } from 'wagmi/connectors'
import SwapInterface from './components/SwapInterface'
import Header from './components/Header'
import './App.css'

// Create a wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    injected(),
    coinbaseWallet({ appName: '1inchSwift' }),
    walletConnectProvider({ projectId: 'YOUR_PROJECT_ID' }),
    EIP6963Connector({ chains: [mainnet, polygon, bsc] }),
  ],
  publicClient: createPublicClient({
    chain: mainnet,
    transport: http(),
  }),
})

// Create a client
const queryClient = new QueryClient()

function App() {
  return (
    <WagmiConfig config={config}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div className="App">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Routes>
                <Route path="/" element={<SwapInterface />} />
                <Route path="/orders" element={<div>Order History</div>} />
                <Route path="/settings" element={<div>Settings</div>} />
              </Routes>
            </main>
          </div>
        </Router>
      </QueryClientProvider>
    </WagmiConfig>
  )
}

export default App 