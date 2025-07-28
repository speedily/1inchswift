import React from 'react'

interface LogoProps {
  size?: 'small' | 'medium' | 'large'
  className?: string
  showText?: boolean
}

const Logo: React.FC<LogoProps> = ({ 
  size = 'medium', 
  className = '',
  showText = true 
}) => {
  const sizeClasses = {
    small: 'w-24 h-8',
    medium: 'w-32 h-10',
    large: 'w-48 h-12'
  }

  const textSizes = {
    small: 'text-xs',
    medium: 'text-sm',
    large: 'text-lg'
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* SVG Logo */}
      <div className={`${sizeClasses[size]} flex-shrink-0`}>
        <svg viewBox="0 0 200 60" className="w-full h-full">
          <defs>
            <linearGradient id="primaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#1E40AF', stopOpacity: 1 }} />
            </linearGradient>
            
            <linearGradient id="secondaryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#059669', stopOpacity: 1 }} />
            </linearGradient>
            
            <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#F59E0B', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#D97706', stopOpacity: 1 }} />
            </linearGradient>
            
            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="2" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.3"/>
            </filter>
          </defs>
          
          {/* Background rectangle with rounded corners */}
          <rect x="2" y="2" width="196" height="56" rx="8" ry="8" 
                fill="url(#primaryGradient)" filter="url(#shadow)" opacity="0.95"/>
          
          {/* Main logo text */}
          <text x="100" y="25" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" 
                textAnchor="middle" fill="white" filter="url(#shadow)">
            1inch
          </text>
          
          {/* Swift text */}
          <text x="100" y="42" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="600" 
                textAnchor="middle" fill="white" opacity="0.9">
            Swift
          </text>
          
          {/* Cross-chain icon (interconnected circles) */}
          <g transform="translate(15, 20)">
            {/* Left circle (Ethereum) */}
            <circle cx="8" cy="8" r="6" fill="url(#secondaryGradient)" opacity="0.9"/>
            <text x="8" y="11" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" 
                  textAnchor="middle" fill="white">Ξ</text>
            
            {/* Right circle (Polygon) */}
            <circle cx="22" cy="8" r="6" fill="url(#accentGradient)" opacity="0.9"/>
            <text x="22" y="11" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" 
                  textAnchor="middle" fill="white">P</text>
            
            {/* Connection line */}
            <line x1="14" y1="8" x2="16" y2="8" stroke="white" strokeWidth="2" opacity="0.8"/>
            
            {/* Arrow indicating direction */}
            <polygon points="16,6 18,8 16,10" fill="white" opacity="0.8"/>
          </g>
          
          {/* HashLock security icon */}
          <g transform="translate(165, 20)">
            {/* Lock base */}
            <rect x="0" y="8" width="12" height="8" rx="2" fill="url(#secondaryGradient)" opacity="0.9"/>
            {/* Lock shackle */}
            <path d="M 2 8 L 2 4 L 10 4 L 10 8" stroke="white" strokeWidth="2" fill="none" opacity="0.8"/>
            {/* Keyhole */}
            <circle cx="6" cy="12" r="1.5" fill="white" opacity="0.6"/>
            <rect x="5.5" y="12" width="1" height="2" fill="white" opacity="0.6"/>
          </g>
          
          {/* Performance indicator (lightning bolt) */}
          <g transform="translate(15, 40)">
            <path d="M 2 2 L 6 2 L 4 6 L 8 6 L 2 12 L 6 8 L 4 8 Z" 
                  fill="url(#accentGradient)" opacity="0.8"/>
          </g>
          
          {/* Innovation badge */}
          <g transform="translate(165, 40)">
            <circle cx="6" cy="6" r="6" fill="url(#accentGradient)" opacity="0.8"/>
            <text x="6" y="9" fontFamily="Arial, sans-serif" fontSize="8" fontWeight="bold" 
                  textAnchor="middle" fill="white">⚡</text>
          </g>
        </svg>
      </div>

      {/* Optional text label */}
      {showText && (
        <div className={`flex flex-col ${textSizes[size]}`}>
          <span className="font-bold text-blue-600">1inchSwift</span>
          <span className="text-xs text-gray-500">Cross-Chain DeFi</span>
        </div>
      )}
    </div>
  )
}

export default Logo 