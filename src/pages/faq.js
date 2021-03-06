import React from 'react';
import { Link } from 'gatsby';
import Button from '../components/Button';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const Faq = () => (
  <Layout>
    <SEO title="FAQ" description="Frequently Asked Questions" />
    <div className="container mx-auto mt-10">
      <h1>Frequently Asked Questions</h1>
    </div>
    <article className="pt-5">
      <div className="container mx-auto">
        <div className="pt-5 divide-y-4 divide-primary">
          <div />
          <div>
            <h2>Getting Started</h2>
            <h3>How do I get started?</h3>
            <p>
              Click this link to{' '}
              <Link to="/alphaGoogleForm">apply for Early Access</Link>. Fill in
              your profile, which Marmalade AI will use to create a virtual
              network.
            </p>
            <h3>What does it cost?</h3>
            <p>Free forever for Early Access users.</p>
            <h3>Is this a global service?</h3>
            <p>
              The Early Access program is only available for residents of the
              Americas.
            </p>
            <div className="pt-5" />
          </div>
          <div>
            <h2>Building Your Network</h2>
            <h3>How do I connect with other people?</h3>
            <p>
              Marmalade AI creates a virtual network automatically based on your
              profile. You choose whether to connect or be connected.
            </p>
            <h3>Can I find a job through this?</h3>
            <p>
              Marmalade AI helps build your professional network, which is a key
              part of finding work.
            </p>
            <h3>What can I learn through this?</h3>
            <p>
              A professional network is a great resource for learning and
              sharing whatever is relevant to your work.
            </p>
            <h3>What if I want to be mentored? Or to mentor?</h3>
            <p>Indicate that in your profile.</p>
            <h3>How do I contact people?</h3>
            <p>
              For now, you will need to set up a Zoom or similar call. Down the
              road, we plan to incorporate video chat capability, as well as
              indicating your availability and interests.
            </p>
            <h3>
              What if my specialization is not in the list of{' '}
              <Link to="/communities">Communities for Early Access</Link>?
            </h3>
            <p>
              Although virtual networking applies to everyone, for "Early
              Access" the focus is on specific areas. If you are outside of
              that, you are welcome to participate, but you may not find the
              matching to be as good. Marmalade AI expects to expand, so you
              definitely can get in on the ground floor.
            </p>
            <div className="pt-5" />
          </div>
          <div>
            <h2>Your Information</h2>
            <h3>Will my information be protected?</h3>
            <p>
              Yes. See our <Link to="/privacy-policy">Privacy Policy</Link>.
            </p>
            <h3>Will my information be sold to third parties?</h3>
            <p>No.</p>
            <h3>Will there be advertising on the website?</h3>
            <p>No.</p>
            <div className="pt-5" />
          </div>
          <div />{' '}
        </div>
        <div>
          <h3>Where else can I ask questions about Marmalade AI?</h3>
          <p>
            Please <Link to="/contact">contact us</Link> directly or post in one
            of the public{' '}
            <a href="https://forum.marmalade.ai/">discussion forum</a> topics.
          </p>
        </div>
        <div>
          <p className="mt-8">
            <Link to="/alphaGoogleForm">
              <Button size="lg">Apply for Early Access</Button>
            </Link>
          </p>
        </div>
      </div>
    </article>
  </Layout>
);

export default Faq;
