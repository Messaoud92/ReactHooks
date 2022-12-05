import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ReactStars from 'react-rating-stars-component'
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navb({settext}) {
  return (
    <>
    
    <Navbar bg="dark" expand="lg" variant='dark'>
      <Container fluid>
        <Navbar.Brand href="#">Movie app</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/about"> About </Nav.Link>
          </Nav>
          <div style={{gap:'10px'}}><ReactStars count={5} size={24} activeColor="#ffd700"/></div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange= {(e)=>settext(e.target.value)}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Navb