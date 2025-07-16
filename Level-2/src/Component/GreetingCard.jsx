import React from 'react'

const GreetingCard = ({name , greeting}) => {
  if (!name?.trim?.()) return null;
  return (
    <div className='mt-6 p-4 border rounded shadow '>
       <p className='text-xl font-semibold '>{greeting}, {name} 🎈</p>
    </div>
  )
}

export default GreetingCard
