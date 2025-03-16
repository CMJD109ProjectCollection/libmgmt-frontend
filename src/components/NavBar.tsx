import { NavLink } from 'react-router';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
     <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as = {NavLink} to="/book">Book</Nav.Link>
            <Nav.Link as = {NavLink} to="/staff">Staff</Nav.Link>
            <Nav.Link as = {NavLink} to="/members">Members</Nav.Link>
            <Nav.Link as = {NavLink} to="/lending">Lendings</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;