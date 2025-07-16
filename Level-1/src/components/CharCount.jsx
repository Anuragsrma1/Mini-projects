import React, { useState } from 'react'

const CharCount = () => {
   const [text, setText ] = useState("");

  return (
    <div className='mx-auto p-4 max-w-md'>
        <h2 className='text-xl font-bold mb-4'>Charcter counter</h2>
        <input 
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='Type something...'
          className='border rounded p-2 w-full'                
        />
        <p className='mt-2 text-gray-700'>Charcter count:{text.length}</p>
    </div>
  )
}

export default CharCount

//thywyldst69