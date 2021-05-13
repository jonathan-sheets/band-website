import React from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../NavBar/NavBar';
import ArticlePreview from './ArticlePreview';

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  // removeUnicode(string) {
  //   if (string.indexOf("&#8217;") >= 0) {
  //     return this.removeUnicode(string.replace("&#8217;", "'"));
  //   } else {
  //     return string;
  //   }
  // }

  componentDidMount() {
    axios.get(
      "https://public-api.wordpress.com/rest/v1/sites/apatheticblogposts.wordpress.com/posts"
    ).then(res => {
      this.setState({ posts: res.data.posts });
      console.log(this.state.posts);
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div id="blog">
        <>
        <NavBar />
        </>
        <Container fluid className="about">
          <Row className="about-band">
            <Col>
              <h1>BLog</h1>
            </Col>
          </Row>
          <Container fluid id="content">
              <Row>
                <Col>
                  
                  <div className="blog">
                    {this.state.posts.map(post => <ArticlePreview post={post} />)}
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

export default Blog;