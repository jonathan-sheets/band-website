import React from 'react';
import { Link } from 'react-router-dom';

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
        <div className="article">
          <h3 className="text-center">{title}</h3>
            {this.props.post.featured_image ? (
              <img
                className="img-responsive webpic"
                alt="article header"
                src={this.props.post.featured_image}
              />
            ) : (
              ""
            )}
          <div className="article-content">{excerpt}</div>
            <Link to={`/blog/${this.props.post.slug}`}>
              <button className="btn">Read More</button>
            </Link>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default ArticlePreview;