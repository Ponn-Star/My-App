import React from 'react'
import { Link } from 'react-router-dom'

const HotelCard = ({room, index}) => {
  return (
    <div>
      <Link to={'/room/' + room._id} ocClick={()=> scrollTo} className='flex flex-col gap-2'>

      </Link>
    </div>
  )
}

export default HotelCard
