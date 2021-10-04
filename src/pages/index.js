import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import HeroImage from '../svg/HeroImage';
import SEO from '../components/seo';

const Index = () => (
  <Layout>
    <SEO
      title="Marmalade AI Home"
      description="Marmalade AI is making freelancer networking easier"
    />
    <section className="pt-10">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-2/3">
          <h1 className="md:text-left text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Making freelancer networking easier.
          </h1>
          <p className="mt-6 text-xl lg:text-2xl font-light">
            How freelancers connect with peers to share projects and stay
            up-to-date.
          </p>
          <p className="mt-8 md:mt-12">
            <Link to="/alphaGoogleForm">
              <Button size="lg">Apply for Early Access</Button>
            </Link>
          </p>
        </div>
        <div className="lg:w-1/3">
          <HeroImage />
        </div>
      </div>
    </section>
    <div className="pt-5">
      <hr />
    </div>
    <section id="features" className="pt-10">
      <div className="container mx-auto text-center">
        <h2>Why Choose Marmalade?</h2>
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="splitHeading">1. Accurate Networking</h3>
              <p className="splitBody">
                Have access to a network that is actually relevant to your
                freelancing work.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../images/iStockphoto-1220226086-400.jpg"
              alt="Marmalade AI provides accurate networking of people so they can collaborate."
              title="Marmalade AI gives you access to a network that accurately reflects you."
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="splitHeading">2. Automatic Networking</h3>
              <p className="splitBody">
                You provide your profile and description. We match you with
                people automatically. It&apos;s that easy.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../images/matching.jpg"
              alt="Marmalade AI networking happens automatically based on your profile, like a gameboard with pieces matched up."
              title="Marmalade AI automatically matches you with people with whom you should network."
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="splitHeading">3. Appropriate Networking</h3>
              <p className="splitBody">
                Marmalade AI networking reflects the fact that freelancers may
                be younger, multicultural, and want to work outside of a
                corporate environment.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../images/chatting.jpg"
              alt="A person chatting through a phone app."
              title="Marmalade AI provides culturally appropriate networking."
            />
          }
        />
      </div>
    </section>
    <div className="pt-5">
      <hr />
    </div>
    <section id="benefits" className="pt-10">
      <div className="container mx-auto text-center">
        <h2>Get Started with Marmalade AI</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="mt-0">Learn Something New</h3>
              <p className="cardBody">
                Keep up with the latest tools, techniques, and technologies by
                way of other freelancers.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="mt-0">Collaborate</h3>
              <p className="cardBody">
                Find freelancers with whom you would like to collaborate on paid
                projects, for side projects, or just to stay current.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="mt-0">Sharpen your Specialization</h3>
              <p className="cardBody">
                Out of a larger network of accurate matches, you may form a
                small group with deeper relationships.
              </p>
            </Card>
          </div>
        </div>
        <p className="mt-8">
          <Link to="/alphaGoogleForm">
            <Button size="lg">Apply for Early Access</Button>
          </Link>
        </p>
      </div>
    </section>
  </Layout>
);

export default Index;
