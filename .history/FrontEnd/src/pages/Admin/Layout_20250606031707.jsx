import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Admin/Navbar'
import { useAppContext } from '../../conext/AppContext'

const Layout = () => {
  const { role } = useAppContext();
  if (role !== "Admin") {
    return <div className="text-center py-20 text-red-500">Bạn không có quyền truy cập trang này.</div>
  }
  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex h-full'>
        <Sidebar />
        <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
            <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout
