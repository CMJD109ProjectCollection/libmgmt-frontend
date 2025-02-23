import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { GetBooks} from '../service/Book/Book'


export const Book = ()=>{
     const tHeadings:string [] = [
        "BookId",
        "Title",
        "Publisher",
        "ISBN",
        "Author",
        "Edition",
        "Price",
        "Total Qty",
        "Avl Aty",
        "Last Updated Date",
        "Last Updated Time",
        "Options",
     ];

     interface Book {
        bookId: string;
        title: string;
        publisher: string;
        isbn: string;
        author: string;
        edition: string;
        price: number;
        totalQty: number;
        availableQty: number; 
        lastUpdatedDate: string; 
        lastUpdatedTime: string; 
    }
    

     const [books,setBooks] = useState<Book[]>([]);



     useEffect(()=>{
         //load book data
         const loadData = async ()=>{
            const getAllBooks = await GetBooks()
            setBooks(getAllBooks)
            console.log("Get All Books",getAllBooks)
         };
         loadData();
     },[])
     return(
         <>
         <Table striped bordered hover>
      <thead>
         <tr>
            {tHeadings.map((headings)=> (
                <th>{headings}</th>
            ))}
        </tr>
      </thead>
      <tbody>
        {books.map((row) =>(
           <tr key={row.bookId}>
              {Object.values(row).map((cell,index)=>(
                <td key={index}>{cell}</td>
              ))}
              <td>
                <div className='d-flex gap-2'>
                <Button variant="outline-success">Edit</Button>
                <Button variant="outline-danger">Delete</Button>
                </div>
              </td>
           </tr>
        ))}
      </tbody>
    </Table>
         </>
     )
}