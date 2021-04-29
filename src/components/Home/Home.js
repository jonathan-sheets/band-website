import React from 'react';
import NavBar from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <>
        <NavBar />
        </>
        <Container fluid className="home">
          <Row>
            <Col>Welcome Home</Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Home;