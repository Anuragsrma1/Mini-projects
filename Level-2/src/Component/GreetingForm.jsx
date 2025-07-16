import React from 'react'

const GreetingForm = ({name , setName , greeting , setGreeting}) => {

  return (
    <div className='space-y-4'>
      <input 
        type='text'
        placeholder='Enter your name'
        value= {name}
        onChange={(e) => setName(e.target.value)}
        className='w-full p-2 border rounded'
      />      
      <select
       value={greeting}
       onChange={(e) => setGreeting(e.target.value)}
        className='w-full p-2 border rounded'
      >
       <option>Happy Birthday</option>
        <option>Congratulations</option>
        <option>Get Well Soon</option>
        <option>Happy Anniversary</option>
      </select>

    </div>
  )
}

export default GreetingForm
