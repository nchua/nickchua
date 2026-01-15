import { graphql } from 'gatsby';
import React from 'react';

import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import { rhythm } from '../utils/typography';

function PostTemplate({ data }) {
  const post = data.markdownRemark;

  return (
    <Layout>
      <Navbar />
        <section class="hero is-info" style={{ marginBottom: rhythm(1) }}>
          <div class='hero-body'>
            <div class='container'>
              <h1 class='title'>
                {post.frontmatter.title}
              </h1>

              <h2 class='subtitle'>
                {post.frontmatter.excerpt}
              </h2>

              <p>{post.frontmatter.date}</p>
            </div>

          </div>
        </section>

        <div class='container' style={{ marginBottom: rhythm(1) }}>
          <div class='columns is-centered'>
            <div class='column is-8'>
              <section class='content' dangerouslySetInnerHTML={{ __html: post.html }} />

              <hr style={{ marginTop: rhythm(1.5), marginBottom: rhythm(1.5) }} />

              <p>Thanks for reading this post!</p>

            </div>
          </div>
        </div>

    </Layout>
  );
}

export default PostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        excerpt
      }
    }
  }`