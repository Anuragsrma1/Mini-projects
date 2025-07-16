import React, { useEffect, useState } from 'react'

const BookmarkManager = () => {

    const [site , setSite] = useState('');
    const [url , setUrl] = useState('');
    const [bookmarks , setBookmarks] = useState(() => {
        const saved = localStorage.getItem('bookmarks');
        return saved ? JSON.parse(saved) : []; 
    });

    useEffect(() => {
        localStorage.setItem('bookmarks' , JSON.stringify(bookmarks));
    },[bookmarks])

   const handleAdd = () => {
       if(site && url) {
             setBookmarks([...bookmarks, {site , url}]);
             setSite('');
             setUrl('');
       }
   };

   const handleDelete = (index) => {
        setBookmarks(bookmarks.filter((_,i) => i !== index))
   } 

  return (
    <div className='p-4 max-w-md mx-auto'>
       <h2 className='font-bold text-xl mb-4'>🔖 Bookmark Manager</h2>
          <input
             placeholder='Enter site name...'
             value={site}
             onChange={(e) => setSite(e.target.value)}
             className='border p-2 mr-2'
          />
          <input 
             placeholder='Enter URL...'
             value={url}
             onChange={(e) => setUrl(e.target.value)}
             className='border p-2'
          />

          <button onClick={handleAdd} className='ml-1 bg-blue-500 text-white px-4 py-2 rounded'>
              Add
          </button>

           <ul className='mt-4 space-y-2'>
             {
                bookmarks.map((b,i) => (
                    <li key={i} className='flex justify-between items-center bg-gray-100 p-2'>
                    <a href={b.url} target='_blank' rel='noreferrer' className='text-blue-700' underline>{b.site}</a>
                    <button onClick={() => handleDelete(i)} className='text-red-500 '>Delete</button>
                    </li>
                ))
             }
           </ul>
    </div>
  )
}

export default BookmarkManager
