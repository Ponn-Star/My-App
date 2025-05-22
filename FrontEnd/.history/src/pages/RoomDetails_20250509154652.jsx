import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { roomsDummyData } from '../assets/assets'

const RoomDetails = () => {
    const {id} = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    },[])
  return (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:'>
      
    </div>
  )
}

export default RoomDetails
