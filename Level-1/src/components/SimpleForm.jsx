import React, { useState } from 'react'

const SimpleForm = () => {
    const [name , setName ] = useState("");
    const [error , setError] = useState("");
 
    const Validate = (value) => {
       setName(value);
       if(value.length < 3){
        setError("Name must be at least 3 characters long");
       }else{
        setError("");
       }
    }

  return (
    <div className='max-w-md mx-auto mt-10'>
       <input 
         type='text'
         placeholder='enter your name'
         value={name}
         onChange={(e) => Validate(e.target.value)}
         className='border p-2 w-full'
       />
       {error && <p className='text-red-500 mt-1'>{error}</p>}
       {!error && name && <p className='text-green-600 mt-1'>✅ Looks good!</p>}
    </div>
  )
}

export default SimpleForm
