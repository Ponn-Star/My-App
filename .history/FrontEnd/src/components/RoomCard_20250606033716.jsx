import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const ADDRESS = "86 Khe Sanh, Phường 10, Thành Phố Đà Lạt, Đà Lạt, Vietnam"
const DEFAULT_IMAGE = assets.uploadArea;

const RoomCard = ({ room, index }) => {
  const imgKey = room.images && room.images.length > 0 ? room.images[0] : null;
  const imgSrc = (imgKey && assets[imgKey]) || assets.uploadArea;

  return (
    <Link
      to={'/room/' + room._id}
      onClick={() => window.scrollTo(0, 0)}
      className='relative max-w-70 w-full rounded-xl overflow-hidden bg-white text-gray-500/90 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]'
    >
      <img src={assets[imgKey] || imgKey} alt={room.roomType} className="w-full object-cover" />

      {index % 2 === 0 && (
        <p className='px-3 py-1 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>
          Best Seller
        </p>
      )}

      <div className='p-4 pt-5'>
        <div className='flex items-center justify-between'>
          <p className='font-playfair text-xl font-medium text-gray-800'>{room.roomType}</p>
          <div className='flex items-center gap-1'>
            <img src={assets.starIconFilled} alt="star-icon" className="w-4 h-4" /> 4.5
          </div>
        </div>

        <div className='flex items-center gap-1 text-sm mt-1'>
          <img src={assets.locationIcon} alt="location-icon" className="w-4 h-4" />
          <span>{ADDRESS}</span>
        </div>

        <div className='flex items-center justify-between mt-4'>
          <p>
            <span className='text-xl text-gray-800'>{room.pricePerNight}</span>.000/Đêm
          </p>
          <button className='px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-gray-50 transition-all cursor-pointer'>
            Book Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default RoomCard
