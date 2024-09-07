import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Manager = () => {
  const navigate = useNavigate();
  const deleteuser = async (de) => {
    const user_to_delete = de._id;
    try {
      const resp = await axios.delete(`http://localhost:8000/user/deleteuser/${user_to_delete}`);
      if (resp) {
        toast.success(resp.data.message); // Ensure msg field is used
      }
    } catch (error) {
      console.log("Frontend error during deletion of user:", error);
      toast.error("Error deleting user"); // Show error toast
    }
  };

  const setadmin = async (de) => {
    const ide = de._id;
    try {
      const resp = await axios.patch(`http://localhost:8000/user/make_admin/${ide}`);
      if (resp) {
        console.log("FRONTEND::::: after setting admin", resp);
        console.log("FRONTEND::::: after setting admin", resp.data.message);
        toast.success(resp.data.message); // Ensure msg field is used
      }
    } catch (error) {
      console.log("Frontend error during setting of admin:", error);
      toast.error("Error setting admin"); // Show error toast
    }
  };



const Approveclass=async(product)=>{
 try{
  const ide=product._id
  const resp = await axios.patch(`http://localhost:8000/class/approveclass/${ide}`)
  if(resp){
    console.log("FRONTEND::::: after accepting class", resp);
    toast.success(resp.data.message)
  }}
catch(err){
  console.log("Frontend while accepting class :",err)
}}




const Rejectclass=async(product)=>{ 
try{
  const ide=product._id
  const rej = await axios.patch(`http://localhost:8000/class/rejectclass/${ide}`)

  if(rej){
    console.log("FRONTEND::::: after rejecting class", rej);
    toast.success(rej.data.message)
  } 
} catch(err){
    console.log("Frontend while rejecting class :",err)
  }}



const adminLogout = () => {
    localStorage.clear();
    navigate("/");
  };



  return { deleteuser, setadmin,Approveclass,Rejectclass ,adminLogout};
};

export default Manager;
