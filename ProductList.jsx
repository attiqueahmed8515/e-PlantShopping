
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantCategories = [
  {
    category: "Indoor Plants",
    plants: [
      {
        id: 1,
        name: "Aloe Vera",
        price: 12.99,
        description: "A beautiful and easy-to-care-for indoor succulent.",
        image: "/images/aloe-vera.jpg",
      },
      {
        id: 2,
        name: "Snake Plant",
        price: 18.99,
        description: "A low-maintenance plant that improves indoor air quality.",
        image: "/images/snake-plant.jpg",
      },
      {
        id: 3,
        name: "Peace Lily",
        price: 15.99,
        description: "An elegant flowering plant perfect for indoor spaces.",
        image: "/images/peace-lily.jpg",
      },
    ],
  },
  {
    category: "Outdoor Plants",
    plants: [
      {
        id: 4,
        name: "Money Plant",
        price: 10.99,
        description: "A popular plant with attractive green leaves.",
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
        description: "A tropical plant that adds freshness to your garden.",
        image: "/images/areca-palm.jpg",
      },
    ],
  },
];

function ProductList() {
  const dispatch = useDispatch();

  const [addedItems, setAddedItems] = useState([]);

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));

    setAddedItems((previousItems) => [
      ...previousItems,
      plant.id,
    ]);
  };

  const isAdded = (id) => addedItems.includes(id);

  return (
    <div className="product-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-brand">
          <h2>Paradise Nursery</h2>
        </div>

        <div className="navbar-links">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/products">Plants</a>
          <a href="/cart">Cart</a>
        </div>
      </nav>

      {/* Product Listing */}
      <div className="product-list">
        <h1>Paradise Nursery Plants</h1>

        <p className="product-intro">
          Explore our collection of beautiful indoor and outdoor
          plants for your home and garden.
        </p>

        {plantCategories.map((category) => (
          <section
            className="plant-category"
            key={category.category}
          >
            <h2>{category.category}</h2>

            <div className="products-container">
              {category.plants.map((plant) => (
                <div
                  className="product-card"
                  key={plant.id}
                >
                  <img
                    src={plant.image}
                    alt={plant.name}
                    className="product-image"
                  />

                  <div className="product-info">
                    <h3>{plant.name}</h3>

                    <p>{plant.description}</p>

                    <h4>${plant.price.toFixed(2)}</h4>

                    <button
                      className="add-to-cart-button"
                      onClick={() => handleAddToCart(plant)}
                      disabled={isAdded(plant.id)}
                    >
                      {isAdded(plant.id)
                        ? "Added to Cart"
                        : "Add to Cart"}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
