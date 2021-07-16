import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => (
  <Layout>
    <section id="features" className="py-10 lg:pb-10 lg:pt-10">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-none text-center">
          Our Mission
        </h2>
        <div className="grid sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <h3 className="mt-4 font-semibold text-xl">Make freelancing easier</h3>
            <ul>
              <li>Help freelancers stay up-to-date with the latest technologies and techniques.</li>
              <li>Provide a place for freelancers to connect with peers.</li>
            </ul>
            <h3 className="mt-4 font-semibold text-xl">Encourage collaboration</h3>
            <ul>
              <li>Provide a place to find people with skills that complement your own.</li>
              <li>Enable freelancers to collaborate with others to share gigs.</li>
            </ul>
            <h3 className="mt-4 font-semibold text-xl">Improve networking skills</h3>
            <ul>
              <li>Provide resources for freelancers to improve their networking skills.</li>
              <li>
                Make it easier to build real relationships, rather than accumulating a list of
                contacts.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="features" className="py-10 lg:pb-10 lg:pt-10">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-none">
          Our Founders
        </h2>
        <div className="grid grid-cols-2 sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <StaticImage
                className="mb-8 rounded-lg shadow-lg	"
                src="../images/craig_fisk_headshot.jpg"
                alt="Photo of Craig Fisk."
              />
              <h3 className="cardHeading">Craig Fisk</h3>
              <p className="cardSubHeading">CEO</p>
              <p>Series A mobile CRM, new software products/channels at Intel.</p>
              <p>Chicago Booth MBA.</p>
              <p>San Jose, CA.</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <StaticImage
                className="mb-8 rounded-lg shadow-lg	"
                src="../images/jim_tyhurst_headshot.jpg"
                alt="Photo of Jim Tyhurst."
              />
              <h3 className="cardHeading">Jim Tyhurst</h3>
              <p className="cardSubHeading">CTO</p>
              <p>
                Software architect, Machine Learning / Natural Language Processing (ML/NLP),
                independent consultant.
              </p>
              <p>UCLA PhD Linguistics.</p>
              <p>Portland, OR.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
