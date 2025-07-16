import React, { useState } from 'react'

const DisableButton = () => {
    const [name ,setName] = useState("");
  return (
    <div className='mx-auto p-4 max-w-md'>
      <h2 className='font-bold text-xl mb-4'>Disable button</h2>
      <input 
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Type your name...'
        className='border rounded p-2 w-full '
      />
      <button
          disabled={!name}
          className={`mt-4 p-2 rounded bg-blue-500 text-white ${!name ? 'opacity-50 cursor-not-allowed' : ''}`} 
            onClick={() => alert(`Hello, ${name}!`)}
            
      >Greet me</button>
    </div>
  )
}

export default DisableButton
