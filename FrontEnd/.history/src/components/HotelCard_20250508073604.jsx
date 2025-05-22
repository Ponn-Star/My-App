import React from 'react'
import { Link } from 'react-router-dom'

const HotelCard = ({room, index}) => {
  return (
    <div>
      <Link to={'/room/' + room._id} ocClick={()=> scrollTo(0,0)} key={room._id}>
          <img src={room.images[0]} alt="" />
          <p>Best Seller</p>
          <div>
            <div>
                <p>{room.hotel.name</p>
            </div>
          </div>
      </Link>
    </div>
  )
}

export default HotelCard
