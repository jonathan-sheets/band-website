import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BandPhotoCropped from '../../img/BandPhotoCropped.png';
import './About.css';

class About extends React.Component {

  componentDidMount() {
    document.querySelector('body').scrollTo(0, 0);
  }

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
                    <img id="band-photo" src={BandPhotoCropped} alt="the band"></img>
                  </div>
                </Col>
              </Row>  
              <Row>
                <Col>
                  
                  <div className="about-text">
                    <p>
                      Denver based and reluctant to commit to any specific genre, post metalcore act <span>Apathetic Superstar</span> has a unique approach to
                      making heavy music.  Although the lineup has recently changed, the driving force behind this band continues to be a desire to create catchy, crushing riffs blended seamlessly with 
                      cinematic melodies and serene atmospheres.  A heavy importance is also placed on lyrical content and refusing to
                      settle for anything generic.
                    </p>
                    <p>
                      <span>Apathetic Superstar</span> was formed in 2015 with Jon wanting to make covers of meaningful songs from his youth.
                      The debut EP "Covers & Tributes" was released on December 6th, 2019.  While these cover songs contain some elements of the band's
                      signature sound, they are meant more to show the sonic diversity the band is capable of.
                    </p>
                    <p>
                      Now, as the lone member, Jon will release a new cover song on March 25, 2022.  This song marks the re-birth of the band and ushers in a new era and direction.  Jon does all recording, mixing, and mastering himself in his home studio.  While the creation process is slow, you'll want to stay tuned for what's coming in the future.
                    </p>
                    <p><span>Apathetic Superstar</span> is:</p>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    <p><span>// Jonathan Sheets //</span> Guitars, Bass, Drums, Piano, Synths, Vocals</p>
                    {/* eslint-disable-next-line react/jsx-no-comment-textnodes */}
                    {/* <p><span>// Anna Sheets //</span> Vocals</p> */}
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

export default About;