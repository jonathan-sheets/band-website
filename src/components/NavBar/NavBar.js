import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import ASLogoYellow from '../../img/ASLogoYellow.png';
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar sticky="top" bg="dark" variant="dark" expand="md" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <Navbar.Brand href="/">
          <img
            src={ASLogoYellow}
            height="70"
            className="d-inline-block align-top"
            alt="Apathetic Superstar Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <div>
            <Nav>
              <Nav.Link href="/" style={{ fontWeight: 500 }}>Home</Nav.Link>
              <Nav.Link href="/about" style={{ fontWeight: 500 }}>About</Nav.Link>
              <Nav.Link href="/music" style={{ fontWeight: 500 }}>Music</Nav.Link>
              <Nav.Link href="/photos" style={{ fontWeight: 500 }}>Photos</Nav.Link>
              <Nav.Link href="/video" style={{ fontWeight: 500 }}>Video</Nav.Link>
              <Nav.Link href="/blog" style={{ fontWeight: 500 }}>Blog</Nav.Link>
              <Nav.Link href="/shop" style={{ fontWeight: 500 }}>Shop</Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;