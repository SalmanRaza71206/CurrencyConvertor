import { useState } from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router-dom'


function App() {
 

  return (
  <section className=' font-poppins'>
    <Navbar/>
    <div className=''>
      <Outlet/>
    </div>
  </section>
  )
}

export default App
