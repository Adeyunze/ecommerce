import React from 'react';
import { Link } from 'react-router-dom';
import { links, socials } from '../data';
import '../styles/Footer.css';


const Footer = () => {
  return (
    <footer className=' w-[100vw] bg-[#1D1D1D] flex flex-col items-center'>
      <div className='pt-10 flex sm:flex-row'>
        {links.map(link => {
          return (
            <Link key={link.id} to={link.url} className='text-white font-regular mx-2'>
              {link.text}
            </Link>
          )
        })}
      </div>
      <div className='text-white flex my-6'>
        {socials.map(social => {
          return (
            <a key={social.id} href='https://adeyunze.netlify.app' className='text-4xl cursor-pointer mx-2'>
              {social.image}
            </a>
          )
        })}
      </div>
      <p className='text-white text-sm'>&copy;2022 This is a demo no right reserved</p>
    </footer>
  )
}

export default Footer