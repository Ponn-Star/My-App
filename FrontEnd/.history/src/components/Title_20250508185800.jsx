import React from 'react'

const Title = ({title, subTitle, align, font}) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{subTitle}</p>
    </div>
  )
}

export default Title
