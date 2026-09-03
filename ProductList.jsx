```jsx
import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plants = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 12.99,
    description: "A beautiful and easy-to-care-for succulent plant.",
    image: "/images/aloe-vera.jpg",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 18.99,
    description: "A low-maintenance indoor plant that improves air quality.",
    image: "/images/snake-plant.jpg",
  },
  {
    id: 3,
    name: "Peace Lily",
    price: 15.99,
    description: "An elegant flowering plant perfect for indoor spaces.",
    image: "/images/peace-lily.jpg",
  },
  {
    id: 4,
    name: "Money Plant",
    price: 10.99,
    description: "A popular indoor plant known for its attractive leaves.",
    image: "/images/money-plant.jpg",
  },
  {
    id: 5,
    name: "Spider Plant",
    price: 13.99,
    description: "A hardy plant that is easy to grow and maintain.",
    image: "/images/spider-plant.jpg",
  },
  {
    id: 6,
    name: "Areca Palm",
    price: 24.99,
    description: "A tropical-looking plant that adds freshness to your home.",
    image: "/images/areca-palm.jpg",
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-list">
      <h1>Paradise Nursery Plants</h1>

      <p className="product-intro">
        Explore our collection of beautiful plants for your home and garden.
      </p>

      <div className="products-container">
        {plants.map((plant) => (
          <div className="product-card" key={plant.id}>
            <img
              src={plant.image}
              alt={plant.name}
              className="product-image"
            />

            <div className="product-info">
              <h2>{plant.name}</h2>

              <p>{plant.description}</p>

              <h3>${plant.price.toFixed(2)}</h3>

              <button
                onClick={() => handleAddToCart(plant)}
                className="add-to-cart-button"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
```
