import React from 'react'
import { useParams } from 'react-router-dom'

const RoomDetails = () => {
    const {id} = useParams()
    
  return (
    <div>
      <h1 className='pt-64'>Rooms Details</h1>
    </div>
  )
}

export default RoomDetails
