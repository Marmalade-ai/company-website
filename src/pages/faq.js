import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const Faq = () => (
  <Layout>
    <SEO title="FAQ" description="Frequently Asked Questions" />
    <article className="py-20 lg:pb-20 lg:pt-24">
      <div className="px-6 mx-auto lg:w-2/3">
        <h1>Frequently Asked Questions</h1>
        <h2>How does it work?</h2>
        <p>
          Create a login, then that information, esp. your profile ("About"
          section, which you can write from scratch or cut and paste from
          Linkedin, About.me, etc.) is run through NLP ("machine learning", AI)
          to create a virtual network of people it seems like you should know.
          If you change the wording of your profile, your network changes. You
          can do searches for specific topics, skills, geographies, too. This is
          the base upon which we hope to build a lot more functionality, so
          please tell us what you need.
        </p>

        <h2>What does it cost?</h2>
        <p>
          Free forever for alpha users with an invite code. Later: subscription
          of $5/month, so there is some minimal cost of entry, is what you might
          expect others to pay down the road, as well as some kind of "pay per
          use" for functionality that will be added.
        </p>

        <h2>What do I need to do to get started?</h2>
        <p>
          Normally: register, login, fill in MyProfile (including "About,"
          fresh, or cut and paste from Linkedin, About.me, or or or or similar
          sources), upload a photo, browse Profiles, connect with people. -
          Alpha: because you have an invite code, the "register" and "login"
          "login" sections are automatic.
        </p>

        <h2>Is it only for these specific tech niches in the alpha?</h2>
        <p>
          Yes and no. If you mark "other" (and specify your area), there can't
          be the same kind of networking experience as if you were in one of the
          alpha niches. Down the road, we expect to expand to other tech
          freelancing niches, freelancing in general, and then all
          professionals.
        </p>

        <h2>Is the information private?</h2>
        <p>Yes (link to privacy info).</p>

        <h2>Does this conform to GDPR (European Union privacy legislation)?</h2>
        <p>
          Until we have a chance to understand GDPR, we explicitly limit the
          alpha to residents of North America.
        </p>

        <h2>How do I know who to connect to?</h2>
        <p>
          We use NLP (Natural Language Processing), a type of machine learning
          ("AI") to make matches based on what is included in MyProfile. So the
          short answer is, you don't need to know who to connect to, the
          platform creates a virtual network for you. However, you can also do
          searches of your own.
        </p>

        <h2>Can I find a job through this?</h2>
        <p>Yes, and see "What is the roadmap".</p>

        <h2>What can I learn through this?</h2>
        <p>Anything you want. The idea is to share knowledge.</p>

        <h2>What if I want to be mentored?/Want to mentor?</h2>
        <p>Indicate that in MyProfile</p>

        <h2>What region is this for?</h2>
        <p>North America only in the alpha.</p>

        <h2>
          What if I don't want somebody to contact me or be on my network?
        </h2>
        <p>
          In the alpha, you'll need to send us an email about the issue. We'll
          contact the person and if there are repeated issues, ban him or her.
          Later we hope to have a way to just block someone yourself .
        </p>

        <h2>What is the roadmap?</h2>
        <p>
          Initial: get a networked community going for tech freelancers. -
          Longer term: pods and two-side marketplace. By "pods," we mean, for
          example, you're working on a project and you realize there's a part
          that calls for something you're not current on, so you want to bring
          in someone from your network for that. It's not a long-term thing.
          You're not forming an LLC or C-corp. Just facilitate this. So enabling
          "digital organization" for freelancers. By "two-side marketplace," we
          mean something like being able to indicate that you're available (or
          not) for hire, maybe with some detail or filters, and then companies
          or recruiters can have their own class of participation in the
          platform and contact you.
        </p>

        <h2>How do I change my network?</h2>
        <p>
          Edit your profile and your network will change next time the analytics
          engine runs.
        </p>

        <h2>How do I save a specific network or query?</h2>
        <p>We don't offer that capability now but hope to soon.</p>

        <h2>How do I contact people?</h2>
        <p>
          For now, you'll need to set up a Zoom or similar call. Down the road,
          we plan to incorporate that capability, as well as offering your
          availability / non-availability, in the platform.
        </p>
      </div>
    </article>
  </Layout>
);

export default Faq;
