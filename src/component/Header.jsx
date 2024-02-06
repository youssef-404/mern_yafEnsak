import { Link } from 'react-router-dom'
import darkLogo from '../assets/YAF1.png'
import lightLogo from '../assets/YAF2.png'
import { useEffect, useState } from 'react'

export default function Header() {
  const [hiddenHambruger,setHiddenHambruger] = useState('hidden')
  const [preferedTheme,setPreferedTheme] = useState(localStorage.getItem('yafTheme') || 'dark')

  useEffect(()=>{
    preferedTheme ==='dark' ?
      document.documentElement.classList.add('dark')
    : document.documentElement.classList.remove('dark')

    localStorage.setItem('yafTheme',preferedTheme)
  },[preferedTheme])
  const toggleDarkMode = () =>{
    setPreferedTheme(prev => prev === 'dark' ? 'light' : 'dark')
  }
  
  return (
    <nav className='flex text-white flex-wrap items-center justify-between md:p-4'>
      <div className=' max-w-16'>
        <Link to='/'>
          <img src={preferedTheme ==='dark'? darkLogo : lightLogo}/>
        </Link>
      </div>
  
      <div className='flex flex-row-reverse items-center md:order-2'>
        <button 
          type="button"
          className="inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg md:hidden focus:outline-none dark:text-gray-400 text-gray-600"
          onClick={() => {setHiddenHambruger(prev => prev !== "" ? "" : "hidden")}}
          >
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <button 
          className="w-12 h-6 rounded-full p-1 bg-gray-400 dark:bg-gray-600 relative transition-colors duration-500 ease-infocus:outline-none "
          onClick={toggleDarkMode}
          >
          <div
            className="rounded-full w-4 h-4 bg-blue-600 dark:bg-blue-500 relative ml-0 dark:ml-6 pointer-events-none transition-all duration-300 ease-out"
            >
          </div>
        </button>

      </div>
      <div className={`items-center text-blue-800 dark:text-white justify-between transition duration-500 ${hiddenHambruger} w-full md:flex md:w-auto md:order-1`}>
          <ul className="flex capitalize flex-col gap-4 items-center p-4 md:p-0 mt-4 font-medium md:font-bold  rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg md:bg-inherit bg-slate-950/20 ">
            <Link 
              to="/"
              className='w-full md:w-fit hover:bg-dark-primary md:hover:bg-inherit text-center py-2 md:py-0'>
              <li>acceuil</li>
            </Link>
            <Link 
              to="formation"
              className='w-full md:w-fit hover:bg-dark-primary md:hover:bg-inherit text-center py-2 md:py-0'>
              <li>formation</li>
            </Link>
            <Link 
              to="participer"
              className='w-full md:w-fit hover:bg-dark-primary md:hover:bg-inherit text-center py-2 md:py-0'>
              <li>participer</li>
            </Link>
            <Link className='w-full md:w-fit hover:bg-dark-primary md:hover:bg-inherit text-center py-2 md:py-0'>
              <li>à propos</li>
            </Link>
            <Link className='w-full md:w-fit hover:bg-dark-primary md:hover:bg-inherit text-center py-2 md:py-0'>
              <li>contact</li>
            </Link>
          </ul>
       </div> 
    </nav>
  )
}
