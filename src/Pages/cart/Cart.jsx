import { useState, useEffect } from "react";
import axios from "axios";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const ActiveUser = localStorage.getItem("currentuserid");

  const callCart = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/cart/cartdetail/${ActiveUser}`);
      setCart(response.data.cart);
    } catch (err) {
      console.log("Frontend: error in calling cart items API", err);
    }
  };

  const updateQuantity = async (itemId, quantity) => {
    try {
     const upd= await axios.put(`http://localhost:8000/cart/update-quantity/${itemId}`, {quantity});
     console.log("Frontend:: in update ",upd) 
     callCart(); // Refresh the cart
    } catch (err) {
      console.log("Frontend: error in updating cart item quantity", err);
    }
  };

  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:8000/cart//delete-cart-item/${itemId}`);
      callCart(); // Refresh the cart
    } catch (err) {
      console.log("Frontend: error in deleting cart item", err);
    }
  };

  useEffect(() => {
    callCart();
  }, []);

  useEffect(() => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.JourneyFee * item.ProductQuantity; // Include quantity in the price calculation
    });
    setPrice(totalPrice);
  }, [cart]);

  return (
    <>
      <div className="cart-view">
        {cart.map((item) => (
          <div key={item._id} className="cart-item">
            <img src={item.JourneyPic} alt={item.JourneyTitle} className="cart-item-img" />
            <div className="cart-item-details">
              <h3 className="cart-item-title">{item.JourneyTitle}</h3>
              <p className="cart-item-description">{item.JourneyDescription}</p>
            </div>
            <p className="cart-item-fee">Fee: ${item.JourneyFee}</p>
            <div className="quantity-control">
              <button onClick={() => updateQuantity(item._id, item.ProductQuantity - 1)} disabled={item.ProductQuantity <= 1}>-</button>
              <span>{item.ProductQuantity}</span>
              <button onClick={() => updateQuantity(item._id, item.ProductQuantity + 1)}>+</button>
            </div>
            <button onClick={() => deleteItem(item._id)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
      <div className="total-price">Total Price: ${price}</div>
    </>
  );
}

export default Cart;
