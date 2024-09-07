import "./card.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Carthandle } from "../../Hooks/Handleaddtocart.js";
import { IoSearchSharp } from "react-icons/io5";

function Card() {
  const [division, setDivision] = useState([]);
  const { addToCart, Searchchange, callRequired, requ ,trip} = Carthandle();
  console.log(trip)
  console.log(requ)
  const getUser = async () => {
    try {
      const resp = await axios.get("http://localhost:8000/class/allclass");
      setDivision(resp.data); // Set the fetched data to the state
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="Journey-wala">

      <label className="journey-label">Search Your Trip</label>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search trip"
          className="Search-journey"
          name="journey"
          onChange={Searchchange}
        />
        <i className="search-glass" onClick={callRequired}><IoSearchSharp size={20} /></i>
      </div>

      {/* Conditional rendering based on `requ` length */}
      {requ.length > 0 ? (
        <div className="Outcardd">
          {requ.map((item) => (
            <div key={item._id} className="cardd">
              <div className="cardimg">
                <img src={item.file} alt={item.tripname} />
              </div>
              <div className="cardtitle">{item.tripname}</div>
              <div className="Description">{item.description}</div>
              <div className="seat">Seat: {item.availableseat}</div>
              <div className="seat">Email: {item.email}</div>
              <div className="Price">Fee: ${item.fee}</div>
              <button  className="carddbtn"  onClick={() => addToCart(item)}>Book Now</button>
            </div>
          ))}
        </div>
      ) : (
        <div className="Outcard">
          {division.map((product) => (
            <div key={product._id} className="card">
              <div className="cardimg">
                <img src={product.file} alt={product.tripname} />
              </div>
              <div className="cardtitle">{product.tripname}</div>
              <div className="Description">{product.description}</div>
              <div className="seat">Seat: {product.availableseat}</div>
              <div className="seat">Email: {product.email}</div>
              <div className="Price">Fee: ${product.fee}</div>
              <button onClick={() => addToCart(product)}>Book Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Card;
