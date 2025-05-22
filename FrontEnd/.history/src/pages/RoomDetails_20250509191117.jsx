import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { assert, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'
import { useEffect } from 'react'

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
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
            <h1>{room.hotel.name}<span className='font-inter text-sm'>{room.roomType}</span></h1> 
            <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
        </div>

        <div>
            <StarRating/>
            <p className='ml-2'>200+ reviews</p>
        </div>

        <div className='flex items-center gap-1 text-gray-500 mt-2'>
            <img src={assert.locationIcon} alt='location-icon' />
            <span>{room.hotel.address}</span>
        </div>
    </div>
  )
}

export default RoomDetails
