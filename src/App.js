import React from 'react';
import PropTypes from 'prop-types';



const foodILike = [
  {
    id:1,
    name: "zzang",
    image:
    "http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988183457049(0).jpg",
    rating: 5
  },
  {
    id:2,
    name: "mom",
    image:
    "http://img.lifestyler.co.kr/uploads/program/1/1765/menu/2/html/f131755988566283503(0).jpg",
    rating: 4.3
  }
]

function Food({ name, picture, rating }){
  return <div>
      <h2>I like {name}</h2>
      <h4>{rating}/0.5</h4>
      
      <img src={picture}/>
  </div>
}

Food.propTypes = {
  name: PropTypes.number.isRequired,
  picture: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
          key={dish.id} 
          name={dish.name} 
          picture={dish.image}
          rating={dish.rating}
          />
      ))}  
    </div>
   );
}

export default App;
