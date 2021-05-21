import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import LazyLoad from 'react-lazyload';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../NavBar/NavBar';
import AcousticTracking from '../../img/AcousticTracking.png';
import AnnaBooth from '../../img/AnnaBooth.png';
import AnnaSinging from '../../img/AnnaSinging.png';
import BassTracking from '../../img/BassTracking.png';
import BassTracking2 from '../../img/BassTracking2.png';
import GuitarHero from '../../img/GuitarHero.png';
import JonAcoustic from '../../img/JonAcoustic.png';
import JonPlaying from '../../img/JonPlaying.png';
import MT15 from '../../img/MT15.png';
import QuadCortex from '../../img/QuadCortex.png';
import RecordingMess from '../../img/RecordingMess.png';
import SolarSuperman from '../../img/SolarSuperman.png';
import './Photos.css';

class Photos extends React.Component {

  componentDidMount() {
    document.querySelector('body').scrollTo(0, 0);
  }

  render() {
    return (
      <div id="photos">
        <>
        <NavBar />
        </>
        <Container fluid className="pictures">
          <Row className="about-band">
            <Col>
              <h1 className="our-photos">Photos</h1>
            </Col>
          </Row>
          <Container id="content">
            <Row>
              <Col md="auto">
                <div className="carousel-container">
                  <LazyLoad >
                  <Carousel>
                    <div className="band-images">
                      <img src={JonPlaying} alt="Jon playing electric guitar and singing" />
                      {/* <p className="legend">Practice</p> */}
                    </div>
                    <div className="band-images">
                      <img src={AnnaBooth} alt="Anna recording in the vocal booth" />
                      {/* <p className="legend">Anna Recording Vocals</p> */}
                    </div>
                    <div className="band-images">
                      <img src={MT15} alt="PRS MT-15 amp head" />
                      {/* <p className="legend">Reamping</p> */}
                    </div>
                    <div className="band-images">
                      <img src={AcousticTracking} alt="recording acoustic guitar"/>
                      {/* <p className="legend">Recording Acoustic Guitar</p> */}
                    </div>
                    <div className="band-images">
                      <img src={AnnaSinging} alt="Anna recording vocals" />
                      {/* <p className="legend">Anna Recording Vocals</p> */}
                    </div>
                    <div className="band-images">
                      <img src={BassTracking} alt="Jon recording bass guitar" />
                      {/* <p className="legend">Recording Bass</p> */}
                    </div>
                    <div className="band-images">
                      <img src={BassTracking2} alt="Jon recording bass guitar" />
                      {/* <p className="legend">Recording Bass</p> */}
                    </div>
                    <div className="band-images">
                      <img src={JonAcoustic} alt="Jon playing acoustic and singing" />
                      {/* <p className="legend">Unplugged</p> */}
                    </div>
                    <div className="band-images">
                      <img src={QuadCortex} alt="Jon testing out his Quad Cortex" />
                      {/* <p className="legend">Playing with new toys</p> */}
                    </div>
                    <div className="band-images">
                      <img src={RecordingMess} alt="Guitar, apms, and cables during recording" />
                      {/* <p className="legend">Coma White recording session</p> */}
                    </div>
                    <div className="band-images">
                      <img src={SolarSuperman} alt="Jon playing with his new Solar guitar" />
                      {/* <p className="legend">Playing with new toys</p> */}
                    </div>
                    <div className="band-images">
                      <img src={GuitarHero} alt="Jon and Anna playing guitar hero" />
                      {/* <p className="legend">Guitar Hero Counts.. Right?</p> */}
                    </div>
                  </Carousel>
                  </LazyLoad>
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

export default Photos;