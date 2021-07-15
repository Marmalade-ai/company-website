import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import Layout from '../components/layout/Layout';
import { StaticImage } from 'gatsby-plugin-image';

const About = () => (
  <Layout>
    <section id="features" className="py-20 lg:pb-20 lg:pt-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-none">Founders</h1>
        <div className="grid grid-cols-2 sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <StaticImage
                className="rounded-lg shadow-lg	"
                src="../images/craig_fisk_headshot.jpg"
                alt="Photo of Craig Fisk."
              />
              <p className="mt-4 font-semibold text-xl">Craig Fisk</p>
              <p className="font-semibold text-lg">CEO</p>
              <p className="mt-4">Series A mobile CRM, new software products/channels at Intel.</p>
              <p>Chicago Booth MBA.</p>
              <p>San Jose, CA.</p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <StaticImage
                className="rounded-lg shadow-lg	"
                src="../images/jim_tyhurst_headshot.jpg"
                alt="Photo of Jim Tyhurst."
              />
              <p className="mt-4 font-semibold text-xl">Jim Tyhurst</p>
              <p className="font-semibold text-lg">CTO</p>
              <p className="mt-4">
                Software architect, Machine Learning / Natural Language Processing (ML/NLP),
                independent consultant.
              </p>
              <p>UCLA PhD Linguistics.</p>
              <p>Portland, OR.</p>
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

export default About;
