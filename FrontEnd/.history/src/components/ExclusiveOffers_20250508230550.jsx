import React from 'react'
import Title from './Title'
import { assets } from '../assets/assets'

const ExclusiveOffers = () => {
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30'>
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <Title align='left' title='Exclusive Offers' subTitle='Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.'/>
        <button className='group flex items-center justify-center bg-primary text-white rounded-full px-6 py-3 mt-4 md:mt-0 hover:bg-opacity-90 transition-all'>
            View All Offers
            <img src={assets.arrowIcon} alt="arrow-icon"
            className='group-hover:translate-x-1 transition-all'/>
        </button>
      </div>
    </div>
  )
}

export default ExclusiveOffers
