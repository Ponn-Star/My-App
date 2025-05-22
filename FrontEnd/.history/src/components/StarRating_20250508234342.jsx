import React from 'react'

const StarRating = () => {
  return (
    <>
      {Array(5).fill(0).map((_, index) => (
            <Star key={index} filled={testimonial.rating > index} />
        ))}
    </>
  )
}

export default StarRating
