import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import NavigationHeader from './NavigationHeader';

const Header = ({ onOpenMenu }) => {

  useEffect(() => {
    
    const nav = document.querySelector('.navbar-header');

    if(!nav) return;

    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 20);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  return(
    <>
    <div className='bg-black md:px-8 lg:px-12  px-5 py-5 fixed navbar-header top-0 left-0 w-full z-100 border border-transparent'>
      <div className="container m-auto flex justify-between items-center ">
          <div className='nav-logo'>Mateus Santos</div>
          <div className='md:block hidden'>
            <NavigationHeader />
          </div>
          <div className='md:block hidden'>
            <Button text={"Fale comigo"} classCss={'nav-cta'} path={"contato"}/>
          </div>
          <div className='hamburger md:hidden block'>
            <button onClick={onOpenMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
      </div>
    </div>
    </>
  );
}

Header.propTypes = {
  onOpenMenu: PropTypes.func.isRequired,
};

export default Header;
