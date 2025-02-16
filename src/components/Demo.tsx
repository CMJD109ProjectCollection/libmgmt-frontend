export const Demo = () =>{
    let num = 0;
    const handleOnClickAdd = () =>{
         console.log(num ++)
    }
    const handleOnClickDeduct = () =>{
        console.log(num --)
   }
    return(
       <>
          <h1>{num}</h1>
          <button onClick={handleOnClickAdd}>For Add</button>
          <button onClick={handleOnClickDeduct}>For Deduct</button>
       </>
    )
}