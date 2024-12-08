import { useState } from 'react';
import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <>
      <nav className='bg-teal-500 dark:bg-teal-900 h-17 p-3 flex justify-between'>
        <div>Nav bar</div>
        <div>
          <button 
            className="bg-teal-800 dark:bg-cyan-300 p-2 rounded-full"
            aria-label="Toggle theme" 
            onClick={toggleTheme}
          >
            {isDark ? '☀' : '🌜'}
          </button>
        </div>
      </nav>

      <main className='bg-red-500 dark:bg-gray-800 p-3 h-full'>
        <h1 className='text-3xl font-bold text-white dark:text-yellow-500'>
          Vite + React
        </h1>
        <br />
        <h2 className="text-xl font-bold text-white dark:text-yellow-300">
          Hello world!
        </h2>
        <br />
        <p className='text-white dark:text-gray-200'>
          This is a Vite React project.
        </p>
      </main>
    </>
  );
}

export default App;
