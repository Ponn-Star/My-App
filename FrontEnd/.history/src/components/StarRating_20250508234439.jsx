import React from 'react'


const StarRating = () => {
  return (
    <>
      {Array(5).fill('').map((_, index) => (
            <img src={rat}
        ))}
    </>
  )
}

export default StarRating
