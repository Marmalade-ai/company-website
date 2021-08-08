import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo';
import SplitSection from '../../components/SplitSection';

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
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <p className="splitBody">
                Digital marketing means collaboration to get feedback.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../../images/kobu-agency-7okkFhxrxNw-unsplash_300.jpg"
              alt="Digital marketing means collaboration to get feedback."
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <p className="splitBody">
                Search Engine Optimization (SEO) is key to inbound marketing.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../../images/pexels-freeboilergrants-7119258_300.jpg"
              alt="Search Engine Optimization (SEO) is key to inbound marketing."
            />
          }
        />
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
          Alpha testing program to use the Marmalade AI peer networking
          platform. I understand that &quot;Alpha&quot; means this is a very
          early pre-release of the application with minimal functionality.
          However:
        </p>
        <div className="ml-10">
          <ul className="list-outside">
            <li>
              I will be introduced to other freelancers, who I would probably
              not meet otherwise.
            </li>
            <li>
              I will be able to forward invitations to others I work with (or
              others I would like to work with).
            </li>
            <li>
              I will participate in the{' '}
              <a href="https://forum.marmalade.ai/t/marmalade-ai-alpha-discussion-lounge/">
                Alpha
              </a>{' '}
              discussion topic of the{' '}
              <a href="https://forum.marmalade.ai/">Marmalade AI Forum</a>,
              where I will provide feedback regarding this Alpha version of the
              application.
            </li>
          </ul>
        </div>
        Yay, freelancers!
        <p className="mt-6">
          <Button size="lg">Sign me up!</Button>
        </p>
      </div>
    </article>
  </Layout>
);

export default DigitalMarketing;
