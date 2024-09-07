import {  useEffect,useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Forgethandle() {
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [foundmail, setFoundmail] = useState(null);
  const [newpassword, setNewpassword] = useState(false);
  const [write, setWrite] = useState("");
  const [cnfrm, setCnfrm] = useState("");
  const [upd,setUpd]=useState(false)
  


  const handleEmailChange = (e) => {
    setMail(e.target.value);   
  };
  const handlewrite=(e)=>{
    setWrite(e.target.value)
  }
  const handlecnfrmwrite=(e)=>{
    setCnfrm(e.target.value)
  }

  
  useEffect(() => {
    console.log("Inside useEffect aaa gye hm")

    if (write === cnfrm) {
      console.log("Inside useEffect - Setting upd to true");
      setUpd(true);
    } 
    else{
      setUpd(false)
    }
  }, [write, cnfrm]);


  const checkEmailExists = async (mail) => {
    try {
      const response = await axios.get(`http://localhost:8000/user/checkemail/ispresent/${mail}`);
      if(response.status === 204){
        setFoundmail(false);
        return null;
      }
      setFoundmail(true);
      return response.data.Email; 
    } 
    catch (error) {
      console.error("Error checking email:", error);
      setFoundmail("An error occurred while checking the email.");
      return false;
    }
  };

  const sendReset = async () => {
    let upd=await checkEmailExists(mail);
      if(upd){setNewpassword(true)}
      else{setNewpassword(false)}

  };



  const pschange=async()=>{
   
    const newdata={
      pass:write
    }
    try{
       const all= await axios.patch(`http://localhost:8000/user/paschnge/${mail}`,newdata)
         if(all){
          toast.success(all.data.message)
          navigate("/")
         }
    }
    catch(err){
      if(err.response){
        console.error("server issue",err.response)
      }
      console.error("inside err of clicking update pass: ",err)
    }

  }


  return { handleEmailChange, sendReset,pschange, foundmail,newpassword,handlecnfrmwrite,handlewrite,upd,write,cnfrm,mail };
}

export default Forgethandle;
