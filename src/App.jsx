import { useState } from 'react'
import './App.css'
import { Layout } from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [menuPanelStatus, setMenuPanelStatus] = useState(true)

  let openMenuIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
  let closeMenuIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>

  return (
    <div className='px-8'>
      {/* Header Bar */}
      <div className='fixed top-0 left-0 w-full z-30 flex items-center justify-between px-8 py-4'>
        <button className='w-8 aspect-square bg-indigo-600 rounded-full'></button>
        {/* Mobile */}
        <button className='sm:hidden' onClick={() => setMenuPanelStatus(prev => !prev)}>{menuPanelStatus ? openMenuIcon : closeMenuIcon}</button>
        {/* Desktop */}
        <nav className='hidden sm:flex items-center gap-x-8'>
          <button className='font-bold w-full text-start'>Product</button>
          <button className='font-bold w-full text-start'>Feature</button>
          <button className='font-bold w-full text-start'>Marketplace</button>
          <button className='font-bold w-full text-start'>Company</button>
        </nav>
        <button className='hidden sm:flex items-center gap-x-2'>
          <p className='font-bold'>Log in</p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> 
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </button>
      </div>
      {/* Hero Section */}
      <div className='mt-36 mx-auto sm:max-w-2xl'>
        <button className='xs:flex items-center justify-center gap-x-1 mb-8 border rounded-3xl mx-auto px-4 py-1 hidden'>
          <p className='text-slate-500'>Announcing our next round of funding.</p>
          <div className='flex items-center gap-x-2'>
              <p className='font-bold text-indigo-500'>Read more</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> 
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
              </svg>
            </div>
        </button>
        <h1 className='text-4xl sm:text-6xl font-bold text-center'>Data to enrich your online business</h1>
        <h3 className='text-xl text-slate-500 text-center my-7'>Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</h3>
        <div className='flex items-center justify-center gap-x-6'>
          <button className='text-white font-bold p-2 px-3 bg-indigo-600 rounded-lg hover:opacity-80'>Get Started</button>
          <button className='flex items-center gap-x-2'>
            <p className='font-bold'>Learn more</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"> 
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
      {/* Menu Panel (Mobile) */}
      {!menuPanelStatus && 
      <div className="fixed inset-0 xs:left-1/3 bg-white flex flex-col items-start gap-y-6 px-8 pt-20 border-l-2">
        <button className='font-bold w-full text-start'>Product</button>
        <button className='font-bold w-full text-start'>Feature</button>
        <button className='font-bold w-full text-start'>Marketplace</button>
        <button className='font-bold w-full text-start'>Company</button>
        <button className='font-bold w-full text-start pt-8 mt-4 border-t'>Login</button>
      </div>}
    </div>
  )
}

export default App




// https://tailwindui.com/components/marketing/sections/heroes
