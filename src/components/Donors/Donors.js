import React from 'react';
// import { useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Donors.css';

class Donors extends React.Component {

  componentDidMount() {
    document.querySelector('body').scrollTo(0, 0);
  }

  render() {
    return (
      <div id="donors">
        <>
        <NavBar />
        </>
        <Container fluid className="about">
          <Row className="about-band">
            <Col>
              <h1 className="our-music">Thank You!!</h1>
            </Col>
          </Row>
          <Container fluid id="donors-content"> 
            
              <Row>
                <Col>
                  <div className="music-text">
                    <p>
                      We are beyond excited that you have chosen to help us make more music!
                    </p>
                    <p className="text">
                      Check back soon to see your name below
                    </p>
                  </div>
                </Col>
              </Row>
              <Container fluid id="wall-of-fame">
              <Row> 
                <Col>
                  <div className="wall-of-fame-title">
                    <h2 className="wall-heading">Wall of Fame</h2>
                  </div>
                  <div className="wall-of-fame">
                    <div className="donor-name">
                      <p className="donor">
                        Kerry Sheets
                      </p>
                    </div>
                    <div className="donor-name">
                      <p className="donor donor-alt">
                        Charles Spencer
                      </p>
                    </div>
                    <div className="donor-name">
                      <p className="donor donor-alt3">
                        Burt Sheets
                      </p>
                    </div>
                    <div className="donor-name">
                      <p className="donor donor-alt">
                        Adam King
                      </p>
                    </div>
                    <div className="donor-name">
                      <p className="donor donor-alt2">
                        Mantis Toboggan MD
                      </p>
                    </div>
                    <div className="donor-name">
                      <p className="donor donor">
                        Art Vandelay
                      </p>
                    </div>
                    <div className="donor-name">
                      <p className="donor donor-alt3">
                        Mlepclaynos
                      </p>
                    </div>
                    <div className="donor-name">
                      <p className="donor donor-alt">
                        Peter Venkman
                      </p>
                    </div>
                    <div className="donor-name">
                      <p className="donor donor">
                        Egon Spengler
                      </p>
                    </div>
                    <div className="donor-name">
                      <p className="donor donor-alt3">
                        Winston Zeddemore
                      </p>
                    </div>
                    <div className="donor-name">
                      <p className="donor donor-alt2">
                        Ray Stantz
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
              </Container>
          </Container>
        </Container>
      </div>
    )
  }
}

export default Donors;