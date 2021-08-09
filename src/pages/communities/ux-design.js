import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo';
import SplitSection from '../../components/SplitSection';

const UXDesign = () => (
  <Layout>
    <SEO title="UX Design" description="UX Design community of freelancers." />
    <div className="container mx-auto mt-10">
      <h1>UX Design</h1>
    </div>
    <article className="py-20 lg:pb-4 lg:pt-4">
      <div className="px-6 mx-auto lg:w-2/3">
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <p className="splitBody">
                UX design immerses the user in the experience.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../../images/christina-wocintechchat-com-J7EDyqUwXJI-unsplash_300.jpg"
              alt="UX design immerses the user in the experience."
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <p className="splitBody">
                UX design enables interaction on a touchscreen.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../../images/taras-shypka-iFSvn82XfGo-unsplash_300.jpg"
              alt="UX design enables interaction on a touchscreen."
            />
          }
        />
        <p>
          Freelancers in UX design specialize in areas such as graphic design,
          mobile, healthcare, industrial, UX research, CX, creative design,
          wireframing, conversational design, prototyping, customer journeys,
          and A/B testing.
        </p>
        <h2>Sign up to try it!</h2>
        <p>
          As a freelancer in UX design, I would like to join the free Alpha
          testing program to use the Marmalade AI peer networking platform. I
          understand that &quot;Alpha&quot; means this is a very early
          pre-release of the application with minimal functionality. However:
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
              <a href="https://forum.marmalade.ai/t/marmalade-ai-early-access-users-lounge/">
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

export default UXDesign;
