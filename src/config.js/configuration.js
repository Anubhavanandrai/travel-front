

//    export  const headers = {
//         'authorization': `Bearer ${bearer}`,
//         'Content-Type': 'application/json'
//     }


    export const headers = () => {
        const bearer = localStorage.getItem("JWTtoken");
        return {
            'authorization': `Bearer ${bearer}`,
            'Content-Type': 'application/json'
        };
    }
    

    export const fileheader=()=>{
        const bearer = localStorage.getItem("JWTtoken");
       return{
        'authorization': `Bearer ${bearer}`,
        'Content-Type': 'multipart/form-data'
             };
    }
    
   