import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Modal from './Modal';


const Landing = () => {
  return (
    <>
      <Navbar />
      <Modal/>
      <Outlet />
      <Footer />
    </>
  )
}

export default Landing;