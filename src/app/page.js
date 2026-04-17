"use client"
import { useState } from 'react';
import Main from "./sections/Main.js"
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import NavigationMobile from './components/NavigationMobile';
import { useCursor } from '@/hooks/useCursor';
import { useRevealOnScroll } from '@/hooks/useRevealOnScroll';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Initialize cursor animation
  useCursor();
  
  // Initialize reveal on scroll animation
  useRevealOnScroll();

  return (
    <div> 
      <div className='cursor' id='cursor'></div>
      <div className="cursor-ring" id="cursorRing"></div>
      <Header onOpenMenu={() => setIsMenuOpen(true)} />
      <NavigationMobile isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <Main />
      <Footer />
    </div>
  );
}