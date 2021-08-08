import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const Communities = () => (
  <Layout>
    <SEO
      title="Communities"
      description="Marmalade AI specifically designed to help several freelancer communities of practice."
    />
    <div className="container mx-auto mt-10">
      <h1>Communities</h1>
    </div>
    <article className="py-20 lg:pb-4 lg:pt-4">
      <div className="px-6 mx-auto lg:w-2/3">
        <nav>
          <ul className="mt-4 leading-loose list-none">
            <li>
              <Link to="/communities/digital-marketing">Digital Marketing</Link>
            </li>
            <li>
              <Link to="/communities/machineLearning">Machine Learning</Link>
            </li>
            <li>
              <Link to="/communities/uxDesign">UX Design</Link>
            </li>
            <li>
              <Link to="/communities/other">
                Other freelancers and independent consultants
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </article>
  </Layout>
);

export default Communities;
