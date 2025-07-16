import React from 'react'
import { useState } from 'react'
import FAQItem from './FAQItem';

const faqData = [
    {
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces.",
        children: [
            {
                question: "What is a component?",
                answer: "A component is a reusable piece of UI that can be composed to build complex interfaces."
            },
            {
                question: "What is state in React?",
                answer: "State is an object that determines the behavior of a component and how it renders."
            },
        ],
    },
    {
        question: "What is a hook?",
        answer: "Hooks are functions that let you use state and other React features without writing a class."
    },
    {
        question: "What is JSX?",
        answer: "JSX is a syntax extension for JavaScript that looks similar to XML or HTML."
    }
    
]


const Accordion = () => {

    const  [openIndex , setOpenIndex] = useState(null);
  return (
    <div className='max-w-md mx-auto p-4'>
        <h1 className='font-bold text-2xl mb-4 text-center'>📚 Nested FAQ Accordion</h1>
      
      {faqData.map((faq,index) => (
        <FAQItem 
          key={index}
          faq={faq}
        isOpen={openIndex === index}
        onClick={() => setOpenIndex(openIndex === index ? null :index)}
        />
      ))

      }
    </div>
  )
}

export default Accordion
