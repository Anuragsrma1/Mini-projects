import React, { useEffect, useState } from 'react'

const ProgressBar = () => {
    const [progress , setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress(prev  => prev <100 ? prev + 10 : 0)

        },1000)
        return () => clearInterval(timer);
    },[])

  return (
    <div className='max-w-md mx-auto mt-10 p-4 text-center'>
    <h2 className='text-xl font-bold mb-4'>📊 Auto Progress Bar</h2>
    <div className='w-full bg-gray-300 h-6 rounded '>
       <div 
          style={{width : `${progress}%`}}
          className='bg-green-500 h-full rounded transition-all'
       />
    </div>
    <p className='mt-2'>{progress}%</p>
    </div>
  )
}

export default ProgressBar
