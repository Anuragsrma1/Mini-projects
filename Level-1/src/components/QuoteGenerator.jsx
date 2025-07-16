import React, { useState } from 'react'
  
 const quotes = [
    "Keep going!",
  "Believe in yourself.",
  "React is awesome!",
  "Stay focused!",
  "Practice makes perfect.",
    "You can do it!",
    "Never give up.",
 ]
const QuoteGenerator = () => {
    const [quote , setQuote] = useState("");

    const generate = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[random]);
    }
  return (
    <div className='text-center mt-10'>
       <button onClick={generate} className='bg-green-500 text-white px-4 py-2 rounded'> 
           get Quote
       </button>
       <p className='mt-4 text-xl'>{quote}</p>
    </div>
  )
}

export default QuoteGenerator
