import React from 'react';

function Shimmer() {
  return (
    <>
    <div className='w-20 h-9 p-1 m-2 bg-gray-200 animate-pulse rounded-lg'></div>
       
    <div className="flex flex-wrap items-stretch justify-center">
    
      {/* Create an array of 15 dummy items */}
      {Array(15)
        .fill('')
        .map((_, index) => (
          <div
            key={index}
            className="w-60 h-80 m-4 p-5 bg-gray-200 animate-pulse rounded-lg shadow-md"
          >
            {/* Image Placeholder */}
            <div className="w-full h-40 bg-gray-300 rounded-md mb-4"></div>
            
            {/* Title Placeholder */}
            <div className="w-3/4 h-5 bg-gray-300 rounded mb-3"></div>
            
            {/* Subtitle Placeholder */}
            <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
            
            {/* Rating/Cost Placeholder */}
            <div className="w-1/4 h-4 bg-gray-300 rounded"></div>
          </div>
        ))}
    </div>
    </>
  );
}

export default Shimmer;