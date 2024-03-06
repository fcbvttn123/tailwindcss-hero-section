import './App.css'
import { Layout } from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='px-8'>
      <div>
        <h1 className='text-4xl font-bold text-center mt-28'>Data to enrich your online business</h1>
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
    </div>
  )
}

export default App




// https://tailwindui.com/components/marketing/sections/heroes
