import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const AlphaApplicationForm = () => (
  <Layout>
    <SEO
      title="Application Form"
      description="Register for Marmalade AI Networking"
    />
    <article className="py-20 lg:pb-20 lg:pt-24">
      <div className="px-6 mx-auto lg:w-2/3">
        <h1>Registration Form</h1>
        <iframe
          title="Marmalade AI Early Access Application Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLSek65nhm_18_mXcINJv3tg_n7_JqKjaAE_G0PW-Ar3LaqBVKg/viewform?embedded=true"
          width="640"
          height="1408"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </article>
  </Layout>
);

export default AlphaApplicationForm;
