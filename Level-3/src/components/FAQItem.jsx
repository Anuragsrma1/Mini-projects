import React from 'react'
import { useState } from 'react'


const FAQItem = ({faq , isOpen, onClick}) => {

    const [openChildIndex , setOpenChildIndex] = useState(null);

  return (
    <div className='border rounded mb-2  p-4 bg-white shadow'>
        <div onClick={onClick} className='cursor-pointer font-bold text-lg'>
            {faq.question}
        </div>      

     {isOpen && (
        <>
        <p className='mt-2 text-gray-700'>{faq.answer}</p>
         
         {
            faq.children && (
              <div className='ml-4 mt-4 space-y-2'> 
                {faq.children.map((child, index) => (
                    <div key={index} className='border-l pl-4'>
                        <div
                         className='cursor-pointer text-blue-600'
                         onClick={() => setOpenChildIndex(openChildIndex === index ? null : index)}                         
                        >
                        {child.question}             
                    </div>
                    {openChildIndex === index && (
                        <p className='mt-1  text-sm text-gray-600'>{child.answer}</p>
                    )}
                    </div>
                ))}
              </div>  
            )
         }
        </>
     )}   
    </div>
  )
}

export default FAQItem
