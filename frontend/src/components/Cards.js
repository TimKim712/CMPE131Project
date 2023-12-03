import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Events and Updates!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image3.jpg'
              text='Go trick or treating this halloween in the Williamston Area of Witches and Wizards!'
              label='Events'
              path='/services'
            />
            <CardItem
              src='images/image2.jpg'
              text='Join the residents in the leaf picking event, Go Green! '
              label='Community'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/image4.jpg'
              text='OFFICE CLOSED September 4th for Labor Day'
              label='News'
              path='/services'
            />
            <CardItem
              src='images/image5.jpg'
              text='Be Safe and Smart for back to school season, read for tips!'
              label='News'
              path='/products'
            />
            <CardItem
              src='images/image6.jpg'
              text='Annual Park Clean Up Day coming soon. Join us on Saturday, May 13th!'
              label='Events'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
