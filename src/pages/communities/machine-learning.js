import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
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
      <h1>Machine Learning</h1>
    </div>
    <article className="py-20 lg:pb-4 lg:pt-4">
      <div className="px-6 mx-auto lg:w-2/3">
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <p className="splitBody">
                Freelancers in machine learning frequently use the Python Pandas
                library to prepare data.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../../images/pandas_screenshot_300.png"
              alt="Freelancers in machine learning frequently use the Python Pandas library to prepare data."
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
              alt="Freelancers in machine learning often create charts of time series data."
            />
          }
        />
        <h2>How Can I Do Better as a Freelancer in Machine Learning?</h2>
        <p>
          &quot;How can you help me do <b>better</b> as a freelancer in machine
          learning?&quot; If you found us through a search engine query, would
          that be like the one you used? Or did you actually get{' '}
          <i>irrelevant</i> results to that query? Results that implied you were
          flying solo, hoping to appease the pricing gods by commoditizing your
          services, and putting you in the company of hordes of freelancers in
          the cold water waiting to try to go over the dam?
        </p>
        <p>
          We&apos;re excited that you found us! We want you to be able to use
          Marmalade AI to answer that very question: &quot;How can you help me
          do better as a freelancer in machine learning?&quot;
        </p>
        <h2>Virtual Network</h2>
        <p>
          The short answer is: sign up and use the virtual network that
          automatically is created by applying NLP to your profile, which you
          can copy and paste from elsewhere, or write from scratch.
        </p>
        <p>
          The long answer is: use Marmalade AI to have a network where you can
          raise the level of your work. We&apos;re in the era of virtualization
          to provide more effective environments -- think of Docker images and
          Kubernetes orchestration -- so why not a <i>virtual network</i> for
          freelancers? It&apos;s the same idea. Your virtual network reflects
          your profile. It is specific to you. Your virtual network changes when
          you change your profile (caveat: it changes the next time our NLP
          engine runs; not in real time currently).
        </p>
        <p>
          This means you can use your virtual network, for example, to find
          someone to help on part of a project where you realize you lack the
          expertise. Or you can help someone by providing the expertise
          they&apos;re lacking. A lot of projects have scope in which I can do
          what I&apos;m good at, but one-tenth of the scope might be in a less
          familiar area that will double the project time. This is just reality.
          The goal of Marmalade AI is to be a platform where your virtual
          network enables you to focus on what you&apos;re good at. That&apos;s
          all transactional.
        </p>
        <p>
          There&apos;s also the learning aspect. You need to be up-to-date in
          peripheral expertise. Maybe pop up a virtual room at 3:00pm (Pacific)
          today to discuss the latest in GPT-3 or BERT and send notifications
          about it just to people who have indicated an interest in that topic.
          It&apos;s like Quora or Reddit but more exact and closer to real time.
          That&apos;s the vision for the communications side of this platform,
          so please let us know what you think.
        </p>
        <h2>Evolution and Road Map</h2>
        <p>
          So how did we come to focus on virtual networking for machine learning
          freelancers, what&apos;s in it for you, and how can you help guide its
          evolution to be really useful for you?
        </p>
        <p>
          We started from a lot of &quot;user research.&quot; We learned many
          things. Many interesting, little details. For example: Twice-weekly
          ping-pong meetups attended predominantly by machine learning software
          engineers and investment bankers are way more efficient than monthly
          Meetup.com events for networking. Or, in the case of Japanese-English
          simultaneous interpreting gigs in the financial markets (New York and
          Tokyo), the &quot;freelancers&quot; have 10 agency business cards and
          the agencies do all the work of talking to clients and figuring out
          who is available when for what? Many, many similar details. The
          details are the important part. You have to enable the details to get
          it to work.
        </p>
        <p>
          Yet, pretty much everybody said they had the same three big problems
          with networking: 1) one-on-ones in any context always seem less
          accurate than they could be (thank god for serendipity!) 2) everybody
          feels like they&apos;re the worst person on the planet at keeping
          their network up-to-date on what they&apos;re doing (some of these
          people could be helpful, if they only knew!) 3) everybody thinks they
          already have the biggest possible network (you can&apos;t spend{' '}
          <i>all</i> of your time networking!)
        </p>
        <p>
          Problem #3 subsumes the other two, so we are starting with that by
          creating virtual networks that require very little effort.
        </p>
        <p>
          The road map is to start with simple matching (<i>alpha</i>, aka
          &quot;Early Access&quot;) that evolves into using NLP to facilitate
          freelancer communities and integrate communications (<i>beta</i>);
          then add tools making it easier to work together on projects; and
          thirdly add ability for buy-side participation with demand-side
          (freelancer) control of how the market works.
        </p>
        <h2>Community First, Then Everything Else</h2>
        <p>
          The road map is subject to your guidance. &quot;Unbundling,&quot;
          &quot;self-organizing,&quot; like &quot;the world until 1800&quot;
          (Naval Ravikant, founder of AngelList), whatever you want to call it:
          the evolution of Marmalade AI is really subject to what you have to
          say about it.
        </p>
        <p>
          We do think that a core idea is using technology (NLP, virtualization)
          to enable more exact connections more easily. How exactly that plays
          out in creating a platform for community is really up to you.
        </p>
        <h2>Behind the Scenes</h2>
        <p>
          Finally we get to the good part! OK, so Marmalade AI is using NLP in R
          with MLOps on Google Cloud to connect with phones, tablets, laptops,
          desktops (Vue.js) as clients. Before that we wrote Python code using
          XPath to look at thousands of freelancer profiles. The data is always
          in the cloud and the client system is just an interface to it.
        </p>
        <p>
          We hope you will tell us where we are wrong and need to change our
          thinking. For example, initially we thought evaluation of meetings
          after the fact would be important. Then we realized that would be a
          waste of time, because the tech freelancer&apos;s profiles should be
          like a TV &quot;remote control&quot; here -- change the wording in
          your profile to change your virtual network. We also decided not to
          use work history and education history, even though we had those,
          because tech freelancers already express their focus clearly enough in
          their profile text.
        </p>
        <p>
          We have many, many questions you can help with, and we reserve the
          right to be wrong and change our thinking. For example, will you be
          open to communication with people you don&apos;t know? We think if the
          context is vague, the answer is no. But if the context is relevant,
          the answer is yes. Or, we think this eventually should be a
          subscription service free of ads, with pay-for-use for communications.
          The idea is monetizing based on creating actual value.
        </p>
        <p>
          Marmalade AI is not going to try to deliver a BERT or GPT-3 equivalent
          for NLP in networking. Why not? Mainly because we think any level of
          matching that is more exact than what happens now will have value.
          Does it need to become real-time? Not clear.
        </p>
        <p>
          In the sign-up form, we ask freelancers in machine learning to
          identify their specializations. So indicate in the registration your
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
          up to you. Please invite people you are already working with, think
          you could be working with, and explore virtual networking. We are big
          believers in self-organizing communities.
        </p>
        <h2>Sign up to try it!</h2>
        <p>
          As a freelancer in machine learning, I would like to join the free
          Early Access testing program to use the Marmalade AI peer networking
          platform. I understand that &quot;Early Access&quot; means this is a
          very early pre-release of the application with minimal functionality.
          However:
        </p>
        <div className="ml-10">
          <ul className="list-outside">
            <li>
              I will be introduced to other freelancers, who I would probably
              not meet otherwise.
            </li>
            <li>
              I will be able to forward invitations to others I work with (or
              others I would like to work with).
            </li>
            <li>
              I will participate in an Early Access discussion topic of the{' '}
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
        <p className="mt-6">
          <Button size="lg">Sign me up!</Button>
        </p>
      </div>
    </article>
  </Layout>
);

export default MachineLearning;
