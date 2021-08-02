import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const TermsOfService = () => (
  <Layout>
    <SEO title="Terms of Service" description="Terms of Service" />
    <article className="py-20 lg:pb-20 lg:pt-24">
      <div className="px-6 mx-auto lg:w-2/3">
        <h1>Terms of Service</h1>
        <h2>Heading 2</h2>
        <p>Filler paragraph.</p>
      </div>
    </article>
  </Layout>
);

export default TermsOfService;
