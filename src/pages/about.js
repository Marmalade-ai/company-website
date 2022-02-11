import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title="About Us" description="About Us and Our Mission" />
    <div className="container mx-auto mt-10">
      <h1>About Us</h1>
    </div>
    <section id="founders" className="pt-4">
      <div className="container mx-auto">
        <h2>Founders</h2>
        <div className="container">
          <p>
            We live in interesting times and innovation is key to the future.
          </p>
          <p>
            It&apos;s great to be developing something where the people using it
            and the people developing it can be one and the same. We came
            together through user research into the problems people have with
            networking and each of us decided it was possible to contribute to
            making it better.
          </p>
        </div>
        <div className="pt-8 grid grid-cols-1 flex-col -mx-3 md:grid-cols-2">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <StaticImage
                className="mb-8 w-32 h-32 rounded-lg shadow-lg"
                src="../images/craig_fisk_headshot.jpg"
                alt="Photo of Craig Fisk."
                title="Craig Fisk, CEO"
              />
              <h3 className="mt-0">Craig Fisk</h3>
              <p className="cardSubHeading">CEO</p>
              <p>
                Series A mobile CRM, new software products/channels at Intel.
              </p>
              <p>Chicago Booth MBA.</p>
              <p>San Jose, CA.</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <StaticImage
                className="mb-8 w-32 h-32 rounded-lg shadow-lg	"
                src="../images/jim_tyhurst_headshot.jpg"
                alt="Photo of Jim Tyhurst."
                title="Jim Tyhurst, CTO"
              />
              <h3 className="mt-0">Jim Tyhurst</h3>
              <p className="cardSubHeading">CTO</p>
              <p>
                Software architect, Machine Learning / Natural Language
                Processing (ML/NLP), independent consultant.
              </p>
              <p>UCLA PhD.</p>
              <p>Portland, OR.</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <StaticImage
                className="mb-8 w-32 h-32 rounded-lg shadow-lg	"
                src="../images/vivian_tran_headshot.jpg"
                alt="Photo of Vivian Tran."
                title="Vivian Tran, Marketing Advisor"
              />
              <h3 className="mt-0">Vivian Tran</h3>
              <p className="cardSubHeading">Marketing Advisor</p>
              <p>
                New segment marketing, healthcare industry marketing manager.
              </p>
              <p>UC Berkeley.</p>
              <p>Berkeley, CA.</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <StaticImage
                className="mb-8 w-32 h-32 rounded-lg shadow-lg	"
                src="../images/michael_porto_headshot.jpg"
                alt="Photo of Michael Porto."
                title="Michael Porto, Product Management Advisor"
              />
              <h3 className="mt-0">Michael Porto</h3>
              <p className="cardSubHeading">Product Management Advisor</p>
              <p>Big data, mobile, ML, Intel, Wells Fargo, EY.</p>
              <p>Princeton MS CS.</p>
              <p>Charlotte, NC.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
    <section id="mission" className="pt-8">
      <div className="container mx-auto">
        <h2>What&apos;s in it for you?</h2>
        <div className="grid sm:flex-row sm:-mx-3 mt-0">
          <div className="flex-1 px-3 pt-4">
            <ul>
              <li className="pt-2">
                <b>Reduce bias</b> and make it easy to build out a network that
                is right for you. Marmalade AI creates a <b>virtual network</b>
                with people you might not otherwise meet.
              </li>
              <li className="pt-2">
                <b>Accurate relationships</b> make a <b>virtual network</b>{' '}
                useful, rather than just accumulating a list of contacts or
                hoping for serendipity.
              </li>
              <li className="pt-2">
                <b>Collaborate!</b> You can find specializations and skills to{' '}
                <b>match</b> or <b>complement</b> you. You can create small
                working groups.
              </li>
              <li className="pt-2">
                <b>Mentor</b> and <b>be mentored</b>, so people with{' '}
                <b>more experience</b> and those with <b>less experience</b> in
                an area can both <b>grow</b> and <b>contribute</b>.
              </li>
              <li className="pt-2">
                <b>Be environmentally progressive</b>! In particular, make it
                easier to work remotely and to{' '}
                <b>reduce your ecological footprint</b>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="logoInfo" className="pt-8">
      <div className="container mx-auto">
        <h2>What&apos;s with the logo and name?</h2>
        <div className="grid sm:flex-row sm:-mx-3 mt-0">
          <div className="flex-1 px-3 pt-4">
            <p className="pt-2">
              Our <b>"splat" logo</b> (
              <StaticImage
                className="w-6 h-6"
                src="../images/marmalade-logo-tiny.png"
                alt="The Marmalade AI Logo."
                title="Marmalade AI, Inc."
              />
              ) suggests quickness and informality (thanks, über-designer{' '}
              <a
                href="https://www.linkedin.com/in/jujube/"
                rel="noreferrer"
                target="_blank"
              >
                Jujube Li
              </a>
              ). &quot;<b>Marmalade AI</b>&quot; combines stickiness and
              Artificial Intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
