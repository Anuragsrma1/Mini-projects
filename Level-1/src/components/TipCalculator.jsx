import React, { useState } from 'react'

const TipCalculator = () => {
  const [bill , setBill] = useState('');
  const [tip , setTip] = useState('');

  const calculateTip = () => {
   const b = parseFloat(bill);
   const t = parseFloat(tip);
   if (isNaN(b) || isNaN(t)) return 0;
   return (b *t / 100).toFixed(2);
  }

  return (
    <div>
       <input 
        type='Number'
        placeholder='Bill Amount'
        value={bill}
        onChange={e => setBill(e.target.value)}
        className='border p-2 w-full mb-2'
       />
       <input 
        type='Number'
        placeholder='Tip percentage'
        value={tip}
        onChange={e => setTip(e.target.value)}
        className='border p-2 w-full mb-2'
       />
       <p className='text-lg font-bold'>
       💰 Tip Amount: ₹{calculateTip()}
       </p>
    </div>
  )
}

export default TipCalculator
