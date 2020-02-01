import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import BlogTile from './BlogTile';
import { rhythm } from '../utils/typography';

function BlogSection() {
  const data = useStaticQuery(graphql`
    query {
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
    }
  `);
  const posts = data.allMarkdownRemark.edges;

  return (
    <section class='hero' style={{ marginTop: rhythm(2), marginBottom: rhythm(2) }}>
      <div class='hero-body'>
        <div class='container'>
          <div class='columns'>
            <div class='column is-6'>
              <h1 class='title'>
                Blog
              </h1>

              <h2 class='subtitle'>
                The best resources to learn about student debt, income share agreements, and investing in
                human potential.
              </h2>
            </div>
          </div>

          <div class='tile is-ancestor'>
            {posts.map(({ node: { fields: { slug }, frontmatter: { title, excerpt } } }) => (
              <div class="tile is-parent">
                <BlogTile title={title} excerpt={excerpt} permalink={slug} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default BlogSection;