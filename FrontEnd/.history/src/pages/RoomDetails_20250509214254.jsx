import React, { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { assets, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
    const {id} = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(() => {
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    },[])
  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
    <h1 className='text-3xl md:text-4xl font-playfair'>
      {room.hotel.name} <span className='font-inter text-sm'>{room.roomType}</span>
    </h1>
    <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
  </div>

        <div className='flex items-center gap-1 mt-2'>
            <StarRating/>
            <p className='ml-2'>200+ reviews</p>
        </div>

        <div className='flex items-center gap-1 text-gray-500 mt-2'>
            <img src={assets.locationIcon} alt='location-icon' />
            <span>{room.hotel.address}</span>
        </div>

        <div>
            <img src={mainImage} alt='Room Image' className='w-full rounded-xl shadow-lg object-cover' />
        </div>
        <div>
            {room?.images.length > 1 && room.images.map((image, index) => (
                <img onClick={() => setMainImage(image)} key={index} src={image} alt='Room Image' className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`}/>
            ))}
        </div>
    </div>
  )
}

export default RoomDetails
