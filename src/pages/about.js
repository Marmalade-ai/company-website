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

const Index = () => (
  <Layout>

    <section id="features" className="py-20 lg:pb-20 lg:pt-12">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl lg:text-5xl xl:text-6xl font-semibold leading-none">
          Our Team
          </h1>
        <p className="text-xl lg:text-2xl mt-6 font-light">
          It's very big and it's very small!
          </p>
        <div className="grid grid-cols-2 sm:flex-row sm:-mx-3 mt-12">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Craig Fisk</p>
              <p className="mt-4">
                There’s a founding team of four, all remote. As for me: University of Chicago Booth MBA, Intel software product line manager, co-founder/CEO of Series A venture mobile CRM company. That was then, this is now. Networking is broken. We’re starting with virtual peer networking among freelancers. We’re writing the front end in Vue.js and the back end in Google Cloud Functions with NLP and Firestore. The future is software driven by users.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Jim Tyhurst</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Michael Porto</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
              </p>
            </Card>
          </div>
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <p className="font-semibold text-xl">Vivian Tran</p>
              <p className="mt-4">
                An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio
                velna vitae auctor integer.
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
