import React, { useState } from 'react'

  const emojiList = [
    { symbol: "😀", name: "grinning" },
    { symbol: "🎉", name: "celebration" },
    { symbol: "❤️", name: "love" },
    { symbol: "🔥", name: "fire" },
    { symbol: "👍", name: "thumbs up" },
    { symbol: "😢", name: "sad" },
    { symbol: "😎", name: "cool" },
    { symbol: "🤔", name: "thinking" },
  ]


const EmojiFinder = () => {
   const [search , setSearch] = useState('');

   const filtered = emojiList.filter(e => 
    e.name.toLowerCase().includes(search.toLowerCase())
   );
  return (
    <div className='max-x-md mx-auto mt-6 space-y-3'>
        <input 
          type='text'
          placeholder='Search for an emoji...'
          value={search}
          onChange={e => setSearch(e.target.value)}
          className='border p-2 w-full'
        />
       
       <ul className='space-y-2'>
            {
                filtered.map((e,i) => (
                    <li key={i} className='text-xl'>{e.symbol} - {e.name}</li>
                ) )
            }
       </ul>
    </div>
  )
}

export default EmojiFinder;