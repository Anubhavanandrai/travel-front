/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const HandleLogin = () => {
  const navigate = useNavigate();
  const [Login, setLogin] = useState({});
  const handleinputchange = (e) => {
    setLogin({ ...Login, [e.target.name]: e.target.value });
  };

  

const loginsubmit = async (e,admin) => {
           e.preventDefault();
          
           if(admin){
           
            try {
              const response = await axios.post("http://localhost:8000/user/Admin/login", Login);
              console.log(response, "response");
              if (response) {
                localStorage.setItem("JWTtoken", response?.data?.JWTtoken);
                localStorage.setItem("user", response?.data?.client?.Username);
                toast.success(response?.data?.msg);
                         navigate("/Admin")
              }
            } catch (error) {
              console.log("Frontend error :: inside admin ka login")
            }
           }


           if(!admin){
              try {
                  const response = await axios.post("http://localhost:8000/user/login", Login);
                  console.log(response, "response");
                  if (response) {
                        localStorage.setItem("JWTtoken", response?.data?.JWTtoken);
                        localStorage.setItem("user", response?.data?.client?.Username);
                        localStorage.setItem("currentuserid", response?.data?.client?._id);
                        toast.success(response?.data?.msg);
                         navigate("/");
                                 }}
                  catch (error) {
                        if (error.response) {
                            console.error("Error Response:", error.response);
                          if(error.response.status===401){
                            toast.error(error.response.data.error)
                          }}
                    else {
                            console.error("Error Message:", error.message);}}}};

const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

return { loginsubmit, handleinputchange, Login, handleLogout };};
export default HandleLogin;
