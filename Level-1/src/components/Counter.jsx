import React, { useState } from 'react'

    function Counter() {
        const [count, setCount] = useState(0);
        const [step,setStep] = useState(1);
        
        const increment = () => setCount(count + step);
        const decrement = () => setCount(count - step);
        const reset = () => {
            setCount(0);
            setStep(1);
        }
    
  return (
    <div className='flex flex-col items-center gap-4 p-8 rounded-lg shadow-md bg-white max-w-sm mx-auto mt-10'>
        <h1 className='text-3xl font-bold '> 🧮 Counter App</h1>
             
        <div className='text-2xl font-semibold text-blue-600'>Count : {count}</div>     
       <div className='flex gap-4'>
              <button
                onClick={increment}
              className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
                +
                </button>
              <button 
               onClick={decrement}
              className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600'>
                -
                </button>
       </div>

       <div className='flex intem-center gap-2'>
         <label className='text-gray-700'>Step:</label>
         <input 
            type='number'
            className='border px-2 py-1 rounded w-20'
            value={step} 
               onChange={(e) => setStep(Number(e.target.value))}
         />
         <button onClick={reset}
          className='px-4 py-2 bg-gray-300 rounded hover:bg-gray-400'
         >Reset</button>
       </div>
    </div>
    )
}

export default Counter;
