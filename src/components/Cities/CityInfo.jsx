import React from 'react'
import { useParams } from 'react-router-dom'
const CityInfo = () => {
    const {name}=useParams()
  return (
    <div>
        <div className='city'>
            <h1 className='cityhead'>Top Destinations In {name}</h1>
        </div>
    </div>
  )
}

export default CityInfo