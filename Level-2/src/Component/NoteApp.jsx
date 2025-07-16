import React, { useEffect, useState } from 'react'

const NoteApp = () => {3

    const [note , setNote] = useState();
    const [notes , setNotes] = useState(() => {
        const stored = localStorage.getItem('notes');
        return stored ? JSON.parse(stored) : [];
    });

    const [editingId , setEditingId] = useState(null);
    const [ editText , setEditText ] = useState('');

    useEffect( () => {
        localStorage.setItem('notes' , JSON.stringify(notes));
    },[notes]);

    const handleAdd = () => {
        if(note.trim() !== ''){
            setNotes([...notes , { text : note , id: Date.now()}]);
            setNote('');
        }
    } 

     const handleDelete = (id) => {
        setNotes(notes.filter((n) => n.id !== id ));
     }

     const handleEdit = (note) => {
        setEditingId(note.id);
        setEditText(note.text);
     }

    const handleSave = (id) => {
        const updatedNotes = notes.map ((n) => 
          n.id === id ? {...n , text:editText} : n
        );
      setNotes(updatedNotes);
      setEditingId(null);
      setEditText('');
    }

    const handleCancel = () => {
       setEditingId(null);
         setEditText('');
    }
  return (
    <div className='max-w-md mx-auto p-4 bg-white shadow-md rounded-lg mt-10'>
       <h2 className='text-xl font-bold text-center mb-4'>📝 Notes App</h2>

       { /*  Input + Add button*/}
       <div className='flex  space-x-2'>     
         <input 
            type = 'text'
             value={note}
             onChange={(e) => setNote(e.target.value)}
             placeholder='Enter your note...'
             className='flex-grow p-2 border rounded'
         />
         <button onClick={handleAdd} className='bg-blue-500 text-white px-4 py-2 rounded'>Add</button>
       </div>

        { /* Notes List*/}
       <ul className="mt-6 space-y-2">

        {notes.map((n) => (
          <li 
          key={n.id} 
          className="flex justify-between items-center bg-gray-100 p-2 rounded"
          >
           
           { editingId === n.id ? (
            <>
            <input 
              type='text'
              value={editText}
            onChange={(e) => setEditText(e.target.value)
            }
            className= 'border p-1 rounded flex-grow mr-2' 
            />

            <button 
              onClick={() => handleSave(n.id)}
              className='text-green-500 hover:underline mr-1'
            >save</button>
            <button
              onClick={handleCancel}
              className='text-gray-500 hover:underline'
            >cancel</button>
            </>
           ) : (
            <>
              <span>{n.text}</span>
              <div className='flex gap-2'>
                <button
                 onClick={() => handleEdit(n)}
                 className='text-blue-500 hover:underline'
                >Edit
                </button>
            <button
              onClick={() => handleDelete(n.id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
              </div>
            </>
           )}
           
           
           
           
           
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NoteApp
