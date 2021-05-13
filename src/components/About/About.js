import React from 'react';
import NavBar from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BandPhoto from '../../img/BandPhoto.png';
import './About.css';

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <>
        <NavBar />
        </>
        <Container fluid className="about">
          <Row className="about-band">
            <Col>
              <h1>About the Band</h1>
            </Col>
          </Row>
          <Container fluid id="content">
              <Row>
                <Col>
                  <div className="band-photo">
                    <img id="band-photo" src={BandPhoto} alt="the band"></img>
                  </div>
                </Col>
              </Row>  
              <Row>
                <Col>
                  
                  <div className="about-text">
                    <p>
                      Denver based and reluctant to commit to any specific genre, post metalcore act <span>Apathetic Superstar</span> have a unique approach to
                      making heavy music.  The driving force behind this duo is a desire to create catchy, crushing riffs blended seamlessly with 
                      cinematic melodies and serene atmospheres.  A heavy importance is also placed on lyrical content with both members refusing to
                      settle for anything generic.
                    </p>
                    <p>
                      Jon and Anna formed <span>Apathetic Superstar</span> in 2015 as a husband and wife duo making covers of meaningful songs from their youth.
                      Their debut EP "Covers & Tributes" was released on December 6th, 2019.  While these cover songs contain some elements of their
                      signature sound, they are meant more to show the sonic diversity the band is capable of.  They are currently writing and recording a full-length album titled "A Light In the Darkness."  All music that the band creates is recorded, mixed, and mastered by Jon in his
                      home studio.
                    </p>
                    <p><span>Apathetic Superstar</span> is:</p>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    <p><span>// Jon Sheets //</span> Guitars, Bass, Drums, Piano, Synths, Vocals</p>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    <p><span>// Anna Sheets //</span> Vocals</p>
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
              
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default About;