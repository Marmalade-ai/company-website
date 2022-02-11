import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import Button from '../components/Button';

const Communities = () => (
  <Layout>
    <SEO
      title="Communities"
      description="Marmalade AI Early Access for virtual networking in tech communities (including freelancers)."
    />
    <div className="container mx-auto mt-10">
      <h1>Communities for Early Access</h1>
    </div>
    <article className="pt-2">
      <div className="container mx-auto">
        <nav>
          <h2 className="px-10">
            <Link to="/communities/digital-marketing">
              <div className="flex items-center">
                <div>
                  {/* <StaticImage
                    className="rounded-lg shadow-lg"
                    src="../images/digitalmarketing_earth_32.png"
                    alt="Marmalade AI digital marketing community."
                    title="Marmalade AI digital marketing community."
                  /> */}
                </div>
                <div>&nbsp;</div>
                <div>Digital Marketing</div>
              </div>
            </Link>
          </h2>
          <h2 className="px-10">
            <Link to="/communities/machine-learning">
              <div className="flex items-center">
                <div>
                  {/* <StaticImage
                    className="rounded-lg shadow-lg"
                    src="../images/machinelearning_minerals_32.png"
                    alt="Marmalade AI machine learning community."
                    title="Marmalade AI machine learning community."
                  /> */}
                </div>
                <div>&nbsp;</div>
                <div>Machine Learning</div>
              </div>
            </Link>
          </h2>
          <h2 className="px-10">
            <Link to="/communities/ux-design">
              <div className="flex items-center">
                <div>
                  {/* <StaticImage
                    className="rounded-lg shadow-lg"
                    src="../images/UXdesign_soil_32.png"
                    alt="Marmalade AI UX design community."
                    title="Marmalade AI UX design community."
                  /> */}
                </div>
                <div>&nbsp;</div>
                <div>UX Design</div>
              </div>
            </Link>
          </h2>
          <div>
            <br />
            <p>
              These are the focus for <b>Early Access</b> 
              for software people more generally. You are welcome to join
              with other specializations.
            </p>
            <p className="mt-8">
              <Link to="/alphaGoogleForm">
                <Button size="lg">Apply for Early Access</Button>
              </Link>
            </p>
          </div>
        </nav>
      </div>
    </article>
  </Layout>
);

export default Communities;
