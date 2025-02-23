import axios from 'axios'
const baseUrl = "http://localhost:8075/libmgmt/api/v1/books";

 const GetBooks = async() =>{
   try{
    const response = await axios.get(`${baseUrl}/getall`)
    return response.data;
   }catch(err){
       console.error(err)
   }
} 

 const DeleteBooks = async(bookId:string) =>{
    try{
        axios.delete(
            `${baseUrl}/${bookId}`
        )
    }catch (err){
        console.error(err)
    }
}
const UpdateBooks = async(book :any) =>{
    try{
        axios.patch(
            `${baseUrl}?bookId=${book.bookId}`,
            book
        )
    }catch (err){
        console.error(err)
    }
}
 export {GetBooks,DeleteBooks,UpdateBooks}