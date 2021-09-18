import React from 'react';
import { Link } from 'gatsby';
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
          (&quot;machine learning,&quot; AI) to create a virtual network of
          people it seems like you should know. If you change the wording of
          your profile, your network changes. You can do searches for specific
          topics, skills, geographies, too. This is the base upon which we hope
          to build a lot more functionality, so please tell us what you need.
        </p>

        <h2>What does it cost?</h2>
        <p>
          Free forever for Early Access users with an invite code. Later, there
          will be a monthly subscription, so there is some minimal cost of
          entry. We are also considering whether some kind of &quot;pay per
          use&quot; for functionality that will be added.
        </p>

        <h2>What do I need to do to get started?</h2>
        <p>
          Once you have been accepted into the Early Access program, you will have a link to the app.
          Register, login, fill in MyProfile (including &quot;About,&quot; which
          you might cut and paste from Linkedin, About.me, or similar sources),
          upload a photo, browse Profiles, connect with people.
        </p>

        <h2>
          Is it only for these specific tech communities in the Early Access
          program?
        </h2>
        <p>
          Yes and no. If you mark &quot;Other&quot; (and specify your area),
          there cannot be the same kind of networking experience as if you were
          in one of the Early Access communities. Down the road, we expect to
          expand to other tech freelancing communities of practice, freelancing
          in general, and then all professionals.
        </p>

        <h2>Is the information private?</h2>
        <p>
          Yes. See our <Link to="/privacy-policy">Privacy Policy</Link>.
        </p>

        <h2>Does this conform to GDPR (European Union privacy legislation)?</h2>
        <p>
          Until we have a chance to understand GDPR, we explicitly limit
          registration to residents of North America.
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
        <p>Yes, and see &quot;What is the roadmap?&quot; below.</p>

        <h2>What can I learn through this?</h2>
        <p>Anything you want. The idea is to share knowledge.</p>

        <h2>What if I want to be mentored?/Want to mentor?</h2>
        <p>Indicate that in MyProfile.</p>

        <h2>What region is this for?</h2>
        <p>North America only during the Early Access program.</p>

        <h2>
          What if I do not want somebody to contact me or be on my network?
        </h2>
        <p>
          During the Early Access phase, you will need to send us an email about
          the issue. We will contact the person and if there are repeated
          issues, ban him or her. Later we hope to have a way to just block
          someone yourself.
        </p>

        <h2>What is the roadmap?</h2>
        <p>Initial: Get a networked community going for tech freelancers.</p>
        <p>Longer term ...</p>
        <p>
          &quot;Pods&quot;: For example, you are working on a project and you
          realize there is a part that calls for something you are not current
          on, so you want to bring in someone from your network for that. It is
          not a long-term thing. You are not forming an LLC or C-corp. Just
          facilitate this. So enabling &quot;digital organization&quot; for
          freelancers.
        </p>
        <p>
          &quot;Two-side marketplace&quot;: Being able to indicate that you are
          available (or not) for hire, maybe with some detail or filters, and
          then companies or recruiters can have their own class of participation
          in the platform and contact you.
        </p>

        <h2>How do I change my network?</h2>
        <p>
          Edit your profile and your network will change next time the
          recommendation engine runs.
        </p>

        <h2>How do I save a specific network or query?</h2>
        <p>We do not offer that capability now but hope to soon.</p>

        <h2>How do I contact people?</h2>
        <p>
          For now, you will need to set up a Zoom or similar call. Down the
          road, we plan to incorporate video chat capability, as well as
          offering your availability / non-availability, in the platform.
        </p>
      </div>
    </article>
  </Layout>
);

export default Faq;
