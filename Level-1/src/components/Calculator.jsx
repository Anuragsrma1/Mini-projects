import React, { useState } from 'react'

const Calculator = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result , setResult] = useState(0);    
  
   const handleCalc = (op) => {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) return;
    let res;
    switch (op) {
      case '+': res = numA + numB; break;
      case '-': res = numA - numB; break;
      case '*': res = numA * numB; break;
      case '/': res = numB !== 0 ? numA / numB : 'Error'; break;
      default: res = 0;
    }
    setResult(res);

   }
    return (
    <div className='max-w-md mx-auto mt-10 p-4 space-y-2'>
       <input className='border p-2 w-full' value={a} onChange={e => setA(e.target.value)} placeholder='Number A' />
       <input className='border p-2 w-full' value={b} onChange={e => setB(e.target.value)} placeholder='Number b'/>
       <div className='space-x-2'>
         {['+', '-', '*', '/' ].map(op => (
           <button key={op} onClick={() => handleCalc(op)} className='bg-blue-500 text-white px-4 py-2 rounded'>
            {op}
           </button>
         ))}
       </div>
       {result !== null && <p className="mt-2 text-lg font-bold">Result: {result}</p>}
    </div>
  )
}

export default Calculator
