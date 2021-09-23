import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const Communities = () => (
  <Layout>
    <SEO
      title="Communities"
      description="Marmalade AI is specifically designed to help several freelancer communities of practice."
    />
    <div className="container mx-auto mt-10">
      <h1>Communities</h1>
    </div>
    <article className="pt-4">
      <div className="px-6 mx-auto lg:w-2/3">
        <nav>
          <h2>
            <Link to="/communities/digital-marketing">Digital Marketing</Link>
          </h2>
          <h2>
            <Link to="/communities/machine-learning">Machine Learning</Link>
          </h2>
          <h2>
            <Link to="/communities/ux-design">UX Design</Link>
          </h2>
        </nav>
      </div>
    </article>
  </Layout>
);

export default Communities;
