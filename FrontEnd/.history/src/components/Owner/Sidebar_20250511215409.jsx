import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  const sidebarLinks = [
    { name: "Dashboard", path: "/owner", icon: assets.dashboardIcon },
    { name: "Add Room", path: "/owner/add-room", icon: assets.addIcon },
    { name: "List Room", path: "/owner/list-room", icon: assets.listIcon },
  ];

  return (
    <div className='md:w-64 w-16 border-r h-full text-base border-gray-300 pt-4 flex flex-col transition-all duration-300'>
      {sidebarLinks.map((item, index) => (
        <NavLink to={item.path} key={index} end='/owner' className={({ isActive }) => `flex items-center gap-4 p-2 rounded-md hover:bg-gray-200 ${isActive ? 'bg-gray-200' : ''}`}>

        </NavLink>
      ))}
    </div>
  );
}

export default Sidebar
