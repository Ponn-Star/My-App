import React from 'react'
import Navbar from './components/Navbar'
import AdminNavbar from './components/Admin/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import Footer from './components/Footer';
import MyBookings from './pages/MyBookings';
import Layout from './pages/Admin/Layout';
import Dashboard from './pages/Admin/Dashboard';
import ListRoom from './pages/Admin/ListRoom';
import AddRoom from './pages/Admin/AddRoom';
import AdminRoute from './components/AdminRoute'

function App() {

  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <div>
      {isAdminRoute ? <AdminNavbar /> : <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rooms' element={<AllRooms />} />
        <Route path='/rooms/:id' element={<RoomDetails />} />
        <Route path='/my-bookings' element={<MyBookings />} />
        
        <Route path='/admin' element={<Layout />}>
          <Route index element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          } />
          <Route path='add-room' element={
            <AdminRoute>
              <AddRoom />
            </AdminRoute>
          } />
          <Route path='list-room' element={
            <AdminRoute>
              <ListRoom />
            </AdminRoute>
          } />
        </Route>
      </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
