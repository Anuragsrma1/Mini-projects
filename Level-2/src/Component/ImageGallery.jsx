import React, { useState } from 'react'

const images = [
    'https://picsum.photos/id/1011/300/200',
    'https://picsum.photos/id/1012/300/200',
    'https://picsum.photos/id/1013/300/200',
    'https://picsum.photos/id/1015/300/200',
  ];

const ImageGallery = () => {
   const [selected, setSelected ] = useState(null);

  return (
    <div className='p-4 max-w-4xl mx-auto'>
       <h2 className='text-2xl font-bold text-center mb-6'>🖼️ Image Gallery</h2>

       <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
        {images.map((url,i) => 
        <img 
           key={i}
           src={url}
           alt={`Img ${i}`}
           onClick={() => setSelected(url)}
           className='rounded cursor-pointer hover:opacity-75 transition'
        />
        )}
       </div>

       {selected && (
         <div
           className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center'
           onClick={() => setSelected(null)}
         > 
           <img src={selected} alt='large' className='max-h-[80vh] rounded shadow-lg' />
         </div>
       )}
    </div>
  )
}

export default ImageGallery
