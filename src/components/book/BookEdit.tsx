import { useEffect, useState } from "react";
import { Button, Form, Modal, FloatingLabel } from "react-bootstrap";
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
//   lastUpdatedDate: string;
//   lastUpdatedTime: string;
}
interface BookProps {
  show: boolean;
  selectedRow: Book | null;
  handleOnClose: () => void;
}

export const BookEdit = ({ show, selectedRow, handleOnClose }: BookProps) => {
    const [book , setBook] = useState<Book>({
        bookId: "",
        title: "",
        publisher: "",
        isbn: "",
        author: "",
        edition: "",
        price: 0,
        totalQty: 0,
        availableQty: 0
    });

    useEffect(()=>{
        if(selectedRow){
            setBook({...selectedRow})
        }
    },[selectedRow])

    const handleClose = () => {
    handleOnClose();
  };

  console.log("Selected Row fro Book Props", selectedRow);
  
  return (
    <Modal show={show} onHide={handleOnClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Modal title</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <FloatingLabel
            controlId="floatingInput"
            label="Book Id"
            className="mb-3"
          >
         <Form.Control 
            type="text" 
            placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput"
            label="Title"
            className="mb-3"
          >
         <Form.Control 
            type="textl" 
            placeholder="name@example.com" />
          </FloatingLabel>

          <FloatingLabel 
          controlId="floatingPassword" 
          label="Publisher"
          >
            <Form.Control 
            type="text" 
            placeholder="Password" />
          </FloatingLabel>

          <FloatingLabel 
          controlId="floatingPassword" 
          label="ISBN"
          >

            <Form.Control 
            type="text" 
            placeholder="Password" />
          </FloatingLabel>


          <FloatingLabel 
          controlId="floatingPassword" 
          label="Author"
          >

            <Form.Control 
            type="text" 
            placeholder="Password" />
          </FloatingLabel>

          <FloatingLabel 
          controlId="floatingPassword" 
          label="Edition"
          >

            <Form.Control 
            type="text" 
            placeholder="Password" />
          </FloatingLabel>

          <FloatingLabel 
          controlId="floatingPassword" 
          label="Price"
          >

            <Form.Control 
            type="nuber" 
            placeholder="Password" />
          </FloatingLabel>

          <FloatingLabel 
          controlId="floatingPassword" 
          label="Total Qty"
          >

            <Form.Control 
            type="nuber" 
            placeholder="Password" />
          </FloatingLabel>

          <FloatingLabel 
          controlId="floatingPassword" 
          label="Avl Qty"
          >

            <Form.Control 
            type="number" 
            placeholder="Password" />
          </FloatingLabel>

        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="danger" onClick={handleClose}>
          Close
        </Button>
        <Button variant="success">Update</Button>
      </Modal.Footer>
    </Modal>
  );
};
