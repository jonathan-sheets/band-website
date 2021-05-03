import React from 'react';
import NavBar from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AWastedHymn from '../../img/AWastedHymn.png';
import CoversTributes from '../../img/CoversTributes.png';
import AmazonMusicBadge from '../../img/AmazonMusicBadge.png';
import iTunesStoreBuyBadge from '../../img/iTunesStoreBuyBadge.svg';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div id="home">
        <>
        <NavBar />
        </>
        <Container fluid className="home">
          <Row className="available-now">
            <Col>
              <h1>Avaliable Now!</h1>
            </Col>
          </Row>
          <Row>
            <Col className="albums">
              <h4>Albums / EPs</h4>
              <div>
                <p><span>Covers & Tributes</span></p>
                <p>Including songs by The Offspring, AFI, Chevelle, Marilyn Manson, Nine Inch Nails, and Linkin Park</p>
              </div>
              <div>
                <img src={CoversTributes} alt="covers & tributes album artwork" width="400px"></img>
              </div>
              <div className="store-links">
                <div className="itunes-badge">
                  <a
                    href="https://music.apple.com/us/album/covers-tributes-ep/1488681660"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={iTunesStoreBuyBadge} className="iTunes" alt="Buy it on apple music" width="138px"></img>
                  </a>
                </div>
                <div className="amazon-badge">
                  <a 
                    href="https://www.amazon.com/Covers-Tributes-Apathetic-Superstar/dp/B081SBXB94/ref=sr_1_1?dchild=1&keywords=Apathetic+Superstar&qid=1619803510&s=dmusic&search-type=ss&sr=1-1"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={AmazonMusicBadge} className="amazon" alt="get it on amazon music" height="39px"></img>
                  </a>
                </div>
              </div>
            </Col>
            <Col className="singles">
              <h4>Singles</h4>
              <div className="artwork">
                <p><span>A Wasted Hymn</span></p>
                <p>Our cover of the acoustic version by Architects</p>
              </div>
              <div className="artwork">
                <img src={AWastedHymn} alt="a wasted hymn single artwork" width="400px"></img>
              </div>
              <div className="store-links">
                <div className="itunes-badge">
                <a
                    href="https://music.apple.com/us/album/a-wasted-hymn-single/1505096800"
                    target="_blank"
                    rel="noreferrer"
                >
                  <img src={iTunesStoreBuyBadge} className="iTunes" alt="Buy it on apple music" width="138px"></img>
                </a>
                </div>
                <div className="amazon-badge">
                  <a 
                    href="https://www.amazon.com/Wasted-Hymn-Apathetic-Superstar/dp/B086HV62KK/ref=sr_1_2?dchild=1&keywords=Apathetic+Superstar&qid=1619803510&s=dmusic&search-type=ss&sr=1-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={AmazonMusicBadge} className="amazon" alt="get it on amazon music" height="39px"></img>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          
          <Row>
            <Col>
              
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
              
            </Col>
          </Row>
          
        </Container>
      </div>
    )
  }
}

export default Home;