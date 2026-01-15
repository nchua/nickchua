import { Link } from 'gatsby';
import Img from "gatsby-image"
import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { rhythm } from '../utils/typography';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              date(formatString: "MMMM D, YYYY")
              excerpt
            }
          }
        }
      }
      placeholderImage: file(relativePath: { eq: "logo-dark.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <>
      {children}
      <footer class='hero is-dark'>
        <div class='hero-body'>
        <div class='container'>
          <div class='column is-2' style={{ padding: 0 }}>
            <Link to='/'>
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
            </Link>
          </div>

          <div class='columns' style={{ marginTop: rhythm(1.5), marginBottom: rhythm(1.5) }}>

            <div class='column is-4'>
              <Link>
                <h4 class='subtitle'>Home</h4>
              </Link>
            </div>

            <div class='column is-4'>

              <h4 class='subtitle'>Blog</h4>

              {posts.map(({ node: { fields: { slug }, frontmatter: { title } } }) => (
                <Link to={slug}><p class='footer-link'>{title}</p></Link>
              ))}

            </div>

            <div class='column is-4'>

              <h4 class='subtitle'>Social</h4>

              <Link to={'/'}><p class='footer-link'>Twitter</p></Link>
              <Link to={'/'}><p class='footer-link'>Mail</p></Link>

            </div>

          </div>

          <p style={{ color: 'rgb(124, 124, 124)' }}>
            Copyright © {new Date().getFullYear()} Edith Labs
          </p>

         </div>
         </div>
      </footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
