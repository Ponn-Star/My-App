import React, {useState} from 'react'
import { useParams } from 'react-router-dom'

const RoomDetails = () => {
    const {id} = useParams()
    const [room, setRoom] = useState(null)
  return (
    <div>
      <h1 className='pt-64'>Rooms Details</h1>
    </div>
  )
}

export default RoomDetails
