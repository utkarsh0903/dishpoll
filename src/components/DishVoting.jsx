import React, { useState } from 'react';
import DishCard from './DishCard';

const DishVoting = () => {

  const [dishes, setDishes] = useState([
    {
      "id": 1,
      "dishName": "Lasagne",
      "description": "Breaded fried chicken with waffles, and a side of maple syrup.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 2,
      "dishName": "Pho",
      "description": "Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 3,
      "dishName": "Stinky Tofu",
      "description": "Two buttermilk waffles, topped with whipped cream and maple syrup, a side of two eggs served any style, and your choice of smoked bacon or smoked ham.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 4,
      "dishName": "Scotch Eggs",
      "description": "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 5,
      "dishName": "Stinky Tofu",
      "description": "Two butter croissants of your choice (plain, almond or cheese). With a side of herb butter or house-made hazelnut spread.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 6,
      "dishName": "Hummus",
      "description": "Two butter croissants of your choice (plain, almond or cheese). With a side of herb butter or house-made hazelnut spread.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 7,
      "dishName": "Sushi",
      "description": "Fresh Norwegian salmon, lightly brushed with our herbed Dijon mustard sauce, with choice of two sides.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 8,
      "dishName": "Fish and Chips",
      "description": "Three egg whites with spinach, mushrooms, caramelized onions, tomatoes and low-fat feta cheese. With herbed quinoa, and your choice of rye or whole-grain toast.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 9,
      "dishName": "Seafood Paella",
      "description": "Smoked salmon, poached eggs, diced red onions and Hollandaise sauce on an English muffin. With a side of roasted potatoes.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 10,
      "dishName": "Chicken Wings",
      "description": "Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 11,
      "dishName": "Seafood Paella",
      "description": "Two butter croissants of your choice (plain, almond or cheese). With a side of herb butter or house-made hazelnut spread.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 12,
      "dishName": "Chilli con Carne",
      "description": "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 13,
      "dishName": "Pappardelle alla Bolognese",
      "description": "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 14,
      "dishName": "Salmon Nigiri",
      "description": "Fresh parsley, Italian sausage, shallots, garlic, sun-dried tomatoes and mozzarella cheese in an all-butter crust. With a side of mixed fruits.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 15,
      "dishName": "Chicken Fajitas",
      "description": "Breaded fried chicken with waffles, and a side of maple syrup.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 16,
      "dishName": "Pasta Carbonara",
      "description": "Creamy mascarpone cheese and custard layered between espresso and rum soaked house-made ladyfingers, topped with Valrhona cocoa powder.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 17,
      "dishName": "Pho",
      "description": "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 18,
      "dishName": "Hummus",
      "description": "Breaded fried chicken with waffles. Served with maple syrup.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 19,
      "dishName": "Tiramisù",
      "description": "Two buttermilk waffles, topped with whipped cream and maple syrup, a side of two eggs served any style, and your choice of smoked bacon or smoked ham.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 20,
      "dishName": "Pasta and Beans",
      "description": "Breaded fried chicken with waffles. Served with maple syrup.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 21,
      "dishName": "Pizza",
      "description": "Three egg omelet with Roquefort cheese, chives, and ham. With a side of roasted potatoes, and your choice of toast or croissant.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 22,
      "dishName": "Seafood Paella",
      "description": "Two buttermilk waffles, topped with whipped cream and maple syrup, a side of two eggs served any style, and your choice of smoked bacon or smoked ham.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 23,
      "dishName": "Pork Sausage Roll",
      "description": "Fresh Norwegian salmon, lightly brushed with our herbed Dijon mustard sauce, with choice of two sides.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 24,
      "dishName": "Pork Belly Buns",
      "description": "Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 25,
      "dishName": "Katsu Curry",
      "description": "Fresh Norwegian salmon, lightly brushed with our herbed Dijon mustard sauce, with choice of two sides.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 26,
      "dishName": "Meatballs with Sauce",
      "description": "Creamy mascarpone cheese and custard layered between espresso and rum soaked house-made ladyfingers, topped with Valrhona cocoa powder.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 27,
      "dishName": "Caprese Salad",
      "description": "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 28,
      "dishName": "Pizza",
      "description": "Smoked salmon, poached eggs, diced red onions and Hollandaise sauce on an English muffin. With a side of roasted potatoes.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 29,
      "dishName": "Poutine",
      "description": "Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.",
      "image": "https://loremflickr.com/300/300/food"
    },
    {
      "id": 30,
      "dishName": "Pierogi",
      "description": "Fresh parsley, Italian sausage, shallots, garlic, sun-dried tomatoes and mozzarella cheese in an all-butter crust. With a side of mixed fruits.",
      "image": "https://loremflickr.com/300/300/food"
    }
  ]); 

  return (
    <div className='dishes-main'>
      {dishes.map((dish) => {
        return <DishCard key={dish.id} name={dish.dishName}
        title={dish.description} img={dish.image} />
      })}
    </div>
  )
}

export default DishVoting