import React from 'react'
import HotelCard from './HotelCard'
import { roomsDummyData } from '../assets/assets'

const FeaturedDestination = () => {
  return (
    <div className='flex flex-wrap items-center justify-between gap-6 mt-20'>
      {roomsDummyData.slice(0, 4).map((room, index) => (
  <HotelCard key={room._id || index} room={room} index={index} />
))}

    </div>
  )
}

export default FeaturedDestination
