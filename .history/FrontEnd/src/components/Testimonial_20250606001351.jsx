import React from 'react'
import Title from './Title'
import { testimonials } from '../assets/assets'
import StarRating from './StarRating'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'>
      <Title
        title="Những Đánh Giá Của Khách Hàng"
        subTitle="Nnhững trải nghiệm tuyệt vời từ khách hàng của chúng tôi. Họ đã tìm thấy sự hài lòng và niềm vui khi tận hưởng dịch vụ Glamping tại Forest Scent."
      />

      <div className="flex flex-wrap items-center gap-6 mt-20">
        {testimonials.length === 0 && (
          <p className="text-gray-400">Không có dữ liệu đánh giá.</p>
        )}
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow">
            <div className="flex items-center gap-3">
              <img className="w-12 h-12 rounded-full" src={t.image} alt={t.name} />
              <div>
                <p className="font-playfair text-xl">{t.name}</p>
                <p className="text-gray-500">{t.address}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 mt-4">
              <StarRating rating={t.rating} />
            </div>
            <p className="text-gray-500 max-w-90 mt-4">"{t.review}"</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonial
