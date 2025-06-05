import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import Title from '../../components/Title'
import toast from 'react-hot-toast'
import { useAppContext } from '../../conext/AppContext'

const AddRoom = () => {
  const { getToken, axios, fetchRooms, role } = useAppContext();

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'WiFi Miễn Phí': false,
      'Bữa Sáng Miễn Phí': false,
      'Khu Cẩm Tú Cầu': false,
      'View Núi Hồ': false,
      'Khu Ngữ Sắc': false,
      'Khu Đồi Thông': false,
    },
    isAvailable: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Chuyển amenities object thành array
    const amenitiesArr = Object.keys(inputs.amenities).filter(key => inputs.amenities[key]);

    // Xử lý ảnh: nếu backend nhận link ảnh, bạn cần upload lên cloud trước và lấy link
    // Ở đây giả sử backend nhận mảng tên file (hoặc link), bạn cần sửa lại nếu backend nhận file thực tế
    const imagesArr = Object.values(images).filter(Boolean);

    // Nếu backend nhận link ảnh, bạn cần upload lên cloud trước, ở đây chỉ lấy tên file làm ví dụ
    // Nếu backend nhận file, bạn cần dùng FormData và gửi kiểu multipart/form-data

    try {
      const payload = {
        roomType: inputs.roomType,
        pricePerNight: Number(inputs.pricePerNight),
        amenities: amenitiesArr,
        images: imagesArr.map(img => typeof img === 'string' ? img : img.name), // hoặc upload lên cloud và lấy link
        isAvailable: inputs.isAvailable,
      };

      // Nếu backend nhận file, hãy dùng FormData thay cho JSON
      // const formData = new FormData();
      // formData.append('roomType', payload.roomType);
      // formData.append('pricePerNight', payload.pricePerNight);
      // payload.amenities.forEach(a => formData.append('amenities[]', a));
      // imagesArr.forEach(img => formData.append('images', img));
      // formData.append('isAvailable', payload.isAvailable);

      const { data } = await axios.post(
        '/api/rooms',
        payload,
        {
          headers: { Authorization: `Bearer ${await getToken()}` }
        }
      );
      if (data.success) {
        toast.success('Room added successfully!');
        fetchRooms(); // Cập nhật lại danh sách phòng trong context
        // Reset form
        setInputs({
          roomType: '',
          pricePerNight: 0,
          amenities: {
            'WiFi Miễn Phí': false,
            'Bữa Sáng Miễn Phí': false,
            'Khu Cẩm Tú Cầu': false,
            'View Núi Hồ': false,
            'Khu Ngữ Sắc': false,
            'Khu Đồi Thông': false,
          },
          isAvailable: true,
        });
        setImages({ 1: null, 2: null, 3: null, 4: null });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  if (role !== "Admin") {
    return <div className="text-center py-20 text-red-500">Bạn không có quyền truy cập trang này.</div>
  }

  return (
    <form onSubmit={handleSubmit}>
      <Title align='left' font='outfit' title='Add Room' subTitle='Fill in the details carefully and accurate room details, pricing, and amenities to enhance the user booking experience.' />
      {/* Upload Area For Images */}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImages${key}`} key={key}>
            <img className='max-h-13 cursor-pointer opacity-80' src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea} alt="" />
            <input type="file" accept="image/*" id={`roomImages${key}`} hidden onChange={e => setImages({ ...images, [key]: e.target.files[0] })} />
          </label>
        ))}
      </div>
      <div className='w-full flex max-sm:flex-col sm:gap-4 mt-4'>
        <div className='flex-l max-w-48'>
          <p className='text-gray-800 mt-4'>Room Type</p>
          <select value={inputs.roomType} onChange={e => setInputs({ ...inputs, roomType: e.target.value })} className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'>
            <option value="">Select Room Type</option>
            <option value="Lều đơn">Lều đơn</option>
            <option value="Lều đôi">Lều đôi</option>
            <option value="Lều gia đình">Lều gia đình</option>
          </select>
        </div>
        <div>
          <p className='mt-4 text-gray-800'>
            Price <span className='text-xs'>/night</span></p>
          <input
            type="number"
            placeholder="0"
            className="border border-gray-300 mt-1 rounded p-2 w-24"
            value={inputs.pricePerNight}
            onChange={e => setInputs({ ...inputs, pricePerNight: e.target.value })}
          />
        </div>
      </div>
      <p className='text-gray-800 mt-4'>Amenities</p>
      <div className='flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm'>
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`amenities${index + 1}`}
              checked={inputs.amenities[amenity]}
              onChange={() => setInputs({
                ...inputs,
                amenities: { ...inputs.amenities, [amenity]: !inputs.amenities[amenity] }
              })}
            />
            <label htmlFor={`amenities${index + 1}`}>{amenity}</label>
          </div>
        ))}
      </div>
      <div className='flex items-center gap-2 mt-4'>
        <input
          type="checkbox"
          id="isAvailable"
          checked={inputs.isAvailable}
          onChange={() => setInputs({ ...inputs, isAvailable: !inputs.isAvailable })}
        />
        <label htmlFor="isAvailable">Available</label>
      </div>
      <button type="submit" className='bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer'>
        Add Room
      </button>
    </form>
  )
}

export default AddRoom
