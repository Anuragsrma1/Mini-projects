import React, { useState } from 'react'

const faqs = [
  { question: "What is React?", answer: "React is a JavaScript library for building UIs." },
  { question: "What is a component?", answer: "A component is a reusable piece of UI." },
  { question: "What is state?", answer: "State is a way to manage data in a component." },
  { question: "What is a prop?", answer: "Props are inputs to components." },
  { question: "What is JSX?", answer: "JSX is a syntax extension for JavaScript that looks similar to HTML." }
];
const Accordion = () => {

   const [openIndex , setOpenIndex] = useState(null);
 
    const toggle = (index) => {
           setOpenIndex(index === openIndex ? null :index)
    }
  return (
    <div className='max-w-md mx-auto mt-6 cursor-pointer'> 
       {
        faqs.map((faq,i) => (
          <div key={i} className='border-b py-3'> 
              <h3 className='cusror-pointer font-bold' onClick={() => toggle(i) }>
                  {faq.question}
              </h3>
              {openIndex === i &&  <p className='text-black-600 mt-1'>{faq.answer}</p> }
          </div>
        ))
       }       
    </div>
  )
}

export default Accordion
