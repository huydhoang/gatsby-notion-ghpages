import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import Seo from '../components/seo';

import '../utils/normalize.css';
import '../utils/css/screen.css';

const AboutPage = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout title={siteTitle}>
      <Seo title="About" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h2 id="about-page-description">
            Clean design, beautiful typography. This is the blog I want to give
            you.
          </h2>
          <figure className="kg-card kg-image-card kg-width-full">
            <GatsbyImage
              image={data.benchAccounting.childImageSharp.gatsbyImageData}
              className="kg-image"
            />
            <figcaption>An image to help relax your eyes.</figcaption>
          </figure>
          <h3 id="dynamic-styles">My name is Huy. I'm a software engineer.</h3>
          <p>
            In 2019, I co-founded BestBud, a company leveraging AI and other
            advanced technologies to benefit children's learning and
            development. We are looking for technical collaboration and business
            opportunities in:
          </p>
          <p>+ AI / Machine Learning</p>
          <p>+ Robotics for Education</p>
          <p>+ Web and Mobile App Development</p>
          <p>
            To discuss idea, please email me at{' '}
            <a href="mailto:huy@bbudtech.com">huy@bbudtech.com</a>{' '}
          </p>
        </div>
      </article>
    </Layout>
  );
};

const indexQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;

const About = (props) => (
  <StaticQuery
    query={indexQuery}
    render={(data) => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
);

export default About;
