import { useState } from "react";

function Display(){
  
    let[count,setCount]=useState(1)
    const[view,setView]=useState(true)
  
    const add=()=>{
          count=count+1;
          setCount(count)
    }
  const minus=()=>{
       if(count==0){
        setView(false)
       }
       else{
        count=count-1;
        setCount(count)
       }
  }
  
  return {minus,add,view,count}
   }
   export default Display;