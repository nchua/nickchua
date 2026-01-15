import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import ProductDescription from '../components/ProductDescription';

function InvestorSection() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "student-mockup.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const descriptions = [
    {
      title: 'Partnering with students',
      description: `
        No one makes it through life alone. We all had mentors help us achieve more
        than we could have imagined. Be that mentor for the next generation of
        students by investing in their success.
      `,
    },
    {
      title: 'Sustainable financial support',
      description: `
        Financially support students and get paid back on the
        results. These results can be reinvested in more students to allow you to
        sustainably support each generation of students.
      `,
    },
  ];

  return (
    <section class='hero is-fullheight is-bold is-warning'>
      <div class='hero-body'>
        <div class='container'>
          <div class='columns'>
            <div class='column is-3'>
              <h1 class='title'>
                Investors
              </h1>
              <h2 class='subtitle'>
                Invest in a network of highly motivated students and share in the success of the students that you mentor.
              </h2>
            </div>

            <div class='column'>

              <div class='columns is-centered'>
                <div class='column is-8'>
                  <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                </div>
              </div>

              <div class='columns'>
                {descriptions.map(({ title, description }) => (
                  <ProductDescription
                    title={title}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InvestorSection;