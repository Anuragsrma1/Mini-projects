import React, { useState } from 'react'

const Greetme = () => {
  const [name, setName] = useState();
  const [greet, setGreet] = useState(false);

   const handleGreet = () => {
       if(name){
        setGreet(`hello ${name}`);
       }
   }
 
  return (
    <div className='p-4'>
        <input 
         type='text'
         value={name}
         onChange={(e) => setName(e.target.value)}
         placeholder='Enter you name'
        className='border p-2 rounded'
        />
      <button onClick={handleGreet} className='ml-2 bg-blue-500 text-white px-4 py-2 rounded '>Greet Me</button>
          
     { greet && <h2 className='mt-4 tetx-xl'>{greet}</h2>}
     </div>
  )
}

export default Greetme
