import React from 'react'
import HotelCard from './HotelCard'
import { roomsDummyData } from '../assets/assets'

const FeaturedDestination = () => {
  return (
    <div>
      {roomsDummyData.slice(0, 4).map((room, index) => (
  <HotelCard key={room._id || index} room={room} index={index} />
))}

    </div>
  )
}

export default FeaturedDestination
