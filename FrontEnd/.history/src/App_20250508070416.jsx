import React from 'react'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

function App() {

  const isOwner = useLocation().pathname === '/owner'
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App
