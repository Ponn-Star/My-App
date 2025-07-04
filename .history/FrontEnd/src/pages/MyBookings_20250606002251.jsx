import React, { useState, useEffect } from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useAppContext } from '../conext/AppContext'

const MyBookings = () => {
    const { getToken } = useAppContext();
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const { data } = await axios.get('/api/bookings/user', {
                    headers: { Authorization: `Bearer ${await getToken()}` }
                });
                if (data.success) {
                    setBookings(data.bookings);
                } else {
                    toast.error(data.message);
                }
            } catch (error) {
                toast.error(error.message);
            }
        };
        fetchBookings();
    }, [getToken]);

    const handlePayment = async (bookingId) => {
        try {
            const { data } = await axios.post('/api/bookings/stripe-payment', { bookingId }, {
                headers: { Authorization: `Bearer ${await getToken()}` }
            });
            if (data.success) {
                window.location.href = data.url;
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title title='My Bookings' subTitle='Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks' align='left' />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div className='w-1/3'>Glamping</div>
                    <div className='w-1/3'>Date & Timings</div>
                    <div className='w-1/3'>Payment</div>
                </div>

                {bookings.map((booking) => (
                    <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>
                        {/* Room Info */}
                        <div className='flex flex-col md:flex-row'>
                            <img src={booking.room?.images?.[0]} alt="room-img" className='min-md:w-44 rounded shadow object-cover' />
                            <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                                <p className='font-playfair text-2xl'>
                                    {booking.room?.roomType}
                                </p>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.guestsIcon} alt="guests-icon" />
                                    <span>Guests: {booking.soKhach}</span>
                                </div>
                                <p className='text-base'>Total: {booking.tongTien}.000 VND</p>
                                <p className='text-sm text-gray-500'>Status: {booking.trangThai}</p>
                            </div>
                        </div>
                        {/* Date & Timings */}
                        <div className='flex flex-row md:items-center md:gap-12 mt-3 gap-8'>
                            <div>
                                <p>Check-In:</p>
                                <p className='text-gray-500 text-sm'>
                                    {new Date(booking.checkInDate).toLocaleDateString()}
                                </p>
                            </div>
                            <div>
                                <p>Check-Out:</p>
                                <p className='text-gray-500 text-sm'>
                                    {new Date(booking.checkOutDate).toLocaleDateString()}
                                </p>
                            </div>
                        </div>
                        {/* Payment */}
                        <div className='flex flex-col items-start justify-center pt-3'>
                            <div className='flex items-center gap-2'>
                                <div className={`h-3 w-3 rounded-full ${booking.daThanhToan ? "bg-green-500" : "bg-red-500"}`}></div>
                                <p className={`text-sm ${booking.daThanhToan ? "text-green-500" : "text-red-500"}`}>
                                    {booking.daThanhToan ? "Paid" : "Unpaid"}
                                </p>
                            </div>
                            {!booking.daThanhToan && (
                                <button onClick={() => handlePayment(booking._id)} className='px-4 py-1.5 mt-4 text-xs border border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'>
                                    Pay Now
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MyBookings
