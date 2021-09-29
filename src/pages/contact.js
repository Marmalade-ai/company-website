import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" description="Contact Us" />
    <div className="container mx-auto mt-10">
      <h1>Contact Us</h1>
    </div>
    <article className="pt-5">
      <div className="container mx-auto">
        <h2>Email</h2>
        <p>info@marmalade.ai</p>
      </div>
    </article>
  </Layout>
);

export default Contact;
