import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { DeleteBooks, GetBooks} from '../../service/Book/Book'
import { BookEdit } from './BookEdit';


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
     const [showEditForm,setShowEditForm] = useState(false);
     const [ selectedRow, setSelectedRow]  =useState<Book | null>(null);

     const handleOnEdit = (row : Book) =>{
       setShowEditForm(true)
       setSelectedRow(row)
     }

     const handleOnDelete = async (bookId :string) =>{
       try{
        await DeleteBooks(bookId);
        setBooks(books.filter((book)=> book.bookId !== bookId))
       }catch(err){
         console.error(err);
         
       }
       
    }


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
                <Button variant="outline-success" onClick={() =>handleOnEdit(row)}>Edit</Button>
                <Button variant="outline-danger" onClick={() => handleOnDelete(row.bookId)}>Delete</Button>
                </div>
              </td>
           </tr>
        ))}
      </tbody>
    </Table>
    {/* Book Edit */}
    <BookEdit
      show={showEditForm}
      selectedRow = {selectedRow}
  
    />
         </>
     )
}