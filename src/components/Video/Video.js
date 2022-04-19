import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Video.css';

class Video extends React.Component {

  componentDidMount() {
    document.querySelector('body').scrollTo(0, 0);
  }

  render() {
    return (
      <div id="video">
        <>
        <NavBar />
        </>
        <Container fluid className="about">
          <Row className="about-band">
            <Col>
              <h1>Video</h1>
            </Col>
          </Row>
          <Container fluid id="video-content"> 
            <Row>
              <Col>  
                <div className="video-text">
                  <p>
                    The music video I made for my cover of "Your Promise" by MEST.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="video-container">
                <iframe 
                  className="video-iframe"
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/V2w8oJU0Wx8" 
                  title="YouTube video player" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen
                >
                </iframe>
                </div>
              </Col>
            </Row>    
          </Container>
          <br />
          <Container fluid id="video-content"> 
            <Row>
              <Col>  
                <div className="video-text">
                  <p>
                    A video of me playing a full setlist of some of my favorite songs by some of my favorite bands.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="video-container">
                  <iframe 
                    className="video-iframe"
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/F-2AP5TQ5-Y"
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  >
                  </iframe>
                </div>
              </Col>
            </Row>    
          </Container>
          <br />
          <Container fluid id="video-content"> 
            <Row>
              <Col>  
                <div className="video-text">
                  <p>
                    This is the video we made for our dog, Chester, who passed away suddenly and unexpectedly.  It features our cover of "A Wasted Hymn" by Architects.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="video-container">
                  <iframe 
                    className="video-iframe"
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/pYSM6Tj01yE" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  >
                  </iframe>
                </div>
              </Col>
            </Row>    
          </Container>
          <Row>
            <Col className="donate-content">
              <div className="donate">
                <p>If you like my music and want to hear more, consider being a hero and donate to the cause.
                   All donations go through PayPal and help cover licensing and distribution costs.</p>
              </div>
              <div className="donate-action">
                <i className="fa fa-paypal fa-2x paypal" aria-hidden="true"></i>
                <form action="https://www.paypal.com/donate" method="post">
                  <input 
                    type="hidden" 
                    name="hosted_button_id" 
                    value="6VMA89ES6AHCN"   
                  />
                  <input 
                    className="donate-button"
                    type="submit" 
                    value="Make a Donation"
                    // src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" 
                    border="0" 
                    name="submit" 
                    title="PayPal - The safer, easier way to pay online!" 
                    alt="Donate with PayPal button" 
                  />
                  <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
                <i className="fa fa-paypal fa-2x paypal" aria-hidden="true"></i>
              </div> 
              <div className="donated">
                <p>
                  Already donated?  Check out your name on the
                  <Link to={`/donors`}>
                    <button className="btn wall-btn">Wall of fame</button>
                  </Link>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Video;