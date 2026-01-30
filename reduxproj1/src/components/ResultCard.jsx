import React from 'react'

const ResultCard = ({ item }) => {
  const handleClick = () => {
    window.open(item.download, '_blank')
  }

  return (
    <div 
      onClick={handleClick}
      className='group cursor-pointer h-80 bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2'
    >
      {/* Media Container */}
      <div className='relative w-full h-64 bg-gray-200 overflow-hidden'>
        {item.type === 'image' ? (
          <img 
            src={item.src} 
            alt={item.title}
            className='w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300'
          />
        ) : item.type === 'gifs' ? (
          <img 
            src={item.src} 
            alt={item.title}
            className='w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300'
          />
        ) : (
          <video 
            src={item.src}
            className='w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300'
            autoPlay
            loop
            muted
            playsInline
          />
        )}
        
        {/* Type Badge */}
        <div className='absolute top-3 right-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-semibold uppercase shadow-md'>
          {item.type}
        </div>
        
        {/* Overlay on Hover */}
        <div className='absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
          <div className='bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold shadow-lg'>
            Download
          </div>
        </div>
      </div>
      
      {/* Info Container */}
      <div className='p-4 h-16 flex flex-col justify-between'>
        <h3 className='text-sm font-semibold text-gray-800 line-clamp-2 group-hover:text-purple-600 transition-colors duration-300'>
          {item.title || 'Untitled'}
        </h3>
      </div>
    </div>
  )
}

export default ResultCard