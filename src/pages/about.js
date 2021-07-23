import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout/Layout';
import Card from '../components/Card';
import SEO from '../components/seo';

const About = () => (
  <Layout>
    <SEO title="About Us" description="About Us and Our Mission" />
    <section id="mission" className="lg:pb-10 lg:pt-10">
      <div className="container mx-auto">
        <h2 className="aboutSubHeading lg:text-5xl xl:text-6xl">Our Mission</h2>
        <div className="grid sm:flex-row sm:-mx-3 mt-6">
          <div className="flex-1 px-3">
            <h3 className="cardHeading">Make freelancing easier</h3>
            <ul>
              <li>Provide a place for freelancers to connect with peers.</li>
              <li>
                Help freelancers stay up-to-date with the latest technologies
                and techniques in fields closely related to their area of
                expertise.
              </li>
            </ul>
            <h3 className="cardHeading">Improve networking skills</h3>
            <ul>
              <li>Help freelancers to network more frequently.</li>
              <li>
                Make it easier to build stronger relationships, rather than
                accumulating a list of contacts.
              </li>
              <li>
                Provide resources for freelancers to improve their networking
                skills.
              </li>
            </ul>
            <h3 className="cardHeading">Encourage collaboration</h3>
            <ul>
              <li>
                Provide a place to find people with skills that complement your
                own.
              </li>
              <li>
                Foster small working groups, relieving the isolation of solo
                work without needing to join a company.
              </li>
              <li>
                Enable freelancers to collaborate with others to share gigs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="founders" className="lg:pb-10 lg:pt-10">
      <div className="container mx-auto text-center">
        <h2 className="aboutSubHeading lg:text-5xl xl:text-6xl">
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
                className="mb-8 rounded-lg shadow-lg	"
                src="../images/jim_tyhurst_headshot.jpg"
                alt="Photo of Jim Tyhurst."
              />
              <h3 className="cardHeading">Jim Tyhurst</h3>
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
                className="mb-8 rounded-lg shadow-lg	"
                src="../images/vivian_tran_headshot.jpg"
                alt="Photo of Vivian Tran."
              />
              <p className="cardHeading">Vivian Tran</p>
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
                className="mb-8 rounded-lg shadow-lg	"
                src="../images/michael_porto_headshot.jpg"
                alt="Photo of Michael Porto."
              />
              <p className="cardHeading">Michael Porto</p>
              <p className="cardSubHeading">Product Management Advisor</p>
              <p>Big data, mobile, ML, Intel, Wells Fargo, Ernst & Young.</p>
              <p>Princeton MS CS.</p>
              <p>Charlotte, NC.</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
