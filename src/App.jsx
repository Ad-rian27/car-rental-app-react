import { useState } from 'react'
import './App.css'
import ViewCars from './components/ViewCars'
import AddCar from './components/AddCar'
import Home from './components/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<AddCar />} />
          <Route path='/view' element={<ViewCars />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
