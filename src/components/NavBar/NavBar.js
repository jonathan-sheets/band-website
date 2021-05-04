import React from 'react';
import { Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import ASLogoRed from '../../img/ASLogoRed.png'
import './NavBar.css';

class NavBar extends React.Component {
  render() {
    return (
      <>
        <Navbar sticky="top"  variant="dark" expand="lg">
          <Navbar.Brand href="/">
            <img
              src={ASLogoRed}
              height="55"
              className="d-inline-block align-top"
              alt="Apathetic Superstar Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <div>
              <Nav justify className="header">
                <Nav.Link 
                  href="/" 
                >
                Home
                </Nav.Link>
                <Nav.Link 
                  href="/about" 
                >
                About
                </Nav.Link>
                <Nav.Link 
                  href="/music" 
                >
                Music
                </Nav.Link>
                <Nav.Link 
                  href="/photos" 
                >
                Photos
                </Nav.Link>
                <Nav.Link 
                  href="/video" 
                >
                Video
                </Nav.Link>
                <Nav.Link 
                  href="/blog" 
                >
                Blog
                </Nav.Link>
                <Nav.Link 
                  href="/merch" 
                >
                Merch
                </Nav.Link>
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
      
      
        <footer>
          <hr></hr>
          <div className="link-container"> 
            <div className="social-link">
              <a 
                  href="https://www.youtube.com/channel/UCaKQ-nP7QVz1ne04DiOoATg?view_as=subscriber" 
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fab fa-youtube fa-2x"></i>
                </a>
            </div>
            <div className="social-link">
              <a 
                href="https://instagram.com/apathetic.superstar?igshid=1jx0twl6wxbt4" 
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
            <div className="social-link">
              <a 
                href="https://soundcloud.com/user-275429593-118303530" 
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-soundcloud fa-2x"></i>
              </a>
            </div>
            <div className="social-link">
              <a 
                href="https://www.facebook.com/Apathetic-Superstar-618760851804672/" 
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
            </div>
          </div> 
          <div className="copyright">
            <p>&copy; 2021 - Jonathan Sheets / Apathetic Superstar</p>
          </div>
        </footer> 
      </>
    )
  }
}

export default NavBar;