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
        <h2 className="aboutSubHeading">Founders</h2>
        <div className="container md:max-w-xl">
          <p>
            It is an understatement to say we live in interesting times.
            Collective spirit and innovation are key to the future. We came
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
    <section id="mission" className="pt-8">
      <div className="container mx-auto">
        <h2 className="aboutSubHeading">What&apos;s in it for you?</h2>
        <div className="grid sm:flex-row sm:-mx-3 mt-0">
          <div className="flex-1 px-3 pt-4 md:max-w-xl">
            <ul>
              <li className="pt-2">
                For everyone, but especially for younger, multicultural
                freelancers, we want to <b>remove bias</b> and make it easier to
                build out a useful network. Marmalade AI{' '}
                <b>matches you to people you might not otherwise meet</b>.
              </li>
              <li className="pt-2">
                We want to make it easier to <b>build stronger relationships</b>
                , rather than just accumulating a list of contacts or providing
                networking as entertainment.
              </li>
              <li className="pt-2">
                We want to <b>encourage collaboration</b>,{' '}
                <b>finding skills that match</b> or <b>complement your own</b>,
                and <b>fostering small working groups</b> that relieve the
                isolation of solo work without needing to join a company.
              </li>
              <li className="pt-2">
                We want to provide a place for <b>mentoring</b>, where those
                with <b>more experience</b> and those with{' '}
                <b>less experience</b> can <b>both grow</b> in their
                professional life.
              </li>
              <li className="pt-2">
                Let&apos;s be environmentally progressive! In particular, make
                it easier to work remotely and to{' '}
                <b>reduce our ecological footprint</b>.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <section id="logoInfo" className="pt-8">
      <div className="container mx-auto">
        <h2 className="aboutSubHeading">What&apos;s with the logo and name?</h2>
        <div className="grid sm:flex-row sm:-mx-3 mt-0">
          <div className="flex-1 px-3 pt-4 md:max-w-xl">
            <p className="pt-2">
              The <b>splat logo</b> (
              <StaticImage
                className="w-6 h-6"
                src="../images/marmalade-logo-tiny.png"
                alt="The Marmalade AI Logo."
                title="Marmalade AI, Inc."
              />
              ) suggests quickness and informality (thanks,{' '}
              <a
                href="https://www.linkedin.com/in/jujube/"
                rel="noreferrer"
                target="_blank"
              >
                Jujube Li
              </a>
              ), while &quot;<b>Marmalade AI</b>&quot; combines the stickiness
              of marmalade preserves with harnessing the power of Artificial
              Intelligence.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
