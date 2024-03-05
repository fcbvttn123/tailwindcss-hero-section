import './App.css'
import { Layout } from './components/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='product' element={<h1>Product</h1>}/>
          <Route path='features' element={<h1>Features</h1>}/>
        </Route>
      </Routes>    
    </BrowserRouter>
  )
}

export default App




// https://tailwindui.com/components/marketing/sections/heroes
