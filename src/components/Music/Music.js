import React from 'react';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Music.css';

class Music extends React.Component {

  componentDidMount() {
    document.querySelector('body').scrollTo(0, 0);
  }

  render() {
    return (
      <div id="music">
        <>
        <NavBar />
        </>
        <Container fluid className="about">
          <Row className="about-band">
            <Col>
              <h1 className="our-music">Our Music</h1>
            </Col>
          </Row>
          <Container fluid id="music-content"> 
            <div id="music-text-container">
              <Row>
                <Col>
                  <div className="music-text">
                    <p>
                      Due to licensing restrictions we are unable to post our cover songs here.  Below are some previously un-released songs from before Anna joined the band.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
              <Row>
                <Col>
                  
                  {/* <div className="music-player">
                  <iframe title="audio" style={{ border: 0, width: 700, height: 406,}} src="https://bandcamp.com/EmbeddedPlayer/album=2470716814/size=large/bgcol=333333/linkcol=fe7eaf/artwork=small/transparent=true/" seamless><a href="https://apatheticsuperstar.bandcamp.com/album/a-new-order-of-the-ages">A New Order of the Ages by Apathetic Superstar</a></iframe>
                  </div> */}
                  
                  <div className="audio-container">
                    <div className="audio-player">
                      <iframe title="music-player" 
                              className="iframe" 
                              src="https://bandcamp.com/EmbeddedPlayer/album=2470716814/size=large/bgcol=333333/linkcol=fe7eaf/artwork=small/transparent=true/" 
                              // allowFullScreen 
                              allow="encrypted-media"
                        >
                      </iframe>
                    </div>
                  </div>
                  

                </Col>
              </Row>
              
               
          </Container>
          <Row>
            <Col className="donate-content">
              <div className="donate">
                <p>If you like our music and want to hear more, consider being a hero and donate to the cause.
                   All donations go through PayPal and help us cover licensing and distribution costs.</p>
              </div>
              <div className="donate-action">
                <i className="fa fa-paypal fa-2x paypal" aria-hidden="true"></i>
                <form action="https://www.paypal.com/donate" method="post" target="_blank">
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

export default Music;