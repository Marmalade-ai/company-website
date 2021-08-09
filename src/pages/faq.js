import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const Faq = () => (
  <Layout>
    <SEO title="FAQ" description="Frequently Asked Questions" />
    <div className="container mx-auto mt-10">
      <h1>Frequently Asked Questions</h1>
    </div>
    <article className="py-20 lg:pb-4 lg:pt-4">
      <div className="px-6 mx-auto lg:w-2/3">
        <h2>How does it work?</h2>
        <p>
          Create a login, then that information, esp. your profile
          (&quot;About&quot; section, which you can write from scratch or cut
          and paste from Linkedin, About.me, etc.) is run through NLP
          (&quot;machine learning&quot;, AI) to create a virtual network of
          people it seems like you should know. If you change the wording of
          your profile, your network changes. You can do searches for specific
          topics, skills, geographies, too. This is the base upon which we hope
          to build a lot more functionality, so please tell us what you need.
        </p>

        <h2>What does it cost?</h2>
        <p>
          Free forever for alpha users with an invite code. Later: subscription
          of $5/month, so there is some minimal cost of entry, is what you might
          expect others to pay down the road, as well as some kind of &quot;pay
          per use&quot; for functionality that will be added.
        </p>

        <h2>What do I need to do to get started?</h2>
        <p>
          Normally: register, login, fill in MyProfile (including
          &quot;About&quot;, fresh, or cut and paste from Linkedin, About.me, or
          or or or similar sources), upload a photo, browse Profiles, connect
          with people.
        </p>
        <p>
          Alpha: because you have an invite code, the &quot;register&quot; and
          &quot;login&quot; &quot;login&quot; sections are automatic.
        </p>

        <h2>Is it only for these specific tech niches in the alpha?</h2>
        <p>
          Yes and no. If you mark &quot;other&quot; (and specify your area),
          there cannot be the same kind of networking experience as if you were
          in one of the alpha niches. Down the road, we expect to expand to
          other tech freelancing niches, freelancing in general, and then all
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
          (&quot;AI&quot;) to make matches based on what is included in
          MyProfile. So the short answer is, you do not need to know who to
          connect to, the platform creates a virtual network for you. However,
          you can also do searches of your own.
        </p>

        <h2>Can I find a job through this?</h2>
        <p>Yes, and see &quot;What is the roadmap&quot;.</p>

        <h2>What can I learn through this?</h2>
        <p>Anything you want. The idea is to share knowledge.</p>

        <h2>What if I want to be mentored?/Want to mentor?</h2>
        <p>Indicate that in MyProfile</p>

        <h2>What region is this for?</h2>
        <p>North America only in the alpha.</p>

        <h2>
          What if I do not want somebody to contact me or be on my network?
        </h2>
        <p>
          In the alpha, you will need to send us an email about the issue. We
          will contact the person and if there are repeated issues, ban him or
          her. Later we hope to have a way to just block someone yourself .
        </p>

        <h2>What is the roadmap?</h2>
        <p>
          Initial: get a networked community going for tech freelancers. -
          Longer term: pods and two-side marketplace. By &quot;pods&quot;, we
          mean, for example, you are working on a project and you realize there
          is a part that calls for something you are not current on, so you want
          to bring in someone from your network for that. It is not a long-term
          thing. You are not forming an LLC or C-corp. Just facilitate this. So
          enabling &quot;digital organization&quot; for freelancers. By
          &quot;two-side marketplace&quot;, we mean something like being able to
          indicate that you are available (or not) for hire, maybe with some
          detail or filters, and then companies or recruiters can have their own
          class of participation in the platform and contact you.
        </p>

        <h2>How do I change my network?</h2>
        <p>
          Edit your profile and your network will change next time the analytics
          engine runs.
        </p>

        <h2>How do I save a specific network or query?</h2>
        <p>We do not offer that capability now but hope to soon.</p>

        <h2>How do I contact people?</h2>
        <p>
          For now, you will need to set up a Zoom or similar call. Down the
          road, we plan to incorporate that capability, as well as offering your
          availability / non-availability, in the platform.
        </p>
      </div>
    </article>
  </Layout>
);

export default Faq;
