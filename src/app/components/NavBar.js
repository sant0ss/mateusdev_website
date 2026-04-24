import React from 'react';
import { Link } from 'react-scroll';

const NavBar = ({ path, name, className = 'uppercase', showId = null, onClick }) => {
  return(
    <li>
      <Link onClick={onClick} to={path} className={`hover:text-white transition duration-300 font-mono tracking-[.08em] lg:text-[12px] text-[11px] text-[#9a9a90] ${className}`}>
        {showId !== null ? (
          <div className='text-[9px] text-[#9a9a90] tracking-[0.12em] mb-1'>{showId}</div>
        ) : null}
        {name}
      </Link>
    </li>
  );
}

export default NavBar;