import { Button, Modal } from "react-bootstrap"
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
interface BookProps{
    show:boolean;
    selectedRow :Book | null
}

export const BookEdit = ({show,selectedRow} : BookProps) =>{
    console.log("Selected Row fro Book Props",selectedRow)
        return(
            <Modal show={show}  centered>
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
      
              <Modal.Body>
                <p>Modal body text goes here.</p>
              </Modal.Body>
      
              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal>

    
        )
}