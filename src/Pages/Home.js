import React from 'react';
// Component
import { Hero } from '../Components/Hero';
import Banner from '../Components/Banner';
import Services from '../Components/Services';
import FeaturedRooms from '../Components/FeaturedRooms';
// React Router
import { Link } from 'react-router-dom';


const Home = () => {
  return (
  <>
    <Hero>
      <Banner title="Luxurious Rooms" subtitle="Deluxe Rooms Started At $299">
        <Link to='/rooms' className='btn-primary' >Our Rooms</Link>
      </Banner>
    </Hero>
    <Services />
    <FeaturedRooms />
  </>
  )
}

export default Home;