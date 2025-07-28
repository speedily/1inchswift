import React from 'react'
import Logo from './Logo'

const LogoDisplay: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-8 py-12">
      {/* Main Logo */}
      <div className="text-center">
        <Logo size="large" showText={true} />
        <p className="mt-4 text-lg text-gray-600">
          Cross-Chain DeFi • HashLock Security • 1inch Fusion+
        </p>
      </div>

      {/* Logo Variations */}
      <div className="flex flex-wrap justify-center items-center space-x-8">
        <div className="text-center">
          <Logo size="small" showText={false} />
          <p className="mt-2 text-xs text-gray-500">Small Icon</p>
        </div>
        
        <div className="text-center">
          <Logo size="medium" showText={true} />
          <p className="mt-2 text-xs text-gray-500">Medium with Text</p>
        </div>
        
        <div className="text-center">
          <Logo size="large" showText={true} />
          <p className="mt-2 text-xs text-gray-500">Large Full Logo</p>
        </div>
      </div>

      {/* Logo Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <div className="text-2xl mb-2">🔗</div>
          <h3 className="font-semibold text-blue-800">Cross-Chain</h3>
          <p className="text-sm text-blue-600">Multi-blockchain support</p>
        </div>
        
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <div className="text-2xl mb-2">🔐</div>
          <h3 className="font-semibold text-green-800">HashLock Security</h3>
          <p className="text-sm text-green-600">Atomic swap protection</p>
        </div>
        
        <div className="text-center p-4 bg-orange-50 rounded-lg">
          <div className="text-2xl mb-2">⚡</div>
          <h3 className="font-semibold text-orange-800">Swift Performance</h3>
          <p className="text-sm text-orange-600">Fast cross-chain execution</p>
        </div>
      </div>
    </div>
  )
}

export default LogoDisplay 