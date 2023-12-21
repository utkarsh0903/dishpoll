import React from 'react'

const DishCard = ({key, name, title, img}) => {
  return (
    <div className='dish-card'>
        <img src={img} alt={name} />
        <h3>{name}</h3>
        <h5>{title}</h5>
    </div>
  )
}

export default DishCard