import React, { useState } from 'react'

const ProductImages = ({images = [[]]}) => {
  const [main, setMain] = useState(images[0])
  return (
    <div className='flex sm:flex-row-reverse flex-col sm:justify-end sm:h-[550px] h-[50%]'>
      <img src={main.url} alt="" className='h-[100%] rounded' />
      <div className=' flex sm:flex-col mt-3 md:mr-3 sm:mt-0'>
        {images.map((image, index) => {
          return (
            <img
              src={image.url}
              key={index}
              alt=""
              className={`w-[60px] cursor-pointer mr-2 md:mr-0 sm:mb-2 ${image.url === main.url ? 'border opacity-[75%] border-[#257f39]' : ''}`}
              onClick={() => setMain(images[index])}
            />
          )
        })}
      </div>
    </div>
  )
}

export default ProductImages;