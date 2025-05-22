import React, { useEffect, useState } from 'react'
import Title from './Title'
import { callApi } from '../data/api.ts'
import StarRating from './StarRating'

const API_URL = "https://app.nocodb.com/api/v2/tables/mqxdcj08df39q7u/records?offset=0&limit=25&where=&viewId=vwuk6k6pdfoz6672";
const API_TOKEN = "Q77FhyKItb24O_dHv26GYa18PrWrLXeTH5A7FPFn";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    callApi(API_URL, API_TOKEN).then(data => {
      console.log("API data:", data); // Thêm dòng này để kiểm tra dữ liệu trả về
      setTestimonials(data.list || []);
      console.log(testimonials); // Thêm dòng này để kiểm tra dữ liệu đã được set
    }).catch(err => {
      console.error("API error:", err);
    });
  }, []);

  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 pt-20 pb-30'>
      <Title
            title="What Our Guests Say"
            subTitle="Discover why discerning travelers consistently choose QuickStay for their exclusive and luxurious accommodations around the world."
        />

        <div className="flex flex-wrap items-center gap-6 mt-20">
                {testimonials.length === 0 && (
                  <p className="text-gray-400">Không có dữ liệu đánh giá.</p>
                )}
                {testimonials.map((testimonial) => {
                  const t = testimonial.fields || testimonial;
                  // Nếu có trường fields thì dùng t = testimonial.fields, còn không thì dùng testimonial
                  // Nhưng id key nên lấy từ ngoài để không bị trùng
                  return (
                    <div key={testimonial.id || t.id} className="bg-white p-6 rounded-xl shadow">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={t.image} alt={t.name} />
                            <div>
                                <p className="font-playfair text-xl">{t.name}</p>
                                <p className="text-gray-500">{t.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            <StarRating/>
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{t.review}"</p>
                    </div>
                  );
                })}
        </div>
    </div>
  )
}

export default Testimonial
