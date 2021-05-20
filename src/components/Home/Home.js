import React from 'react';
import NavBar from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import AWastedHymn from '../../img/AWastedHymn.png';
import CoversTributes from '../../img/CoversTributes.png';
import AmazonMusicBadge from '../../img/AmazonMusicBadge.png';
import iTunesStoreBuyBadge from '../../img/iTunesStoreBuyBadge.png';
import BandcampLogo128 from '../../img/BandcampLogo128.png';
import './Home.css';

class Home extends React.Component {

  componentDidMount() {
    document.querySelector('body').scrollTo(0, 0);
  }

  render() {
    return (
      <div id="home">
        <>
        <NavBar />
        </>
        <Container fluid className="home">
          <Row className="available-now">
            <Col>
              <h1 className="flash">Available Now</h1>
            </Col>
          </Row>
          <Container fluid id="content">
            <Row>
              <Col>
                <div className="albums">
                  <h4>Albums / EPs</h4>
                  <div className="titles">
                  <p><span>Covers & Tributes</span></p>
                  </div>
                  <div className="info-text">
                    <p>Songs by The Offspring, AFI, Chevelle, Marilyn Manson, Nine Inch Nails, and Linkin Park</p>
                  </div>
                  <div className="album-art">
                    <img id="covers-tributes" src={CoversTributes} alt="covers & tributes album artwork"></img>
                  </div>
                  <div className="store-links">
                    <div className="bandcamp-badge">
                      <a
                        href="https://apatheticsuperstar.bandcamp.com/album/covers-tributes"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={BandcampLogo128} className="bandcamp" alt="Get it on Bandcamp" width="106px"></img>
                      </a>
                    </div>
                    <div className="itunes-badge">
                      <a
                        href="https://music.apple.com/us/album/covers-tributes-ep/1488681660"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={iTunesStoreBuyBadge} className="iTunes" alt="Buy it on apple music" width="100px"></img>
                      </a>
                    </div>
                    <div className="amazon-badge">
                      <a 
                        href="https://www.amazon.com/Covers-Tributes-Apathetic-Superstar/dp/B081SBXB94/ref=sr_1_1?dchild=1&keywords=Apathetic+Superstar&qid=1619803510&s=dmusic&search-type=ss&sr=1-1"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={AmazonMusicBadge} className="amazon" alt="get it on amazon music" width="106px"></img>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              
              <Col>
                <div className="singles">
                  <h4>Singles</h4>
                    <div className="titles">
                    <p><span>A Wasted Hymn</span></p>
                    </div>
                    <div className="info-text">
                    <p>Our cover of the acoustic version by Architects</p>
                  </div>
                  <div className="album-art">
                    <img id="wasted-hymn" src={AWastedHymn} alt="a wasted hymn single artwork"></img>
                  </div>
                  <div className="store-links">
                    <div className="bandcamp-badge">
                      <a
                        href="https://apatheticsuperstar.bandcamp.com/album/a-wasted-hymn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={BandcampLogo128} className="bandcamp" alt="Get it on Bandcamp" width="106px"></img>
                      </a>
                    </div>
                    <div className="itunes-badge">
                    <a
                        href="https://music.apple.com/us/album/a-wasted-hymn-single/1505096800"
                        target="_blank"
                        rel="noreferrer"
                    >
                      <img src={iTunesStoreBuyBadge} className="iTunes" alt="Buy it on apple music" width="100px"></img>
                    </a>
                    </div>
                    <div className="amazon-badge">
                      <a 
                        href="https://www.amazon.com/Wasted-Hymn-Apathetic-Superstar/dp/B086HV62KK/ref=sr_1_2?dchild=1&keywords=Apathetic+Superstar&qid=1619803510&s=dmusic&search-type=ss&sr=1-2"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <img src={AmazonMusicBadge} className="amazon" alt="get it on amazon music" width="106px"></img>
                      </a>
                    </div>
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

export default Home;