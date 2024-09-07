import axios from "axios"
import { toast } from 'react-toastify';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Usesubmitt=()=> {


const [formErrors, setFormErrors] = useState({})
const[form,setForm]=useState({})
const navigate = useNavigate();


const validateField = (name, value) => {
  let errors = { ...formErrors };
  let trimmedValue = value.trim();

  switch (name) {
    case "Username":
      if (!trimmedValue) {
        errors.Username = "Username is required";
      } else if (!/^[a-zA-Z0-9_]+$/.test(trimmedValue)) {
        errors.Username = "Username can only contain letters, numbers, and underscores";
      } else if (trimmedValue.length < 4) {
        errors.Username = "Username must be at least 4 characters long";
      } else {
        errors.Username = "";
      }
      break;
    case "Email":
      if (!trimmedValue) {
        errors.Email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(trimmedValue)) {
        errors.Email = "Email address is invalid";
      } else if (/@restricted\.com$/i.test(trimmedValue)) {
        errors.Email = "Email domain 'restricted.com' is not allowed";
      } else {
        errors.Email = "";
      }
      break;
    case "Password":
      if (!trimmedValue) {
        errors.Password = "Password is required";
      } else if (trimmedValue.length < 6) {
        errors.Password = "Password must be at least 6 characters";
      } else if (!/[A-Z]/.test(trimmedValue)) {
        errors.Password = "Password must contain at least one uppercase letter";
      } else if (!/[a-z]/.test(trimmedValue)) {
        errors.Password = "Password must contain at least one lowercase letter";
      } else if (!/[0-9]/.test(trimmedValue)) {
        errors.Password = "Password must contain at least one number";
      } else if (!/[!@#$%^&*]/.test(trimmedValue)) {
        errors.Password = "Password must contain at least one special character";
      } else {
        errors.Password = "";
      }
      break;
    case "Gender":
      if (!trimmedValue) {
        errors.Gender = "Gender is required";
      } else if (!/^(Male|Female|Other)$/i.test(trimmedValue)) {
        errors.Gender = "Gender must be 'Male', 'Female', or 'Other'";
      } else {
        errors.Gender = "";
      }
      break;
    case "Mobile":
      if (!trimmedValue) {
        errors.Mobile = "Mobile number is required";
      } else if (!/^\+?\d{10,15}$/.test(trimmedValue)) {
        errors.Mobile = "Mobile number is invalid";
      } else {
        errors.Mobile = "";
      }
      break;
    default:
      break;
  }

  setFormErrors(errors);
};





// for handling form values
    const handleChange = (e) => {
      console.log("inside handlechange"); 
        setForm({ ...form, [e.target.name]: e.target.value });
        
          validateField(e.target.name, e.target.value);
        
      };

  // for handling the submission of the form
     const handleSubmit= async(e)=>{      
        e.preventDefault()
        const res= await axios.post('http://localhost:8000/user/addnewuser',form)
        if(res) {
          toast.success("user added successfully")
          navigate("/")
           }
        else {toast.error(" user not addeed")  
     }
}
return{handleChange,handleSubmit, form,formErrors}
}
export default Usesubmitt