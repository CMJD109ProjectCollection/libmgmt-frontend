import axios from 'axios'
const getBooksURL = "http://localhost:8075/libmgmt/api/v1/books/getall";
export const GetBooks = async() =>{
   try{
    const response = await axios.get(getBooksURL)
    console.log(response.data)

   }catch(err){
       console.error(err)
   }
} 