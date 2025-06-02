import React from 'react'
import { useAppContext } from '../conext/AppContext'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const Loader = () => {

    const { navigate } = useAppContext()
    const { nextUrl } = useParams()

    useEffect(()=>{
        if(nextUrl) {
            setTimeout(()=>{
                navigate('/')
            })
        }
    })

  return (
    <div>
      
    </div>
  )
}

export default Loader
