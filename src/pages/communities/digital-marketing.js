import React from 'react';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo';

const DigitalMarketing = () => (
  <Layout>
    <SEO
      title="Digital Marketing"
      description="Digital Marketing community of freelancers."
    />
    <div className="container mx-auto mt-10">
      <h1>Digital Marketing</h1>
    </div>
    <article className="py-20 lg:pb-4 lg:pt-4">
      <div className="px-6 mx-auto lg:w-2/3">
        <p>
          Freelancers in digital marketing specialize in areas such as SEO,
          content, new market development, website development, positioning,
          competitive analysis, Wordpress, collateral, influencer marketing,
          branding, inbound marketing, growth, data analytics, ecommerce, paid
          media / advertising, social media, events, and storytelling.
        </p>
        <h2>Sign up to try it!</h2>
        <p>
          As a freelancer in digital marketing, I would like to join the free
          Early Access program to use the Marmalade AI peer networking platform.
          I will be able to forward invitations to others I work with (or others
          I would like to work with). I will be happy to participate in the{' '}
          <a href="https://forum.marmalade.ai/t/early-access">Early Access</a>{' '}
          topic of the{' '}
          <a href="https://forum.marmalade.ai/">Marmalade AI Forum</a>, where I
          will provide feedback regarding this <i>preview</i> version of the
          application. Yay, freelancers!
        </p>
        <p className="mt-8 md:mt-12">
          <Button size="lg">Sign me up!</Button>
        </p>
      </div>
    </article>
  </Layout>
);

export default DigitalMarketing;
