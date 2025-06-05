import React, { useState, useEffect } from 'react'
import Title from '../../components/Title'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../conext/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const { getToken, axios, role } = useAppContext();
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    bookings: []
  });

  useEffect(() => {
    if (role !== "Admin") return;
    const fetchDashboard = async () => {
      try {
        const { data } = await axios.get('/api/bookings/room', {
          headers: { Authorization: `Bearer ${await getToken()}` }
        });
        if (data.success) {
          setDashboardData(data.dashboardData);
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    fetchDashboard();
  }, [getToken, axios, role]);

  if (role !== "Admin") {
    return <div className="text-center py-20 text-red-500">Bạn không có quyền truy cập trang này.</div>
  }

  return (
    <div>
      <Title align='left' font='outfit' title='Dashboard' subtitle='Monitor your room listings, track bookings and analyze revenue—all in one place. Stay updated with real-time insights to ensure smooth operations.' />
      <div className='flex gap-4 my-8'>
        {/* ----- Total Bookings ----- */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalBookingIcon} alt="" className='max-sm:hidden h-10'/>
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Bookings</p>
            <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
          </div>
        </div>

        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalRevenueIcon} alt="" className='max-sm:hidden h-10'/>
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Revenue</p>
            <p className='text-neutral-400 text-base'>{dashboardData.totalRevenue}.000 VND</p>
          </div>
        </div>
      </div>

      <h2 className='text-xl text-blue-950/70 font-medium mb-5'>Recent Bookings</h2>
      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
        <table className='w-full'>
          <thead className='bg-gray-50'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium max-sm:hidden'>Room Name</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Total Amount</th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>Payment Status</th>
            </tr>
          </thead>

          <tbody className='text-sm'>
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>{item.user?.Ten || item.user?.username || item.user?.email}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 max-sm:hidden'>{item.room?.roomType}</td>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>{item.tongTien}.000 VND</td>
                <td className='py-3 px-4 border-t border-gray-300 text-center'>
                  <button
                    className={`py-1 px-3 text-xs rounded-full mx-auto ${
                      item.daThanhToan ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'
                    }`}
                  >
                    {item.daThanhToan ? 'Completed' : 'Pending'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Dashboard
