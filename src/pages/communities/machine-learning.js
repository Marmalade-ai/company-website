import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo';
import SplitSection from '../../components/SplitSection';

const MachineLearning = () => (
  <Layout>
    <SEO
      title="Machine Learning"
      description="Machine Learning community of freelancers."
    />
    <div className="container mx-auto mt-10">
      <h1>
        <StaticImage
          className="rounded-lg shadow-lg rounded-lg-vertical-align"
          src="../../images/machinelearning_minerals_64.png"
          alt="Marmalade AI machine learning community."
          title="Marmalade AI machine learning community."
        />{' '}
        Machine Learning
      </h1>
    </div>
    <article className="py-20 lg:pb-4 lg:pt-4">
      <div className="px-6 mx-auto lg:w-2/3">
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <p className="splitBody">
                Freelancers in machine learning are generally familiar with the
                Python Pandas library for data preparation.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../../images/pandas_screenshot_300.png"
              alt="Screenshot of a Python script using Pandas to create a dataframe."
              title="A Python script to load data into a Pandas dataframe."
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <p className="splitBody">
                Freelancers in machine learning often create charts of time
                series data.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../../images/stephen-phillips-hostreviews-co-uk-shr_Xn8S8QU-unsplash_300.jpg"
              alt="A chart of time series data."
              title="A chart of time series data."
            />
          }
        />
        <h2>How Can I Do Better as a Freelancer in Machine Learning?</h2>
        <p>
          &quot;How can you help me do <b>better</b> as a freelancer in machine
          learning?&quot;
        </p>
        <p>
          If you found us through a <b>search query</b>, was that like the one
          you used? Did you get mostly <i>irrelevant</i> results? Results that
          assumed you were looking for solo work, commoditized your skills, and
          removed differentiation?
        </p>
        <p>
          We are excited that you found us anyway! We want you to be able to use
          Marmalade AI to answer that very <b>question</b>: &quot;How can you
          help me do better as a freelancer in machine learning?&quot;
        </p>
        <h2>Virtual Network</h2>
        <p>
          The <b>short answer</b> is: sign up and use the virtual network that
          automatically is created by applying NLP to your profile, which you
          can copy and paste from elsewhere, or write from scratch.
        </p>
        <p>
          The <b>long answer</b> is: use Marmalade AI to have a network where
          you can raise the level of your work. We are in the era of
          virtualization to provide more effective environments -- think of
          Docker images and Kubernetes orchestration -- so why not a{' '}
          <i>virtual network</i> for freelancers? It is the same idea.
        </p>
        <p>
          Your <b>virtual network</b> reflects your profile. It is specific to
          you. Your virtual network changes when you change your profile
          (caveat: it changes the next time our engine runs, which is not in
          real time currently).
        </p>
        <p>
          This means you can use your virtual network to find someone to{' '}
          <b>help</b> on part of a project where you realize you lack the
          expertise. Or you can help someone by providing the expertise they are
          lacking. Maybe I am not familiar with the latest in spaCy, or Hugging
          Face, but that now has become relevant to a project.
        </p>
        <p>
          A lot of projects have <b>scope</b> in which I can do what I am good
          at, but one-tenth of the scope might be in a less familiar area that
          will expand the project time. This is just reality. The goal of
          Marmalade AI is to be a platform where your virtual network enables
          you to focus on what you are good at.
        </p>
        <p>
          That is all <b>transactional</b>, <b>and</b> there are also
          partnerships for <b>learning</b>. You need to be up-to-date in
          peripheral expertise. Maybe you can pop up a virtual room at 3:00pm
          (Pacific) today to discuss the latest in GPT-3 or BERT, and send
          notifications about it just to people who have indicated an interest
          in that topic.
        </p>
        <p>
          Like Quora, Reddit, Slack, Clubhouse, etc., but <b>more exact</b> and
          close to real time. That is the vision for the communications side of
          this platform, so please let us know what you need.
        </p>
        <h2>Evolution</h2>
        <p>
          We started from a lot of &quot;<b>user research</b>.&quot; We learned
          many things. Many interesting details. For example: Twice-weekly
          ping-pong meetups attended predominantly by machine learning software
          engineers and investment bankers are way more efficient than monthly
          Meetup.com events for networking. Or, in the case of Japanese-English
          simultaneous interpreting gigs in the financial markets in New York
          and Tokyo, &quot;freelancers&quot; have 10 agency business cards.
          Agencies do all the work of talking to clients and figuring out who is
          available when for what? Many, many similar details. The details are
          the important part. You have to enable the details to get it to work.
        </p>
        <p>
          Yet, pretty much everybody said they had the{' '}
          <b>same big problems with networking</b>: one-on-ones seem less
          accurate than they could be (mitigated somewhat by serendipity!).
          Everybody feels like they are the worst person on the planet at
          keeping their network up-to-date (you cannot spend <i>all</i> of your
          time networking!). And everyone feels like they already have the
          biggest network they can handle.
        </p>
        <p>
          So we start with <b>virtual matching</b> (using simple matching in the{' '}
          <i>alpha</i>, aka &quot;Early Access&quot;) that will evolve into
          using NLP to facilitate freelancer communities as the networks get
          larger.
        </p>
        <h2>Community First, Then Everything Else</h2>
        <p>
          The <b>road map is subject to your guidance</b>.
          &quot;Self-organizing&quot; : the evolution of Marmalade AI is really
          subject to what you have to say about it. That is why we have a
          Marmalade AI{' '}
          <a
            href="https://forum.marmalade.ai/"
            rel="noreferrer"
            target="_blank"
          >
            forum
          </a>{' '}
          and this is Early Access.
        </p>
        <p>
          We think a core idea is using technology (NLP, virtualization) to
          enable more <b>exact connections</b> more easily. How that plays out
          is TBD by your feeback.
        </p>
        <h2>Behind the Scenes</h2>
        <p>
          Marmalade AI is going to use <b>NLP</b> in <b>R</b> with MLOps on{' '}
          <b>Google Cloud</b> connected with phones, tablets, laptops, desktops
          through a <b>Vue.js</b> (more modern React.js) front end as clients.
          We wrote Python code using XPath to look at thousands of freelancer
          profiles to experiment with <b>models</b>.
        </p>
        <p>
          We hope you will <b>tell us</b> where we are wrong and need to change
          our thinking. For example, initially we thought evaluation of meetings
          after the fact would be important. Then we realized that would be a
          waste of time, because the tech freelancer&apos;s profiles should be{' '}
          <b>like a TV &quot;remote control&quot;</b> here -- change the wording
          in your profile to change your virtual network. We also decided not to
          use work history and education history, even though we had those,
          because tech freelancers already express their focus in their
          profiles.
        </p>
        <p>
          We have many, many questions you can help with, and we reserve the
          right to be wrong and change our thinking. For example, will you be
          open to <b>communication with people you do not know?</b> We think if
          the context is vague, the answer is no. But if the context is
          relevant, the answer is yes. Or, we think this eventually should be a{' '}
          <b>subscription</b> service free of ads, with <b>pay-for-use</b> for
          communications. The idea is monetizing based on creating actual value.
        </p>
        <p>
          Marmalade AI is not going to try to deliver a BERT or GPT-3 equivalent
          for NLP in networking. Why not? Mainly because we think any level of
          matching that is <b>more exact</b> than what happens now will have
          value. Does it need to become real-time? Not clear.
        </p>
        <p>
          In the sign-up form, we ask freelancers in machine learning to
          identify their <b>specializations</b>. So please indicate your
          interest in areas such as classification, prediction, statistical
          analysis, model production, data preparation, supervised or
          unsupervised learning, deep learning, visual recognition, data
          science, NLP, retail customer or product data, AI, real-time
          processing of streaming events, MLOps, personalization, recommender
          systems, sentiment analysis, anomaly detection, and regression
          analysis.
        </p>
        <h2>Please Tell Use What to Do Next!</h2>
        <p>
          If we missed a machine learning specialization, please tick
          &quot;other&quot; and let us know. More broadly, platform evolution is
          up to you. <b>Please invite people</b> you are already working with,
          think you could be working with, and explore virtual networking. We
          are big believers in self-organizing communities.
        </p>
        <h2>Sign up to try it!</h2>
        <p>
          As a freelancer in machine learning, I would like to <b>join</b> the
          free Early Access testing program to use the Marmalade AI peer
          networking platform. I understand that &quot;Early Access&quot; means
          this is a very early pre-release of the application with minimal
          functionality. However:
        </p>
        <div className="ml-10">
          <ul className="list-outside">
            <li>
              I will be <b>introduced</b> to other freelancers, who I would
              probably not meet otherwise.
            </li>
            <li>
              I will be able to forward <b>invitations</b> to others I work with
              (or others I would like to work with).
            </li>
            <li>
              I will <b>participate</b> in an Early Access discussion topic of
              the{' '}
              <a
                href="https://forum.marmalade.ai/"
                rel="noreferrer"
                target="_blank"
              >
                Marmalade AI Forum
              </a>
              , where I will provide feedback regarding this Early Access
              version of the application.
            </li>
          </ul>
        </div>
        Yay, freelancers!
        <p className="mt-8">
          <Link to="/alphaGoogleForm">
            <Button size="lg">Apply for Early Access</Button>
          </Link>
        </p>
      </div>
    </article>
  </Layout>
);

export default MachineLearning;
