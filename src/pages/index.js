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
      description="Marmalade AI is making virtual networking easier"
    />
    <section className="pt-10">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-2/3">
          <h1 className="md:text-left text-4xl lg:text-5xl xl:text-6xl font-bold leading-none">
            Virtual networking
          </h1>
          <p className="mt-6 text-xl lg:text-2xl font-light">
            Accurate, automatic, and appropriate.
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
        <h2>Why &quot;virtual networking&quot;?</h2>
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="splitHeading">1. Accurate</h3>
              <p className="splitBody">
                A network that is relevant to you.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../images/iStockphoto-1220226086-400.jpg"
              alt="Marmalade AI provides accurate networking of people so they can collaborate."
              title="Marmalade AI gives you a network that reflects you."
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="splitHeading">2. Automatic</h3>
              <p className="splitBody">
                Provide your profile, you automatically get a virtual network.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../images/matching.jpg"
              alt="Marmalade AI networking is based on your profile. Want to change your network? Change your profile."
              title="Marmalade AI automatically matches you with people."
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="splitHeading">3. Appropriate</h3>
              <p className="splitBody">
                Escape conventional networking.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../images/chatting.jpg"
              alt="A person chatting through a phone app."
              title="Marmalade AI enables appropriate networking."
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
        <h2>Get Started with &quot;virtual networking&quot; with Marmalade AI</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="mt-0">Learn What&apos;s New</h3>
              <p className="cardBody">
                Keep up with the latest tools, techniques, and technologies by
                way of people in your virtual network.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="mt-0">Collaborate</h3>
              <p className="cardBody">
                In your virtual network, you will find people with whom you
                would like to collaborate, or just chat and stay current.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="mt-0">Specialize</h3>
              <p className="cardBody">
                Out of a large virtual network of accurate matches, you may form
                a small group with deeper relationships.
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
