import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const AlphaApplicationFormAccepted = () => (
  <Layout>
    <SEO
      title="Application Form Accepted"
      description="Thank you for applying for Early Access to the Marmalade AI Networking platform."
    />
    <article className="py-20 lg:pb-20 lg:pt-24">
      <div className="px-6 mx-auto lg:w-2/3">
        <h1>Registration Accepted!</h1>
        <p className="text-xl lg:text-2xl mt-6 font-light">
          Thank you for applying for Early Access to the Marmalade AI Networking
          platform. We will be in touch soon!
        </p>
      </div>
    </article>
  </Layout>
);

export default AlphaApplicationFormAccepted;
