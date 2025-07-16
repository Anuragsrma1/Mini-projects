import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [time , setTime] = useState(new Date());

    useEffect(() => {
         const timer = setInterval(() => setTime(new Date()),1000); 
         return () => clearInterval(timer)
    },[])
  return (
    <div className='text-center p-6 text-3xl font-bold'>
       🕒 {time.toLocaleTimeString()}
    </div>
  )
}

export default DigitalClock
