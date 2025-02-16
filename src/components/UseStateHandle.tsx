import { useEffect, useState } from "react";

export const UseStateHandle = ()=>{
   const [value,setValue] = useState(0); // use State init

   const handleOnClickDeduct = ()=>{
        setValue(value - 1)
    }
    useEffect(()=>{
        console.log("Use Effect Run")
    },[])
   return(
        <>
        <h1>{value}</h1>
        <button onClick={()=> setValue(value + 1)}>Add</button>
        <button onClick={handleOnClickDeduct}>Deduct</button>
        </>
   );
}