import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SEO from '../components/Seo';
import { rhythm } from '../utils/typography';
import './styles.scss';

function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout>

      <SEO title='Blog' />

        <Navbar />
        <div class='container'>
          <div class='columns is-centered'>

            <div class='column is-6'>
              <section class='hero is-child is-info notification' style={{ minHeight: '60vh'}}>
                <div class='hero-body'>
                  <p class='title'>Blog</p>
                </div>
              </section>
            </div>

            <div class='column is-4'>

              <h3 class='title'>Featured</h3>

              <hr style={{ marginTop: rhythm(-0.5), }} />

              {posts.map(({ node: { fields: { slug }, frontmatter: { title, date } } }) => (
                <Link to={slug}>
                  <section style={{ marginBottom: rhythm(0.5) }}>
                    <p class='text-link'>{date}</p>
                    <h3 class='title text-link'>{title}</h3>
                  </section>
                </Link>
              ))}
            </div>

          </div>

          <div class='columns is-centered'>
            <div class='column is-10'>
              <hr />
            </div>
          </div>

          <div class='columns is-centered'>

            <div class='column is-10'>
              <div class='tile is-ancestor is-vertical'>
                  {posts.map(({ node: { fields: { slug }, frontmatter: { title, excerpt } } }) => (
                    <div class="tile is-parent">
                      <Link class='tile is-child' to={slug}>
                        <p class='text-link title'>{title}</p>
                        <p class='text-link'>{excerpt}</p>
                        <hr />
                      </Link>
                    </div>
                  ))}

              </div>
            </div>

         </div>
      </div>
    </Layout>
  );
}

export default BlogPage;
