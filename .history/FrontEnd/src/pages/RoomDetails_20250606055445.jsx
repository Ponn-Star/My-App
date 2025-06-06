import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { facilityIcons, Introduction, assets } from '../assets/assets'
import StarRating from '../components/StarRating'
import { useAppContext } from '../conext/AppContext'
import toast from 'react-hot-toast'

const RoomDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const { rooms, axios, getToken, user } = useAppContext();
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [guests, setGuests] = useState(1);
    const [canBook, setCanBook] = useState(false);

    useEffect(() => {
        // Ưu tiên lấy từ context
        let foundRoom = rooms.find(r => String(r._id) === String(id));
        if (foundRoom) {
            setRoom(foundRoom);
            setMainImage(foundRoom.images[0]);
        } else {
            // Nếu chưa có, fetch từ API
            const fetchRoom = async () => {
                try {
                    const { data } = await axios.get(`/api/rooms`, {
                        headers: { Authorization: `Bearer ${await getToken()}` }
                    });
                    if (data.success) {
                        const found = data.rooms.find(r => String(r._id) === String(id));
                        if (found) {
                            setRoom(found);
                            setMainImage(found.images[0]);
                        } else {
                            toast.error("Không tìm thấy phòng");
                        }
                    } else {
                        toast.error(data.message);
                    }
                } catch (error) {
                    toast.error(error.message);
                }
            };
            fetchRoom();
        }
    }, [id, rooms, axios, getToken]);

    const handleCheckAvailability = async (e) => {
        e.preventDefault();
        if (!checkInDate || !checkOutDate || !room) return;
        try {
            const { data } = await axios.post('/api/bookings/check-availability', {
                room: room._id,
                checkInDate,
                checkOutDate
            }, {
                headers: { Authorization: `Bearer ${await getToken()}` }
            });
            if (data.success && data.isAvailable) {
                toast.success("Phòng còn trống! Bạn có thể đặt phòng ngay.");
                setCanBook(true);
            } else {
                toast.error("Phòng đã được đặt hết trong thời gian này!");
                setCanBook(false);
            }
        } catch {
            toast.error("Lỗi kiểm tra phòng trống");
            setCanBook(false);
        }
    };

    const handleBookNow = async (e) => {
        e.preventDefault();
        if (!user) {
            toast.error("Bạn cần đăng nhập để đặt phòng!");
            return;
        }
        if (!checkInDate || !checkOutDate || !room) return;
        try {
            const { data } = await axios.post('/api/bookings/book', {
                room: room._id,
                checkInDate,
                checkOutDate,
                soKhach: guests,
                phuongThucThanhToan: "ThanhToanTaiCho"
            }, {
                headers: { Authorization: `Bearer ${await getToken()}` }
            });
            if (data.success) {
                toast.success("Đặt phòng thành công!");
                setCanBook(false);
                setTimeout(() => {
                    navigate('/my-bookings');
                }, 500); // Thêm delay nhỏ để toast hiển thị trước khi chuyển trang
            } else {
                toast.error(data.message);
            }
        } catch {
            toast.error("Lỗi đặt phòng");
        }
    };

    if (!room) return <div className="text-center py-20 text-gray-400">Đang tải thông tin phòng...</div>;

    return (
        <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
                <h1 className='text-3xl md:text-4xl font-playfair'>
                    {room.roomType}
                </h1>
                <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
            </div>
            <div className='flex items-center gap-1 mt-2'>
                <StarRating />
                <p className='ml-2'>200+ reviews</p>
            </div>
            <div className='flex flex-col lg:flex-row mt-6 gap-6'>
                <div className='lg:w-1/2 w-full'>
                    <img src={assets[mainImage] || mainImage} alt="Room Image" className='w-full rounded-xl shadow-lg object-cover' />
                </div>
                <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                    {room?.images.length > 1 && room.images.map((img, idx) => (
                        <img key={idx} src={assets[img] || img} alt='Room Image' className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === img && 'outline-3 outline-orange-500'}`} onClick={() => setMainImage(img)} />
                    ))}
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between mt-10'>
                <div className='flex flex-col'>
                    <h1 className='text-3xl md:text-4xl font-playfair'>Luxury Glamping</h1>
                    <div className='flex items-center gap-3 mb-6 mt-4'>
                        {room.amenities.map((item, index) => (
                            <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                                <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                                <p className='text-xs'>{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <p className='text-2xl font-medium'>{room.pricePerNight}.000 VND/night</p>
            </div>
            <form
                className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'
                onSubmit={canBook ? handleBookNow : handleCheckAvailability}
            >
                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
                    <div className='flex flex-col'>
                        <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
                        <input type="date" id="checkInDate" value={checkInDate} onChange={e => setCheckInDate(e.target.value)} className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>
                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col'>
                        <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
                        <input type="date" id="checkOutDate" value={checkOutDate} onChange={e => setCheckOutDate(e.target.value)} className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>
                    <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                    <div className='flex flex-col'>
                        <label htmlFor="guests" className='font-medium'>Guests</label>
                        <input type="number" id="guests" value={guests} onChange={e => setGuests(e.target.value)} placeholder="0" className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
                    </div>
                </div>
                <button
                    type="submit"
                    className='bg-blue-500 hover:bg-blue-700 active:scale-95 transition-all text-white rounded-md max-md:w-full max-md:px-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'
                >
                    {canBook ? "Đặt phòng ngay" : "Kiểm tra phòng trống"}
                </button>
            </form>
            <div className='mt-25 space-y-4'>
                {Introduction.map((spec, index) => (
                    <div key={index} className='flex items-start gap-2'>
                        <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                        <div>
                            <p className='text-base'>{spec.title}</p>
                            <p className='text-gray-500'>{spec.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RoomDetails
