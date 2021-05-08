import React from 'react';
import { Link } from 'gatsby';
import { getSrc } from 'gatsby-plugin-image';

const PostCard = (props) => (
  <article
    className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${
      props.postClass
    } ${props.node.frontmatter.thumbnail ? `with-image` : `no-image`}`}
    style={
      props.node.frontmatter.thumbnail && {
        backgroundImage: `url(${
          getSrc(
            props.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData
          )
          // props.node.frontmatter.thumbnail.childImageSharp.gatsbyImageData.src
        })`,
      }
    }
  >
    <Link to={props.node.fields.slug} className="post-card-link">
      <div className="post-card-content">
        <h2 className="post-card-title">
          {props.node.frontmatter.title || props.node.fields.slug}
        </h2>
      </div>
    </Link>
  </article>
);

export default PostCard;
