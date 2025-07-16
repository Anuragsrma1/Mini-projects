import React, { useState } from 'react'

const Tabs = () => {
    const tabs = ['Home' , 'About' , 'Contact'] ;
    const [active , setActive] = useState(0);

  return (
    <div className='max-w-md mx-auto mt-20'> 
         <div className='flex space-x-4 mb-4'>
            {
                tabs.map((tab , i) => ( 
                    <button 
                      key={i} 
                      className={`px-4 py-2 rounded ${active === i ? "bg-blue-500 text-white" :"bg-gray-200 "}`}
                      onClick={() => setActive(i)}
                    >
                        {tab}
                    </button>
                ))}
         </div>
         <div className='p-4 bg-gray-100 rounded'>
            <h2 className='text-xl'>{tabs[active]} Content</h2>
         </div>
    </div>
  )
}

export default Tabs
