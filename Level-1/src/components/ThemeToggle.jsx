import React, { useState } from 'react'

const ThemeToggle = () => {
     const [darkMode, setDarkMode] = useState(false);

     const toggleTheme = () => {
        setDarkMode(!darkMode);
     }

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white ' : 'bg-white text-black' } min-h-screen flex flex-col items-center justify-center transition-colors duration-500 `}>
        <h1 className='text-3xl font-bold mb-4'>
        {darkMode ? "🌙 Dark Mode" : "🌞 Light Mode"}
        </h1>bg-white
        <button
            onClick={toggleTheme}
            className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >  Toggle theme
        </button>
    </div>
  )
}

export default ThemeToggle
