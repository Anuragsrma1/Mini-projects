import React, { useState } from 'react'

const StarRating = () => {
    const [rating , setRating ] = useState('');
    const [hover, sethover] = useState();

  return (
    <div className='text-center mt-10'>
      <h2 className='text-2xl font-bold mb-4'>⭐ Rate Us</h2> 
       <div className='flex justify-center gap-2 text-3xl'>
         {[1,2,3,4,5].map((star) => (
            <span
             key={star}
              onClick={() => setRating(star)}
              onMouseEnter={() => sethover(star)}
              onMouseLeave={() => sethover(0)}
              className={`cursor-pointer transition ${
                (hover || rating) >= star ? 'text-yellow-500' : 'text-gray-300'
              }`}
            >
              ★
            </span>
         ))}
        </div>

        {
            rating > 0 && (
               <p className='mt-4 text-lg font-medium'>👉 You rated: {rating} star{rating > 1 ? 's' : ''}</p>

            )
        }    
    </div>
  )
}

export default StarRating
