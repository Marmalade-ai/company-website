import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo';
import SplitSection from '../../components/SplitSection';

const MachineLearning = () => (
  <Layout>
    <SEO
      title="Machine Learning"
      description="Machine Learning community of freelancers."
    />
    <div className="container mx-auto mt-10">
      <h1>Machine Learning</h1>
    </div>
    <article className="py-20 lg:pb-4 lg:pt-4">
      <div className="px-6 mx-auto lg:w-2/3">
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <p className="splitBody">
                Freelancers in machine learning frequently use the Python Pandas
                library to prepare data.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../../images/pandas_screenshot_300.png"
              alt="Freelancers in machine learning frequently use the Python Pandas library to prepare data."
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <p className="splitBody">
                Freelancers in machine learning often create charts of time
                series data.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../../images/stephen-phillips-hostreviews-co-uk-shr_Xn8S8QU-unsplash_300.jpg"
              alt="Freelancers in machine learning often create charts of time series data."
            />
          }
        />
        <p>
          Freelancers in machine learning specialize in areas such as model
          production, data preparation, supervised or unsupervised learning,
          statistics, deep learning, visual recognition, data science, NLP,
          retail customer or product data, AI, and real-time processing of
          streaming events.
        </p>
        <h2>Sign up to try it!</h2>
        <p>
          As a freelancer in machine learning, I would like to join the free
          Early Access testing program to use the Marmalade AI peer networking
          platform. I understand that &quot;Early Access&quot; means this is a
          very early pre-release of the application with minimal functionality.
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
              I will participate in an Early Access discussion topic of the{' '}
              <a target="_blank" href="https://forum.marmalade.ai/">
                Marmalade AI Forum
              </a>
              , where I will provide feedback regarding this Early Access
              version of the application.
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

export default MachineLearning;
