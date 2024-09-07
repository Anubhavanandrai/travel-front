
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home.jsx';
import About from '../Pages/About/About.jsx';
import Contact from '../Pages/Contact/Contact.jsx';
import Login from '../Pages/Login/Login.jsx';
import Signup from '../Pages/Signup/Signup.jsx';
import Cart from "../Pages/cart/Cart.jsx"
import ClassForm from '../components/classupload/Clsupload.jsx';
import Admin from "../Admin/Admin.jsx"
import Mine from '../components/Myclass/Myclass.jsx';
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/classform" element={<ClassForm />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/MyTrips" element={<Mine />} />
    </Routes>
  );
};

export default AppRoutes;
