import React from 'react';
import  logo  from '../Images/logo.svg';
import '../styles/Navbar.css';
import { Link } from 'react-router-dom'
import { links } from '../data';
import Search from './Search';
import Cart from './Cart';
import {VscMenu, VscChromeClose} from 'react-icons/vsc';
import { useSearchContext } from '../context/search_context';



const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const {setModal} = useSearchContext()
  const handleClick = () => {
    setModal(false)
    
    if(toggle){
      setToggle(false)
    }else{
      return;
    }

  }
  return (
    <nav className='nav sticky top-0 left-0 z-40 bg-[#fff] w-[100vw]'>
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
                    <Link className={`${toggle? 'link-toggle' : 'link-default'}`} key={id} to={url} onClick={() => {handleClick()}}>{text}</Link>
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