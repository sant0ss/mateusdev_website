import React from 'react';
import NavigationFooter from './NavigationFooter';

export default function Footer() {

  const currentDate = new Date().getFullYear();

  const menuCustom = [
    {
      id: 5,
      path: '/#',
      name: 'Inicio',
    }
  ];

  const classCustom = "normal-case"

  return(

    <div className='text-white bg-black md:px-8 lg:px-12 px-5 lg:py-10 py-8 flex-col '>
      <div className='container m-auto flex justify-between items-center md:flex-row flex-col lg:gap-1 gap-4'>
        <div className='footer-logo'>Mateus Santos</div>
        <div className='font-mono lg:text-[12px] text-[11px] text-[#5a5a52]'>© {currentDate.toString()} — Todos os direitos reservados </div>
        <NavigationFooter customNavItem={menuCustom} classCustom={classCustom}/>
      </div>
    </div>

  )
}