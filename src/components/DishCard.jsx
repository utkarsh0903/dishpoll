import React from 'react';
import "../styles/dishcard.css";

const DishCard = ({id, name, title, img}) => {
  return (
    <div className='dish-card'>
        <div className='dish-details'>
            <img src={img} alt={name} />
            <h3>{name}</h3>
            <h5>{title}</h5>
        </div>
    </div>
  )
}

export default DishCard