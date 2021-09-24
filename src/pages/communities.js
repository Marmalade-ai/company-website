import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import { StaticImage } from 'gatsby-plugin-image';

const Communities = () => (
  <Layout>
    <SEO
      title="Communities"
      description="Marmalade AI is specifically designed to help several freelancer communities of practice."
    />
    <div className="container mx-auto mt-10">
      <h1>Communities</h1>
    </div>
    <article className="pt-2">
      <div className="container mx-auto">
        <nav>
          <h2 className="px-10">
            <Link to="/communities/digital-marketing">
              <StaticImage
                className="rounded-lg shadow-lg"
                src="../images/digitalmarketing_earth_32.png"
                alt="Marmalade AI digital marketing community."
                title="Marmalade AI digital marketing community."
              />{' '}
              Digital Marketing
            </Link>
          </h2>
          <h2 className="px-10">
            <Link to="/communities/machine-learning">
              <StaticImage
                className="rounded-lg shadow-lg"
                src="../images/machinelearning_minerals_32.png"
                alt="Marmalade AI machine learning community."
                title="Marmalade AI machine learning community."
              />{' '}
              Machine Learning
            </Link>
          </h2>
          <h2 className="px-10">
            <Link to="/communities/ux-design">
              <StaticImage
                className="rounded-lg shadow-lg"
                src="../images/UXdesign_soil_32.png"
                alt="Marmalade AI UX design community."
                title="Marmalade AI UX design community."
              />{' '}
              UX Design
            </Link>
          </h2>
          <br />
          <br />
          <p>
            The above are the freelancer communities for Early Access. We intend
            to add many more.
          </p>
        </nav>
      </div>
    </article>
  </Layout>
);

export default Communities;
