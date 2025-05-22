import React from 'react'
import Hero from '../components/Hero'
import FeaturedDestination from '../components/FeaturedDestination'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'
import FooterNav from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <FeaturedDestination />
      <ExclusiveOffers />
      <Testimonial />
      <Footer />
    </>
  )
}

export default Home
