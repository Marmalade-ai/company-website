import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import CustomerCard from '../components/CustomerCard';
import LabelText from '../components/LabelText';
import Layout from '../components/layout/Layout';
import SplitSection from '../components/SplitSection';
import StatsBox from '../components/StatsBox';
import customerData from '../data/customer-data';
import HeroImage from '../svg/HeroImage';
import SvgCharts from '../svg/SvgCharts';

const About = () => (
  <Layout>
    <section id="features" className="py-20 lg:pb-20 lg:pt-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-none">Our Team</h1>
        <p className="text-xl lg:text-2xl mt-6 font-light">It's very big and it's very small!</p>
        <div className="grid grid-cols-2 sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Craig Fisk</p>
              <p className="font-semibold text-lg">CEO</p>
              <p className="mt-4">
                Series A mobile CRM, new software products/channels at Intel. Chicago Booth MBA. San
                Jose, CA.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Jim Tyhurst</p>
              <p className="font-semibold text-lg">CTO</p>
              <p className="mt-4">
                Software architect, Machine Learning / Natural Language Processing (ML/NLP),
                independent consultant. UCLA PhD Linguistics. Portland, OR.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Vivian Tran</p>
              <p className="font-semibold text-lg">Marketing Advisor</p>
              <p className="mt-4">
                New segment marketing, healthcare industry marketing manager. UC Berkeley. Berkeley,
                CA.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Michael Porto</p>
              <p className="font-semibold text-lg">Product Management Advisor</p>
              <p className="mt-4">
                Big data, mobile, ML, Intel, Wells Fargo, Ernst & Young. Princeton MS CS. Charlotte,
                NC.
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

export default About;
