import React from 'react';
import '../App.css';
import { ContactUsButton } from './ContactUsButton';
import { AboutUsButton } from './AboutUsButton';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <img src='/images/image1.jpeg' autoPlay loop muted />
      <h1>City Of Williamston</h1>
      <p>Discover the Charm</p>
      <div className='hero-btns'>
        <ContactUsButton
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact
        </ContactUsButton>
        <AboutUsButton
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
         About Us
        </AboutUsButton>
      </div>
    </div>
  );
}

export default HeroSection;
