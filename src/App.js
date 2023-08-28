import React from 'react';
// React Router
import { Routes, Route } from 'react-router-dom';
// Pages
import Home from './Pages/Home';
import Rooms from './Pages/Rooms';
import SingleRoom from './Pages/SingleRoom';
import Error from './Pages/Error';
// Component
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

// CSS File
import './App.css';

const App = () => {
  return (

    <>
        <Navbar />
        <Routes>
            <Route exact path='/' Component={Home} />
            <Route path='/rooms/' Component={Rooms} />
            <Route path='/rooms/:slug' Component={SingleRoom} />
            <Route path='/*' Component={Error} />
        </Routes>
        <Footer />
    </>

  )
}

export default App;