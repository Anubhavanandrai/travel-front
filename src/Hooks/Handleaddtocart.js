import axios from "axios";
import { toast } from "react-toastify";
import { headers } from "../config.js/configuration";
import { useState } from "react";

export const Carthandle = () => {
  const [trip, setTrip] = useState({});
  const [requ, setRequ] = useState([]);  // Initialize req state properly

  const addToCart = async (item) => {
    const Pro = {
      Title: item.tripname,
      Description: item.description,
      Fee: item.fee,
      Imageurl: item.file,
      Quantity: 1
    };
    try {
      const added = await axios.post(
        "http://localhost:8000/cart/add-to-cart",
        Pro,
        {
          headers: headers(),
        }
      );
      if (added) {
        toast.success("Item added to cart");
      }
    } catch (err) {
      if (err.response && err.response.status === 401) {
        toast.error(err.response.data.error);
      } else {
        console.log("Frontend error of adding to cart: ", err);
      }
    }
  };



  // Search specific trip 
  const Searchchange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };


  const callRequired = async () => {
    console.log("inside call required")
    console.log(trip)
    console.log("trp.journey k andr y h",trip.journey)
    try {
      console.log("inside call required ka try")
      const resp = await axios.get( `http://localhost:8000/class/searched-trip/${trip.journey}`
      );

      console.log("aftrr apii in search backend")
      if (resp && resp.data) {
        
        setRequ(resp.data.searchedTrip);
        console.log("Response from server:", resp.data.searchedTrip);
      }
    } catch (err) {
      console.log("Frontend error while calling required:", err);
    }
  };

  return { addToCart, Searchchange, callRequired ,requ,trip};
};
