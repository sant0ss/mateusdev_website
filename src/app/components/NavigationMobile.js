import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';
import Button from './Button';


const mobileNavLinks = [
  {
    id: 1,
    path: 'projetos',
    name: 'Projetos',
  },
  {
    id: 2,
    path: 'sobre',
    name: 'Sobre',
  },
  {
    id: 3,
    path: 'servicos',
    name: 'Serviços',
  },
  {
    id: 4,
    path: 'contato',
    name: 'Contato'
  }
];

const socialMedias = [
  {
    id: 1,
    path: 'mailto:mateussds11@gmail.com',
    name: 'Email'
  },
  {
    id: 2,
    path: 'https://github.com/sant0ss',
    name: 'Github'
  },
  {
    id: 3,
    path: 'https://www.linkedin.com/in/mateus-santos-dev/',
    name: 'Linkedin'
  }
]

const NavigationMobile = ({ customNavItem = [], isOpen, onClose }) => {

  return(
    
    <div className={`fixed w-full h-full menu-mobile z-999 bg-black md:px-8 lg:px-12 px-5 py-5 top-0 left-0 ${isOpen ? 'open' : ''}`}>
      
        <div className='container m-auto flex flex-col gap-20 h-full'>

            <div className='flex justify-between items-center'>
                <div className='nav-logo'>Mateus Santos</div>
                <button className='close-mobile' onClick={onClose}>✕</button>
            </div>
            
            <nav>
                <ul className='flex flex-col'>
                    {mobileNavLinks.map((link) => (
                        <NavBar key={link.id} path={link.path} name={link.name} onClick={onClose} className='mobile-menu-items' showId={link.id}/>
                    ))}
                </ul>
            </nav>

            <div className='flex justify-between items-center'>
                <div className='flex gap-3'>
                  {socialMedias.map((link) => (
                    <a target='_blank' className='text-[10px] text-[#5a5a52]' key={link.id} href={link.path}>{link.name}</a>
                  ))}
                </div>
                <Button onClick={onClose} text={"Fale comigo →"} path={"contato"} classCss={'nav-cta'}/>
            </div>
        </div>
        
    </div>
    
  );
}

NavigationMobile.propTypes = {
  customNavItem: PropTypes.array,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavigationMobile;