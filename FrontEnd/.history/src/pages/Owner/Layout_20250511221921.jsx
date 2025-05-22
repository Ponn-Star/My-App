import React from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Owner/Sidebar'

const Layout = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div>
        <Sidebar />
      </div>
    </div>
  )
}

export default Layout
