import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const AlphaGoogleFormGate = () => (
  <Layout>
    <SEO
      title="Requires login to reach the Registration Form"
      description="Requires user to login to reach the Registration Form."
    />
    <article className="py-20 lg:pb-20 lg:pt-24">
      <div className="px-6 mx-auto lg:w-2/3">
        <h1>Please log in</h1>
      </div>
    </article>
  </Layout>
);

export default AlphaGoogleFormGate;
