import React from 'react'
import { roomCommonData } from '../assets/assets'
import HotelCard from './HotelCard'

const FeaturedDestination = () => {
  return (
    <div>
      {roomCommonData.slice(0, 4).map((room, index) => (
        <HotelCard key={room._id} room={room} index={index} />
      ))}
    </div>
  )
}

export default FeaturedDestination
