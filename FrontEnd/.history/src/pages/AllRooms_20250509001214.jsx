import React from 'react'
import { roomsDummyData } from '../assets/assets'

const AllRooms = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col-reverse lg:flex-row justify-between items-start pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      <div>
        <div className='flex flex-col items-start text-left'>
            <h1 className='font-playfair text-4xl md:text-[40px]'>Danh Sách Glamping</h1>
            <p className='text-sm md:text-base text-gray-500/90 mt-2'>Description</p>
        </div>

        {roomsDummyData.map((room) => (
            <div>
                <img onClick={}
                src={room.images[0]} 
                alt='hotel-img'
                 title='View Room Details' 
                 className='max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer'/>
            </div>
        ))}
      </div>

      <div>

      </div>
    </div>
  )
}

export default AllRooms
