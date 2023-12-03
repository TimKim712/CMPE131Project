import React, { useState, useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <div className='cards'>
      <h1>Check out these Events and Updates!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          {posts.map((post, index) => (
            <ul key={index} className='cards__items'>
              <CardItem
                src={post.image ? `http://localhost:8081/uploads/${post.image}` : 'image-1701637074364-458257938.jpg'} // Update the src path as needed
                text={post.description}
                label={post.type}
                path='/services' // Update the path as needed
              />
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cards;
