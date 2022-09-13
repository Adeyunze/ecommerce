import React from 'react';
import  logo  from '../Images/logo.svg';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom'
import { links } from '../data';
import Search from './Search';
import Cart from './Cart';
import {VscMenu, VscChromeClose} from 'react-icons/vsc';


const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <nav className='nav'>
      <div className='navbar'>
        <div className="logo-container">
            <VscMenu className='menu' onClick={() => setToggle(!toggle)} />
          <a href="/">
            <img src={logo} alt="logo" className='w-[70px]' />
          </a>
          <div className='md:hidden flex'>
            <Cart/>
          </div>
        </div>
        <div className="bottom-nav">
          <div className= {`buttom-nav-default ${toggle? 'bottom-nav-toggle': ''}`}>
            <div className={`${toggle ? "links-container-toggle" : "links-container-default"}`}>
              {links.map((link) => {
                const { text, url, id } = link;
                return(
                    <Link className={`${toggle? 'link-toggle' : 'link-default'}`} key={id} to={url} onClick={() => toggle ? setToggle(false) : null}>{text}</Link>
                );
              })}
            </div>
            
            {toggle?
              <div className='toggle-nav'>
                <img src={logo} alt="logo" className='w-[70px]'/>
                <VscChromeClose className='close-icon' onClick={() => setToggle(!toggle)} />
              </div>
              : null
            }
          </div>
          <Search />
          <div className='md:flex hidden'>
            <Cart />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar