import Table from 'react-bootstrap/Table';
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
        "Last Updated Time"
     ]
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
        <tr>
          {/* <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td> */}
        </tr>
      </tbody>
    </Table>
         </>
     )
}