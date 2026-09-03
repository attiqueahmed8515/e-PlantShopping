
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);

  // Increase quantity
  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1,
      })
    );
  };

  // Decrease quantity
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  // Delete item from cart
  const handleDelete = (id) => {
    dispatch(removeItem(id));
  };

  // Calculate total cart amount
  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // Calculate total number of items
  const calculateTotalQuantity = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>
            Add some beautiful plants from Paradise Nursery
            to your shopping cart.
          </p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                {/* Plant Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="cart-item-image"
                />

                <div className="cart-item-details">

                  {/* Plant Name */}
                  <h2>{item.name}</h2>

                  {/* Plant Description */}
                  <p>{item.description}</p>

                  {/* Plant Price */}
                  <p className="item-price">
                    Price: ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">

                    <button
                      onClick={() => handleDecrease(item)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => handleIncrease(item)}
                    >
                      +
                    </button>

                  </div>

                  {/* Item Total */}
                  <p className="item-total">
                    Total: $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="delete-button"
                  >
                    Delete
                  </button>

                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h2>Cart Summary</h2>

            <p>
              Total Items:{" "}
              <strong>{calculateTotalQuantity()}</strong>
            </p>

            <p>
              Total Amount:{" "}
              <strong>
                ${calculateTotalAmount().toFixed(2)}
              </strong>
            </p>

            <button className="checkout-button">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartItem;

