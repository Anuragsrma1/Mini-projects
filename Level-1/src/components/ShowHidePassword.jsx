import React, { useState } from 'react'

const ShowHidePassword = () => {
  const [showPassword , setShowPassword] = useState();
    const togglePassword =() => {
        setShowPassword(!showPassword)
    }
  return (
    <div className='p-4'>
       <input 
        type={showPassword ? 'text' : 'password'}
        placeholder='Enter your password'
        className='border p-2 rounded'
       />
       <button onClick = {togglePassword} className='ml-2 bg-blue-500 text-white px-4 py-2 rounded'>   
        {showPassword ? 'hide': 'show'}
       </button>
    </div>
  )
}

export default ShowHidePassword
