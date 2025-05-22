import React from 'react'
import { Link } from 'react-router-dom'

const HotelCard = ({room, index}) => {
  return (
    <div>
      <Link to={'/room/' + room._id} ocClick={()=> scrollTo(0,0)} key={room._id}>
        <div className='flex flex-col gap-2'>
          <img src={room.photos
      </Link>
    </div>
  )
}

export default HotelCard
