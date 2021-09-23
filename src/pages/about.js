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
    <section id="mission" className="pt-4">
      <div className="container mx-auto lg:w-2/3">
        <h2 className="aboutSubHeading">Mission</h2>
        <div className="grid sm:flex-row sm:-mx-3 mt-0">
          <div className="flex-1 px-3">
            <h3>Make freelancing easier</h3>
            <ul>
              <li>Provide a place for freelancers to connect with peers.</li>
              <li>
                Help freelancers stay up-to-date with the latest technologies
                and techniques in fields closely related to their area of
                expertise.
              </li>
              <li>
                Remove bias and make it easier for younger, multicultural
                freelancers to build out their working network. Marmalade AI
                provides professional matches to people you might not otherwise
                meet. e.g. we are removing bias from the networking process.
              </li>
            </ul>
            <h3>Improve networking skills</h3>
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
            <h3>Encourage collaboration</h3>
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
                Enable freelancers to collaborate with others to share projects.
              </li>
              <li>
                Provide a straightforward, easy framework for mentoring, for
                those interested in participating as part of their professional
                networking.
              </li>
            </ul>
            <h3>Ecological Footprint</h3>
            <li>
              Be environmentally progressive. In particular, make it easier to
              work remotely and to reduce our ecological footprint.
            </li>
          </div>
        </div>
      </div>
    </section>
    <section id="founders" className="pt-8">
      <div className="container mx-auto">
        <h2 className="aboutSubHeading">Founders</h2>
        <div className="pt-4 grid grid-cols-1 flex-col -mx-3 md:grid-cols-2">
          <div className="flex-1 px-3">
            <Card className="mb-8">
              <StaticImage
                className="mb-8 w-32 h-32 rounded-lg shadow-lg"
                src="../images/craig_fisk_headshot.jpg"
                alt="Photo of Craig Fisk."
                title="Craig Fisk, CEO"
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
                className="mb-8 w-32 h-32 rounded-lg shadow-lg	"
                src="../images/jim_tyhurst_headshot.jpg"
                alt="Photo of Jim Tyhurst."
                title="Jim Tyhurst, CTO"
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
                className="mb-8 w-32 h-32 rounded-lg shadow-lg	"
                src="../images/vivian_tran_headshot.jpg"
                alt="Photo of Vivian Tran."
                title="Vivian Tran, Marketing Advisor"
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
                className="mb-8 w-32 h-32 rounded-lg shadow-lg	"
                src="../images/michael_porto_headshot.jpg"
                alt="Photo of Michael Porto."
                title="Michael Porto, Product Management Advisor"
              />
              <p className="cardHeading">Michael Porto</p>
              <p className="cardSubHeading">Product Management Advisor</p>
              <p>Big data, mobile, ML, Intel, Wells Fargo, EY.</p>
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
