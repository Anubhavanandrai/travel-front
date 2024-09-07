import "./Header.css";
import logof from "../../Assets/logo2.png";
import car1 from "../../Assets/car1.jpg";
import car2 from "../../Assets/car2.jpg";
import car3 from "../../Assets/car3.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import HandleLogin from "../../Hooks/HandleLogin.js";
import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

function Header() {
  const carouselImages = [car1, car2, car3];
  const [index, setIndex] = useState(2);
  const { handleLogout } = HandleLogin();

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  };

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1 + carouselImages.length) % carouselImages.length);
  };

  const lcl = localStorage.getItem("JWTtoken");
  const usekrnewala = localStorage.getItem("user");

  return (
    <div className="nav_container">
      <div className="navv">
        <div className="logo">
          <img src={logof} alt="logoimage" />
        </div>
        <div className="links">
          <ul>
            <li className="liii">
              <Link to="/" className="link-home">Home</Link>
            </li>
            <li className="liii">
              <Link to="/about" className="link-about">About</Link>
            </li>
            <li className="liii">
              <Link to="/contact" className="link-contact">Contact</Link>
            </li>
          </ul>
        </div>

        {lcl && lcl.length > 0 ? (
          <div className="auth">
                <label className="authh-label">{usekrnewala}</label>
                      <div className="auth-profile">
                            <CgProfile size={24} />
                            <div className="drop">
                            <Link to="/classForm" className="link-new-trip">New Trip</Link>
                            <Link to="/MyTrips" className="link-new-trip">My Trips</Link>
                            </div>
                      </div>
                <div className="cart">
                     <Link to="/cart" className="link-cart">
                        <FaCartPlus size={24} />
                     </Link>
               </div>
               <button onClick={handleLogout} className="nav-btnn">Logout</button>
          </div>
        ) : (
          <div className="auth">
            <Link to="/login" className="link-login">Login</Link>
            <Link to="/signup" className="link-signup">Signup</Link>
          </div>
        )}
      </div>

      <div className="carousel-header">
             <div className="carouselitems">
               <img  key={index}  src={carouselImages[index]}  alt={`car${index + 1}`}
               className="carousel_image" />
             </div>
         <div className="bt">
               <button className="leftt" onClick={next}>{"<"}</button>
               <button className="rightt" onClick={prev}>{">"}</button>
         </div>
      </div>

      
    </div>
  );
}

export default Header;
