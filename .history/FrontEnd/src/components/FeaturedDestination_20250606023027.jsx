import React, { useEffect, useState } from 'react'
import HotelCard from './RoomCard'
import Title from './Title'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useAppContext } from '../conext/AppContext'
import toast from 'react-hot-toast'

const FeaturedDestination = () => {
  const navigate = useNavigate()
  const { getToken } = useAppContext();
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const { data } = await axios.get('/api/rooms', {
          headers: { Authorization: `Bearer ${await getToken()}` }
        });
        if (data.success) {
          setRooms(data.rooms);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchRooms();
  }, [getToken]);

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>

        <Title title='Glampings' subTitle='Khám phá và trải nghiệm những dịch vụ mà Forest Scent mang đến cho bạn. Hãy lựa chọn Glamping – nơi hòa quyện giữa thiên nhiên hoang dã và tiện nghi sang trọng, mang đến cho bạn trải nghiệm khó quên.' />

        <div className='flex flex-wrap items-center justify-between gap-6 mt-20'>
        {rooms.slice(0, 4).map((room, index) => (
            <HotelCard key={room._id} room={room} index={index} />
        ))}
        </div>

        <button onClick={() => { navigate('/rooms'); scrollTo(0, 0); }} 
        className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer">
          Xem Tất Cả Glamping
        </button>
    </div>
  )
}

export default FeaturedDestination
