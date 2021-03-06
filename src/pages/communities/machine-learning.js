import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo';
import SplitSection from '../../components/SplitSection';

const MachineLearning = () => (
  <Layout>
    <SEO title="Machine Learning" description="Machine Learning community." />
    <div className="px-10 mx-auto mt-10">
      <h1>
        <div className="flex items-center">
          <div>
            {/* <StaticImage
              className="rounded-lg shadow-lg"
              src="../../images/machinelearning_minerals_64.png"
              alt="Marmalade AI machine learning community."
              title="Marmalade AI machine learning community."
            /> */}
          </div>
          <div>&nbsp;</div>
          <div>Machine Learning</div>
        </div>
      </h1>
    </div>
    <article className="pt-5">
      <div className="px-10 mx-auto">
        <h2>Sign up to try it!</h2>
        <p>
          As a software person in machine learning, I would like to <b>join</b>{' '}
          the free Early Access testing program to use Marmalade AI networking.
          I understand that &quot;Early Access&quot; means this is a very early
          pre-release of the application with minimal functionality:
        </p>
        <div className="ml-10">
          <ul className="list-outside">
            <li>
              I will be <b>introduced</b> to other freelancers, who I would
              probably not meet otherwise.
            </li>
            <li>
              I can send <b>invitations</b> to others I work with or would like
              to work with.
            </li>
            <li>
              I can <b>participate</b> in an Early Access discussion topic of
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
        Yay, machine learning!
        <p className="mt-8">
          <Link to="/alphaGoogleForm">
            <Button size="lg">Apply for Early Access</Button>
          </Link>
        </p>
        <div className="pt-10" />
        <h2>How Can I Have a Better Network in Machine Learning?</h2>
        <p>
          If you found us through a <b>search query</b>, was that like the one
          you used? Did you get mostly <i>irrelevant</i> results?
        </p>
        <p>
          We are excited that you found us anyway! We want you to be able to use
          Marmalade AI to answer that very <b>question</b>: &quot;How can you
          help me network in machine learning?&quot;
        </p>
        <h2>Virtual Network</h2>
        <p>
          The <b>short answer</b> is: sign up and use the virtual network that
          is created automatically from your profile, which you can copy and
          paste from elsewhere, or write from scratch.
        </p>
        <p>
          The <b>long answer</b> is: use Marmalade AI to have a network where
          you can raise the level of your work. We are in the era of
          virtualization to provide more effective environments -- think of
          Docker images and Kubernetes orchestration -- so why not a{' '}
          <i>virtual network</i> for freelancers?
        </p>
        <p>
          Your <b>virtual network</b> reflects your profile. It is specific to
          you. It changes when you change your profile.
        </p>
        <p>
          This means you can use your virtual network to find someone to{' '}
          <b>help</b> on part of a project where you realize you lack the
          expertise. Or you can help someone by providing the expertise they are
          lacking. For example, maybe I am not up on the latest in NLP projects
          like spaCy or Hugging Face, but has turned out to be relevant to a
          project.
        </p>
        <p>
          A lot of projects have <b>scope</b> in which I can do what I am good
          at, but one-tenth of the scope might be in a less familiar area that
          threaten to overwhelm the project. The goal of Marmalade AI is to be a
          platform where your virtual network enables you to focus on what you
          are good at.
        </p>
        <p>
          Also, you need to be up-to-date. Suppose you could pop up a virtual
          room this afternoon to discuss the latest in GPT-3 or BERT, and send
          notifications about it just to people who have indicated an interest
          or expertise in that topic.
        </p>
        <p>
          Like Quora, Reddit, Slack, Clubhouse, etc., but <b>more exact</b> and
          close to real time. That is the vision for the communications side of
          this platform.
        </p>
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="pl-8">
              <p className="splitBody font-semibold">
                Machine learning developers are generally familiar with the
                Pandas library for data preparation.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../../images/pandas_screenshot_300.png"
              alt="Screenshot of a Python script using Pandas to create a dataframe."
              title="A Python script to load data into a Pandas dataframe."
            />
          }
        />
        <div className="pt-10" />
        <h2>Community First, Then Everything Else</h2>
        <p>
          &quot;Self-organizing&quot; : the evolution of Marmalade AI is really
          subject to what you have to say about it. That is why we have a
          Marmalade AI{' '}
          <a
            href="https://forum.marmalade.ai/"
            rel="noreferrer"
            target="_blank"
          >
            forum
          </a>{' '}
          and this is Early Access.
        </p>
        <p>
          A core idea is using machine learning itself to enable more{' '}
          <b>exact connections</b> more easily. How that plays out will be
          determined by your feeback.
        </p>
        <SplitSection
          primarySlot={
            <div className="pr-8">
              <p className="splitBody font-semibold">
                Machine learning developers often create charts of time series
                data.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../../images/stephen-phillips-hostreviews-co-uk-shr_Xn8S8QU-unsplash_300.jpg"
              alt="A chart of time series data."
              title="A chart of time series data."
            />
          }
        />
        <div className="pt-10" />
        <h2>We Are Open To Input From The Community!</h2>
        <p>
          We said a little about what we think is on the road map: community,
          co-working, control. <b>Please invite people</b> you work with or
          would like to work with, and explore virtual networking. This is a
          self-organizing communities.
        </p>
        <div className="pt-10" />
        <h2>Sign up to try it!</h2>
        <p>
          As a machine learning developer, I would like to <b>join</b> the free
          Early Access program to use the Marmalade AI networking. I understand
          that &quot;Early Access&quot; means this is a very early pre-release
          of the application with minimal functionality:
        </p>
        <div className="ml-10">
          <ul className="list-outside">
            <li>
              I will be <b>introduced</b> to other developers, many of whom I
              probably would not meet otherwise.
            </li>
            <li>
              I can forward <b>invitations</b> to people I work with or would
              like to work with.
            </li>
            <li>
              I can <b>participate</b> in an Early Access discussion topic of
              the{' '}
              <a
                href="https://forum.marmalade.ai/"
                rel="noreferrer"
                target="_blank"
              >
                Marmalade AI Forum
              </a>
              , where I can provide feedback regarding this Early Access version
              of the application.
            </li>
          </ul>
        </div>
        Yay, machine learning!
        <p className="mt-8">
          <Link to="/alphaGoogleForm">
            <Button size="lg">Apply for Early Access</Button>
          </Link>
        </p>
      </div>
    </article>
  </Layout>
);

export default MachineLearning;
