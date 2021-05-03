import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
// import ASLogoYellow from '../../img/ASLogoYellow.png';
import ASLogoRed from '../../img/ASLogoRed.png'
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <Navbar sticky="top"  variant="dark" expand="lg" className="nav-bar">
        <Navbar.Brand href="/">
          <img
            src={ASLogoRed}
            height="70"
            className="d-inline-block align-top"
            alt="Apathetic Superstar Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <div>
            <Nav justify>
              <Nav.Link 
                href="/" 
                // style={{ color: "#FF4B2B" }}
              >
              Home
              </Nav.Link>
              <Nav.Link 
                href="/about" 
                // style={{ color: "#FF4B2B" }}
              >
              About
              </Nav.Link>
              <Nav.Link 
                href="/music" 
                // style={{ color: "#FF4B2B" }}
              >
              Music
              </Nav.Link>
              <Nav.Link 
                href="/photos" 
                // style={{ color: "#FF4B2B" }}
              >
              Photos
              </Nav.Link>
              <Nav.Link 
                href="/video" 
                // style={{ color: "#FF4B2B" }}
              >
              Video
              </Nav.Link>
              <Nav.Link 
                href="/blog" 
                // style={{ color: "#FF4B2B" }}
              >
              Blog
              </Nav.Link>
              <Nav.Link 
                href="/merch" 
                // style={{ color: "#FF4B2B" }}
              >
              Merch
              </Nav.Link>
            </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavBar;