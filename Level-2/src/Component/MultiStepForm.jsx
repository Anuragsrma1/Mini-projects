import React, { useState } from 'react'

const MultiStepForm = () => {

    const [step , setStep] = useState(1);
    const [form , setForm] = useState({
        name:'',
        email:'',
        role:''
    });

    const handleChange = (e) => {
        setForm({...form , [e.target.name] : [e.target.value]});
    }

    const next = () => { setStep(prev => prev + 1)};
    const prev = () => { setStep(prev => prev - 1)};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted: ' , JSON.stringify(form))
    }
  return (
    <div className='max-w-md mx-auto mt-10 p-4 border rounded'>
       <h2 className='text-xl font-bold mb-4'>🧾 Multi-Step Form</h2>
       <form onSubmit={handleSubmit} className='space-y-4'>
           {
            step === 1 && (
            <>
            <input 
                 name='name' 
                 type='text'
                 placeholder='Name'
                 value={form.name}
                 onChange={handleChange}
                 className='w-full p-2 border rounded'
            />

            <input 
               name='email'
               type='email'
               placeholder='Email'
               value={form.email}
               onChange={handleChange}
               className='w-full p-2 border rounded'
            />
            <button type='button' onClick={next} className='bg-blue-500 text-white px-4 py-2 rounded'>Next</button>
            </>
           )}
       
        {
            step === 2 && (
                <>
                 <input 
                    name='role'
                    type='text'
                    placeholder='Role you are applying for' 
                    value={form.role}
                    onChange={handleChange}
                    className='w-full p-2 border rounded'
                 />
                 <div className='flex justify-between'>
                   <button type='button' onClick={prev} className='bg-gray-400 text-white px-4 py-2 rounded'>Prev</button>
                <button type='submit' className='bg-green-500 text-white px-4 py-2 rounded ' >submit</button>
                 </div>
                </>
            )
        }
       </form>
    </div>
  )
}

export default MultiStepForm
