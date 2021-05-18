import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from '../NavBar/NavBar';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  componentDidMount() {
    axios.get(
      "https://public-api.wordpress.com/rest/v1.1/sites/apatheticblogposts.wordpress.com/posts/slug:" +
        this.props.match.params.slug
    )
    .then(res => {
      this.setState({ post: res.data });
      console.log(this.state.post);
    })
    .catch(error => console.log(error));
  }

  render() {
    if (this.state.post) {
      return (
          <div className="article">
          <>
          <NavBar />
          </>
            <h3 dangerouslySetInnerHTML={{ __html: this.state.post.title }} />
            {this.state.post.featured_image ? (
              <img
                className="img-responsive webpic"
                alt="article header"
                src={this.state.post.featured_image}
              />
            ) : (
              ""
            )}
            <div className="blog-post" dangerouslySetInnerHTML={{ __html: this.state.post.content }} />
            <Link to={`/blog`}>
            <button className="btn">Back</button>
            </Link>
          </div>
      );
    } else {
      return null;
    }
  }
}

export default Article;