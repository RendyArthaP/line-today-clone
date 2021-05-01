import React from 'react'

const SkeletonLoader = () => {
  return (
    <div className="p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex flex-col">
        <div className="bg-gray-400 w-64 h-56"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-8 bg-gray-400 rounded w-64 mt-2"></div>
          <div className="h-4 bg-gray-400 rounded w-20 mt-2"></div>
        </div>
      </div>
    </div>
    
  )
}

export default SkeletonLoader
