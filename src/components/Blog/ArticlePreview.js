import React from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

class ArticlePreview extends React.Component {
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

  render() {
    const excerpt = this.removeUnicode(this.props.post.excerpt);
    const title = this.removeUnicode(this.props.post.title);

    if (this.props.post) {
      return (
        <div className="excerpts-container">
          <div className="excerpts">
            <h3 className="excerpt-title">{title}</h3>
              {this.props.post.featured_image ? (
                <img
                  className="img-responsive webpic"
                  alt="article header"
                  src={this.props.post.featured_image}
                />
              ) : (
                ""
              )}
            <div className="excerpt-content">{excerpt}
              <div className="read-more">
                
                  <Link to={`/blog/${this.props.post.slug}`}>
                    <button className="btn read-more-btn">Read More</button>
                  </Link>
                
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ArticlePreview;