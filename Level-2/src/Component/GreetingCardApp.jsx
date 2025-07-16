import React, { useState } from 'react'
import GreetingCard from './GreetingCard';
import GreetingForm from './GreetingForm';

const GreetingCardApp = () => {
   const [name , setName] = useState('');
   const [greeting, setGreeting] = useState("Happy Birthday");

  return (
    <div className='max-w-md mx-autp mt-10 p-4 border rounded shadow'>
       <h2>🎉 Greeting Card Generator</h2>
   
        <GreetingForm 
          name={name}
          setName={setName}
          greeting={greeting}
            setGreeting={setGreeting}
        />

        <GreetingCard name={name} greeting={greeting}   />
    </div>
  )
}

export default GreetingCardApp
