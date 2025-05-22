import React, { useState } from 'react'
import Title from '../components/Title'
import { userBookingaDummyData } from '../assets/assets'

const MyBookings = () => {

    const [bookings, setBookings] = useState(userBookingaDummyData)

  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
      <Title title='My Bookongs' subTitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks' align='left'/>

      <div className='max-w-6xl mt-8 w-full text-gray-800'>
        <div>
            <div className='w-1/3'>Glamping</div>
            <div className='w-1/3'>Date & Timings</div>
            <div className='w-1/3'>Payment</div>
        </div>

        {bookings.map((booking) => (
            <div key={booking._id} className=''>
                <div>

                </div>
                <div>

                </div>
                <div>

                </div>
            </div>
        ))}

      </div>
    </div>
  )
}

export default MyBookings
