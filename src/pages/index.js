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
    <SEO title="Home" description="What is Marmalade AI?" />
    <section className="pt-20 md:pt-40">
      <div className="container mx-auto px-8 lg:flex">
        <div className="text-center lg:text-left lg:w-2/3">
          <h1 className="text-4xl lg:text-left lg:text-5xl xl:text-6xl font-bold leading-none">
            Making freelancer networking easier.
          </h1>
          <p className="text-xl lg:text-2xl mt-6 font-light">
            How freelancers connect with peers to share gigs and stay
            up-to-date.
          </p>
          <p className="mt-8 md:mt-12">
            <Link to="/form">
              <Button size="lg">Get Started</Button>
            </Link>
          </p>
        </div>
        <div className="lg:w-1/3">
          <HeroImage />
        </div>
      </div>
    </section>
    <section id="features" className="py-20 lg:pb-20 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="homeSubHeading">Why Choose Marmalade?</h2>
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="splitHeading">Improved Networking</h3>
              <p className="splitBody">
                Meet new people more frequently and more efficiently.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../images/networking.jpg"
              alt="Networking"
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <h3 className="splitHeading">Automated Matching</h3>
              <p className="splitBody">
                You provide your profile and networking goals. We suggest people
                that you should meet. It&apos;s that easy.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../images/matching.jpg"
              alt="Matching"
            />
          }
        />
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <h3 className="splitHeading">Serendipity Chats</h3>
              <p className="splitBody">
                Indicate that you are available and we will match you with
                someone else who is also ready to network.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../images/chatting.jpg"
              alt="Chatting"
            />
          }
        />
      </div>
    </section>
    <section id="benefits" className="py-20 lg:pb-20 lg:pt-24">
      <div className="container mx-auto text-center">
        <h2 className="homeSubHeading">Get Started with Marmalade AI</h2>
        <div className="flex flex-col sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="cardHeading">Learn Something New</h3>
              <p className="cardBody">
                Keep up with the latest tools, techniques, and technologies by
                meeting regularly with your peers.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="cardHeading">Collaborate</h3>
              <p className="cardBody">
                Find peers with whom you would like to collaborate, either for
                paid projects or side projects.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <h3 className="cardHeading">Find a Gig</h3>
              <p className="cardBody">
                Meet peers regularly to create deeper relationships, so that you
                know who to call on when you need help.
              </p>
            </Card>
          </div>
        </div>
        <p className="mt-8">
          <Button size="xl">Get Started for Free</Button>
        </p>
      </div>
    </section>
  </Layout>
);

export default Index;
