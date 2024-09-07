import AppRoutes from './Routes/Route.jsx'
import './App.css'
//import Home from './Pages/Home/Home.jsx';
import { useLocation } from 'react-router-dom';
import Login from "../src/Pages/Login/Login.jsx"
import Signup from './Pages/Signup/Signup.jsx';


function App() {
  const location = useLocation();
  const islogin = location.pathname.includes('/login');
  const issignup = location.pathname.includes('/signup');
  return (
   
<>
      {islogin ? (
        <div><Login /></div>
      ) : issignup ? (
        <div><Signup /></div>
      ) : (
        <>
        
         <AppRoutes />
        </>
      )}
    </>
  );
}


export default App
