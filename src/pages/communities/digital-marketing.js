import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
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
      <h1>
        <StaticImage
          className="rounded-lg shadow-lg rounded-lg-vertical-align"
          src="../../images/digitalmarketing_earth_64.png"
          alt="Marmalade AI digital marketing community."
          title="Marmalade AI digital marketing community."
        />{' '}
        Digital Marketing
      </h1>
    </div>
    <article className="py-20 lg:pb-4 lg:pt-4">
      <div className="px-6 mx-auto lg:w-2/3">
        <h2>Sign up to try it!</h2>
        <p>
          As a freelancer in digital marketing, I would like to <b>join</b> the
          free Early Access testing program to use the Marmalade AI peer
          networking platform. I understand that &quot;Early Access&quot; means
          this is a very early pre-release of the application with minimal
          functionality. However:
        </p>
        <div className="ml-10">
          <ul className="list-outside">
            <li>
              I will be <b>introduced</b> to other freelancers, who I would
              probably not meet otherwise.
            </li>
            <li>
              I will be able to forward <b>invitations</b> to others I work with
              (or others I would like to work with).
            </li>
            <li>
              I will <b>participate</b> in an Early Access discussion topic of
              the{' '}
              <a
                href="https://forum.marmalade.ai/"
                rel="noreferrer"
                target="_blank"
              >
                Marmalade AI Forum
              </a>
              , where I will provide feedback regarding this Early Access
              version of the application.
            </li>
          </ul>
        </div>
        Yay, freelancers!
        <p className="mt-8">
          <Link to="/alphaGoogleForm">
            <Button size="lg">Apply for Early Access</Button>
          </Link>
        </p>
        <h2>How Can I Do Better as a Freelancer in Digital Marketing?</h2>
        <p>
          &quot;How can you help me do <b>better</b> as a freelancer in digital
          marketing?&quot;
        </p>
        <p>
          If you found us through a <b>search query</b>, was it something like
          that? Or did you get results that seemed like answers to a different
          question: How can I be kept away from my peers, fall into the trap of
          price competition, and be commoditized as a freelancer?
        </p>
        <p>
          We are so glad you found us after all! We hope you can use Marmalade
          AI to actually answer that very <b>question</b>: &quot;How can you
          help me do better as a freelancer in digital marketing?&quot;
        </p>
        <h2>Virtual Network</h2>
        <p>
          The <b>short answer</b> is: sign up and use Marmalade AI's virtual
          network that applies NLP to your profile to connect you with other
          specialists in digital marketing. So how do you get a profile? Well,
          you can copy and paste from elsewhere, or write it from scratch.
          Either way, it is quick to register. Instead of taking years to build
          up a network, a virtual network takes minutes and reflects your
          profile.
        </p>
        <p>
          The <b>long answer</b> is: by using Marmalade AI you can have a
          digital marketing network where you can <b>raise the level</b> of your
          work. We are in the era of virtualization -- so why not a{' '}
          <b>
            <i>virtual network</i>
          </b>{' '}
          for freelancers? It is the same idea. Your virtual network reflects
          your profile. It is normally composed of other digital marketing
          freelancers with related specializations. It changes when you change
          your profile (caveat: in &quot;Early Access,&quot; it changes the next
          time our matching engine runs; which is not in real time currently).
        </p>
        <p>
          This means you can use your virtual network to <b>find help</b> on
          part of a digital marketing project where you you lack the right
          expertise. For example, say you are a &quot;content&quot; specialist
          and part of the project turns out to require current SEO skills. Or
          maybe you can help someone doing an email marketing project and you
          know about the latest in CCPA, GDPR, etc. requirements for email
          marketing.
        </p>
        <p>
          Similarly, a lot of projects have <b>scope</b> in which I can do what
          I am good at, but one-tenth of the scope might be in a less familiar
          area that will make it end up being a money-losing project. The goal
          of Marmalade AI is to be a platform where your virtual network enables
          you to focus on what you are good at.
        </p>
        <p>
          <b>Transactions</b> are one part of the story; <b>and</b> the other is{' '}
          <b>learning</b>. How do you efficiently stay current in topics that
          are important to, but not core to, your expertise? How about, for
          example, if you could create a virtual room at 12:00pm (EST){' '}
          <b>today</b> to discuss the latest in SEO and send notifications about
          it to people who indicate an interest in that. It is like wikis or
          forum boards, or maybe like the good parts of Quora.com or Clubhouse,
          but more exact.
        </p>
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <p className="splitBody font-semibold">
                Digital marketing means collaboration to get feedback.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../../images/kobu-agency-7okkFhxrxNw-unsplash_300.jpg"
              alt="Two women collaborating at a computer screen."
              title="Collaborating to get feedback."
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <p className="splitBody font-semibold">
                Search Engine Optimization (SEO) is key to inbound marketing.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../../images/pexels-freeboilergrants-7119258_300.jpg"
              alt="Scrabble tiles spelling SEO."
              title="SEO is essential to inbound marketing."
            />
          }
        />
        <h2>Community First, Then Everything Else</h2>
        <p>
          The <b>road map is up to you</b>. The evolution of Marmalade AI is
          subject to what you have to say about it. That is why we have a
          Marmalade AI{' '}
          <a
            href="https://forum.marmalade.ai/"
            rel="noreferrer"
            target="_blank"
          >
            forum
          </a>{' '}
          and this is Early Access. We think that a core idea is using
          technology (NLP, virtualization) to enable more exact connections more
          easily. How exactly that plays out in creating a platform for
          community is really up to you.
        </p>
        <h2>About the Sign Up Form</h2>
        <p>
          In the sign-up form, we ask freelancers in digital marketing to
          identify their <b>specializations</b>. So please indicate your focus
          in areas such as SEO, WordPress, content, new market development,
          website development, positioning, competitive analysis, collateral,
          influencer marketing, branding, inbound marketing, growth, data
          analytics, ecommerce, paid media and advertising, social media,
          events, and customer journeys.
        </p>
        <h2>Please Tell Use What to Do Next!</h2>
        <p>
          If we missed a digital marketing specialization, please tick
          &quot;other&quot; and let us know. More broadly, we said a little
          about what we think is on the road map: community, co-working,
          control. But that is subject to what we hear from you.{' '}
          <b>Please invite people</b> you are already working with, think you
          could be working with, and explore virtual networking. We are big
          believers in self-organizing communities.
        </p>
        <h2>Sign up to try it!</h2>
        <p>
          As a freelancer in digital marketing, I would like to <b>join</b> the
          free Early Access testing program to use the Marmalade AI peer
          networking platform. I understand that &quot;Early Access&quot; means
          this is a very early pre-release of the application with minimal
          functionality. However:
        </p>
        <div className="ml-10">
          <ul className="list-outside">
            <li>
              I will be <b>introduced</b> to other freelancers, who I would
              probably not meet otherwise.
            </li>
            <li>
              I will be able to forward <b>invitations</b> to others I work with
              (or others I would like to work with).
            </li>
            <li>
              I will <b>participate</b> in an Early Access discussion topic of
              the{' '}
              <a
                href="https://forum.marmalade.ai/"
                rel="noreferrer"
                target="_blank"
              >
                Marmalade AI Forum
              </a>
              , where I will provide feedback regarding this Early Access
              version of the application.
            </li>
          </ul>
        </div>
        Yay, freelancers!
        <p className="mt-8">
          <Link to="/alphaGoogleForm">
            <Button size="lg">Apply for Early Access</Button>
          </Link>
        </p>
      </div>
    </article>
  </Layout>
);

export default DigitalMarketing;
