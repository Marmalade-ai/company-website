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
    <article className="pt-2">
      <div className="container mx-auto">
        <nav>
          <h2 className="px-10">
            <Link to="/communities/digital-marketing">Digital Marketing</Link>
          </h2>
          <h2 className="px-10">
            <Link to="/communities/machine-learning">Machine Learning</Link>
          </h2>
          <h2 className="px-10">
            <Link to="/communities/ux-design">UX Design</Link>
          </h2>
        </nav>
      </div>
    </article>
  </Layout>
);

export default Communities;
