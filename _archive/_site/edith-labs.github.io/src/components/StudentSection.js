import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';

import ProductDescription from '../components/ProductDescription';

function StudentSection() {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "investor-mockup.png" }) {
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
      title: 'An alternative to student debt',
      description: `
        Paying for college is hard. With loans, you owe a set amount after graduation
        no matter how much you earn. Edith helps you raise money with an income share agreement (ISA).
        Because you only owe a portion of what you earn, you can never go into debt.
      `,
    },
    {
      title: 'Access to mentorship',
      description: `
        It's hard facing life's challenges alone. Connect with the network of Edith investors to find
        a mentor personally invested in your success. Because mentors share in your future success,
        you'll always have someone who has your back and help you succeed.
      `,
    },
    {
      title: 'Empowering entrepreneurs',
      description: `
        Starting a company is hard, and it's even harder with the financial stress of
        supporting yourself. Raise money to support yourself as you pursue your passion,
        and meet successful founders to guide you as you grow your own company.
      `,
    },
  ];

  return (
    <section class='hero is-fullheight is-bold is-success'>
      <div class='hero-body'>
        <div class='container'>
          <div class='columns'>
            <div class='column is-3'>
              <h1 class='title'>
                Students
              </h1>
              <h2 class='subtitle'>
                Find financial support and mentorship from mentors directly invested in your future success.
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

export default StudentSection;