// components/NavigationHeader.js
import React from 'react';
import NavBar from './NavBar';

const headerNavLinks = [
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

const NavigationHeader = ({ customNavItem = [] }) => {
  return(
    <nav>
      <ul className='flex lg:gap-8 gap-5'>
        {headerNavLinks.map((link) => (
          <NavBar key={link.id} path={link.path} name={link.name} />
        ))}
      </ul>
    </nav>
  );
}

export default NavigationHeader;