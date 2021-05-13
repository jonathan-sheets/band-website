import React from 'react';
import axios from 'axios';

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    };
  }

  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string
        .replaceAll("<p>", "")
        .replaceAll("[&hellip;]</p>", "...")
        .replaceAll("&#8211;", "-")
        .replaceAll("&amp;", "&")
        .replaceAll("&nbsp;", " ");
    }
  }

  componentDidMount() {
    axios.get(
      "https://public-api.wordpress.com/rest/v1/sites/apatheticblogposts.wordpress.com/posts/" +
        this.props.match.params.slug
    )
    .then(res => {
      this.setState({ post: res.data });
      // const container = document.querySelector(".blog-post");
      // let scr = container.querySelectorAll("script");
      // scr.forEach(node => {
      //   let parent = node.parentElement;
      //   let d = document.createElement("script");
      //   d.async = node.async;
      //   d.src = node.src;
      //   d.type = "text/javascript";
      //   parent.insertBefore(d, node);
      //   parent.removeChild(node);
      //   d.onload = console.log(d);
      // });
    })
    .catch(error => console.log(error));
  }
  // parseOutScripts(content) {}

  render() {
    // const content = this.removeUnicode(this.props.post.content);
    // const title = this.removeUnicode(this.props.post.title);

    if (this.state.post) {
      return (
        <div className="blog">
          <div className="article">
            {this.state.post.featured_image ? (
              <img
                className="img-responsive webpic"
                alt="article header"
                src={this.state.post.featured_image}
              />
            ) : (
              ""
            )}
            <h3 className="text-center">{this.state.post.title}</h3>
            <div className=".blog-post" dangerouslySetInnerHTML={{ __html: this.state.post.content }} />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Article;