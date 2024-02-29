import React from 'react'
import './home.css'
import Image from '../assets/1315416.jpg'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
const Home = () => {
  return (
    <div>
      <div className='mh'>
         <img className='img1' src={Image} alt='home'/>

         <div className='child'>
          <h1>Explore Incredible</h1>
          <h1 className='head2'>India !</h1>
           <h1 className='head3'><ArrowDownwardIcon /></h1>
         </div>
      </div>
    </div>
  )
}

export default Home