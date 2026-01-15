import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import BlogSection from '../components/BlogSection';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import InvestorSection from '../components/InvestorSection';
import SEO from '../components/Seo';
import StudentSection from '../components/StudentSection';
import './styles.scss';

function HomePage() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>

      <SEO title='Home' />

      <section class='hero is-fullheight is-bold'>
        <Navbar />

        <div class='hero-body'>
          <div class='container has-text-centered' style={{ maxWidth: '500px'}}>
              <Img fluid={data.placeholderImage.childImageSharp.fluid} />
              <h2 class='title'>
                Connecting students and mentors through investments in human potential.
              </h2>
          </div>
        </div>
      </section>

      <StudentSection />

      <InvestorSection />

      <BlogSection />

    </Layout>
  );
}

export default HomePage;
