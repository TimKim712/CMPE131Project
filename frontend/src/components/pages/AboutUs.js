import React from 'react';
import '../../App.css';
import AboutUsHero from '../AboutUsHero';
import AboutUsContent from '../AboutUsContent'
import Footer from '../Footer';

function AboutUs() {
  return (
    <>
      <AboutUsHero/>
      <AboutUsContent/>
      <Footer/>
    </>
  );
}

export default AboutUs;

// export default function Products() {
//   return <h1 className='products'>PRODUCTS</h1>;
// }
