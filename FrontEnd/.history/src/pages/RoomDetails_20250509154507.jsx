import React, {use, useState} from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'

const RoomDetails = () => {
    const {id} = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find((room => room._id === id){
    },[])
  return (
    <div>
      <h1 className='pt-64'>Rooms Details</h1>
    </div>
  )
}

export default RoomDetails
