import React from 'react';
import restaurantfood from './assets/icons_assets/restauranfood.jpg'

function HomePage() {
    return (
      <div className='HomePage'>
        <div>
          <h1>Little Lemon</h1>
          <p>Experience a diverse menu of delicious</p>
          <p>dishes delivered right to your doorstep.</p>
          <button>Reserve a table</button>
        </div>

        <div>
          <img src={restaurantfood} alt="restaurantfood" />
        </div>
      </div>
    );
}

export default HomePage;
