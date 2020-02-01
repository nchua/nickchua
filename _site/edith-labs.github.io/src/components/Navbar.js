import { graphql, Link, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

function Navbar() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fixed(width: 200, height: 36) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <div class='hero-head'>
      <nav class='navbar'>
        <div class='container'>
          {/* <div class='navbar-brand'>
            <Link class='navbar-item'>
              <Img fixed={data.placeholderImage.childImageSharp.fixed} />
            </Link>
            <span class='navbar-burger burger' data-target='navbarMenuHeroA'>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div> */}
          <div id='navbarMenuHeroA' class='navbar-menu'>
            <div class='navbar-end'>

              <Link class='navbar-item' to='/' activeClassName='navbar-item is-active'>
                Home
              </Link>

              <Link class='navbar-item' to='/blog' activeClassName='navbar-item is-active'>
                Blog
              </Link>

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;