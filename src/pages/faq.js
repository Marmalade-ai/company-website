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
              <Link to="/alphaGoogleForm">Apply for Early Access</Link>. After
              receiving an invitation to participate in the Early Access
              Program, you will be able fill in your profile, which Marmalade AI
              will use to create a virtual network of people for you to meet.
            </p>
            <h3>What does it cost?</h3>
            <p>Free forever for Early Access users.</p>
            <h3>Is this a global service?</h3>
            <p>
              The Early Access program is only available for those living in
              North America.
            </p>
            <div className="pt-5" />
          </div>
          <div>
            <h2>Building Your Network</h2>
            <h3>How do I connect with other people?</h3>
            <p>
              Marmalade AI makes matches automatically based on what is included
              in your profile. Then you can choose whether to connect to those
              people suggested in your virtual network.
            </p>
            <h3>Can I find a job through this?</h3>
            <p>
              Marmalade AI helps you to build your professional network, which
              is an important component of finding jobs and contracts.
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
              offering your availability / non-availability, in the platform.
            </p>
            <h3>
              What if my area of specialization is not in the list of{' '}
              <Link to="/communities">Communities</Link>?
            </h3>
            <p>
              Marmalade AI supports all areas of professional networking, but we
              are currently focused on building a few specific communities. You
              are welcome to participate from other areas of expertise, but you
              may not find the matching experience to be as good as for those
              supported <Link to="/communities">Communities</Link>. However, we
              expect Marmalade AI to expand to other tech freelancing
              communities of practice, freelancing in general, and then all
              professionals in the future.
            </p>
            <h3>
              Where can I give feedback and discuss my Early Access experience?
            </h3>
            <p>
              Early Access participants have been invited to the{' '}
              <a href="https://forum.marmalade.ai/t/marmalade-ai-early-access-users-lounge/82">
                Early Access users lounge
              </a>{' '}
              in the Marmalade AI{' '}
              <a href="https://forum.marmalade.ai/">discussion forum</a>.
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
          <div>
            <h3>Where else can I ask questions about Marmalade AI?</h3>
            <p>
              Please <Link to="/contact">contact us</Link> directly or post in
              one of the public{' '}
              <a href="https://forum.marmalade.ai/">discussion forum</a> topics.
            </p>
            <div className="pt-5" />
          </div>
          <div>
            <p className="mt-8">
              <Link to="/alphaGoogleForm">
                <Button size="lg">Apply for Early Access</Button>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </article>
  </Layout>
);

export default Faq;
