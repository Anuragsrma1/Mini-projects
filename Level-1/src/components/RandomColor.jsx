import React, { useState } from 'react'

const RandomColor = () => {
    const [color, setColor] = useState('#ffffff');

  const generateColor = () => {
    const random = Math.floor(Math.random() * 16777215).toString(16);
    setColor(`#${random}`);
  }  

  return (
    <div className='h-screen flex flex-col items-center justify-center ' style={{backgroundColor: color}}>
        <button 
             onClick={generateColor}
         className='bg-black text-white px-6 py-3 rounded shadow' 
        >       
        🎨 Generate Random Color
        </button>
        <p className='mt-4 text-xl font-mono'>{color}</p>
    </div>
  )
}

export default RandomColor
