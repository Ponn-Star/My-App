import React from 'react'
import { roomsCommonData } from '../assets/assets'
import HotelCard from './HotelCard'

const FeaturedDestination = () => {
  return (
    <div>
      {roomsCommonData.slice(0, 4).map((room, index) => (
  <HotelCard key={room._id || index} room={room} index={index} />
))}

    </div>
  )
}

export default FeaturedDestination
