import React, { useState } from 'react';
import "../styles/dishcard.css";

const DishCard = ({id, name, title, img, selectedRank, rankOne, rankTwo, rankThree}) => {
    const [selectedOption, setSelectedOption] = useState('');

  const handleDropdownChange = (event) => {
    const rankingPoints = event.target.value;
    const dishId = event.target.id;
    setSelectedOption(rankingPoints);
    selectedRank(rankingPoints, dishId);
  };

  return (
    <div className='dish-card'>
        <div className='dish-details'>
            <img src={img} alt={name} />
            <div className="dropdown-container">
                <h3>{name}</h3>
                <div className="dish-ranking">
                    <label htmlFor={`${id}`}> Rank :</label>
                    <select id={`${id}`} value={selectedOption} onChange={handleDropdownChange}>
                        <option value="" disabled>
                            Select an option
                        </option>
                        <option value="30" disabled={rankOne}>
                            Rank 1
                        </option>
                        <option value="20" disabled={rankTwo}>
                            Rank 2
                        </option>
                        <option value="10" disabled={rankThree}>
                            Rank 3
                        </option>
                        <option value="">
                            None
                        </option>
                    </select>
                </div>
            </div>
            <h5>{title}</h5>
        </div>
        
    </div>
  )
}

export default DishCard