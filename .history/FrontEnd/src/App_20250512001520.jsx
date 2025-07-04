import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import AllRooms from './pages/AllRooms';
import RoomDetails from './pages/RoomDetails';
import Footer from './components/Footer';
import MyBookings from './pages/MyBookings';
import Layout from './pages/Owner/Layout';
import Dashboard from './pages/Owner/Dashboard';
import ListRoom from './pages/Owner/ListRoom';
import AddRoom from './pages/Owner/AddRoom';

function App() {

  const isOwnerPath = useLocation().pathname.includes("admin");
  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rooms' element={<AllRooms />} />
          <Route path='/rooms/:id' element={<RoomDetails />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/admin' element={<Layout />} >
            <Route index element={<Dashboard />} />
            <Route path='add-room' element={<AddRoom />} />
            <Route path='list-room' element={<ListRoom />} />
           </Route>
        </Routes>
      </div>
      <Footer />
    </div>
  )
}

export default App
