// components/NavigationFooter.js
import React from 'react';
import NavBar from './NavBar';

const footerNavLinks = [
  {
    id: 1,
    path: 'home',
    name: 'Inicio',
  },
  {
    id: 2,
    path: 'projetos',
    name: 'Projetos',
  },
  {
    id: 3,
    path: 'sobre',
    name: 'Sobre',
  },
  {
    id: 4,
    path: 'servicos',
    name: 'Serviços',
  }
];

const NavigationFooter = () => {
  const allLinks = [ ...footerNavLinks];
  
  return(
    <nav>
      <ul className='flex lg:gap-7.5 gap-5'>
        {allLinks.map((link) => (
          <NavBar 
            key={link.id} 
            path={link.path} 
            name={link.name}
            className="normal-case"
          />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationFooter;