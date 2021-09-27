import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Button from '../../components/Button';
import Layout from '../../components/layout/Layout';
import SEO from '../../components/seo';
import SplitSection from '../../components/SplitSection';

const UXDesign = () => (
  <Layout>
    <SEO title="UX Design" description="UX Design community of freelancers." />
    <div className="container mx-auto mt-10">
      <h1>
        <StaticImage
          className="rounded-lg shadow-lg rounded-lg-vertical-align"
          src="../../images/UXdesign_soil_64.png"
          alt="Marmalade AI UX design community."
          title="Marmalade AI UX design community."
        />{' '}
        UX Design
      </h1>
    </div>
    <article className="py-20 lg:pb-4 lg:pt-4">
      <div className="px-6 mx-auto lg:w-2/3">
        <SplitSection
          reverseOrder
          primarySlot={
            <div className="lg:pl-32 xl:pl-48">
              <p className="splitBody">
                UX design immerses the user in the experience.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg"
              src="../../images/christina-wocintechchat-com-J7EDyqUwXJI-unsplash_300.jpg"
              alt="A happy user viewing a phone app."
              title="UX design improves the user experience."
            />
          }
        />
        <SplitSection
          primarySlot={
            <div className="lg:pr-32 xl:pr-48">
              <p className="splitBody">
                UX designers test interactions on multiple devices.
              </p>
            </div>
          }
          secondarySlot={
            <StaticImage
              className="rounded-lg shadow-lg	"
              src="../../images/taras-shypka-iFSvn82XfGo-unsplash_300.jpg"
              alt="Tablet in front of a large computer screen."
              title="Designing for multiple devices."
            />
          }
        />
        <h2>How Can I Do Better as a Freelancer in UX Design?</h2>
        <p>
          &quot;How can you help me do <b>better</b> as a freelancer in UX
          design?&quot;
        </p>
        <p>
          We hope that is the kind of <b>search query</b> that brought you to
          us. If so, you maybe had to sort through a LOT of irrelevant results
          that assumed you wanted to be siloed, commoditized, and
          undifferentiated.
        </p>
        <p>
          We are excited that you found us! We want you to be able to use
          Marmalade AI to answer that very <b>question</b>: &quot;How can you
          help me do better as a freelancer in UX design?&quot;
        </p>
        <h2>Virtual Network</h2>
        <p>
          The <b>short answer</b> is: by signing up and working with the virtual
          network that is automatically created on the basis of your profile,
          which you can copy and paste from elsewhere, or write from scratch.
        </p>
        <p>
          The <b>long answer</b> is: by using Marmalade AI to build a network
          where you can <b>raise the level</b> of your work. Your{' '}
          <b>
            <i>virtual network</i>
          </b>
          · reflects your profile, so it is specific to you, and that is the
          whole point. It even changes when you change your profile.{' '}
        </p>
        <p>
          You can use your virtual network to <b>find help</b> for part of a
          project that is not your thing, or to help others in the same way. Or
          to pop up a virtual room on a topic and learn the latest.
        </p>
        <p>
          The idea is that you can use the platform to do everything{' '}
          <b>more exactly and faster</b> than in traditional networking.
          Marmalade AI wants to make networking as efficient and useful as
          possible.
        </p>
        <p>
          So that is it: a{' '}
          <b>
            <i>virtual network</i>
          </b>
          . All you need to do is keep your profile current with the kind of
          work you do.
        </p>
        <h2>Evolution</h2>
        <p>
          Our vision has evolved. Yes, everybody needs to network. Freelancers
          even more frequently. Marmalade AI&apos;s initial goal is to be a
          useful platform for <b>tech freelancer</b> communities, so we chose to
          launch in three areas of tech freelancing.
        </p>
        <p>
          We want this to be more about you, building a network of UX design
          freelancers who can find each other more easily, share projects, keep
          their knowledge up-to-date.
        </p>
        <p>
          There is no shortage of applications that favor the buyer of freelance
          UX design services. In some cases, these are very broad. In other
          cases, they are very narrow. We are not doing that. We favor the{' '}
          <b>provider</b> of freelance UX design.
        </p>
        <h2>Community First, Then Everything Else</h2>
        <p>
          Marmalade AI&apos;s core idea is to make networking virtual. By doing
          so, the platform makes networking much more efficient. It is really a{' '}
          <b>simple idea</b>. Would you want to read a book by somebody you do
          not know? Well, yes, if it is relevant. Same thing with virtual
          networking. We want your feedback. That is why we have a Marmalade AI{' '}
          <a
            href="https://forum.marmalade.ai/"
            rel="noreferrer"
            target="_blank"
          >
            forum
          </a>{' '}
          and this is Early Access.
        </p>
        <h2>Behind the Scenes</h2>
        <p>
          Marmalade AI applies <b>NLP</b> (Natural Language Processing, machine
          learning, AI) to freelancers&apos; profiles. Your virtual network
          evolves as more people join. You can invite people you currently work
          with or would like to connect with. It is automatic. If you change the
          wording of your profile, eventually your virtual network will change.
          It is like affective reality.
        </p>
        <p>
          UX design freelancers tend to work from a <b>portfolio</b> and share
          their design thinking over Dribbble, Behance, or similar sites. Do we
          need to replicate that? We think probably not. Just put a link to your
          portfolio in your profile.
        </p>
        <h2>About the Sign Up Form</h2>
        <p>
          In the sign-up form, we ask freelancers in UX design to identify their{' '}
          <b>specializations</b>. NLP will be the engine, once we scale up. In
          the near term, we use simple matching. So indicate in the sign up form
          your interest in areas such as graphic design, creative design, UX
          design, CX, wireframing, conversational design, prototyping, A/B
          testing, mobile, packaging, healthcare, industrial, research,
          information architecture, UI developer, interaction design, and UX
          writer.
        </p>
        <h2>Please Tell Use What to Do Next!</h2>
        <p>
          If we missed a UX design specialization, please tick &quot;other&quot;
          and let us know. More broadly, we said a little about what we think is
          on the road map: community, co-working, control. But that is subject
          to what we hear from you. <b>Please invite people</b> you are already
          working with, think you could be working with, and explore virtual
          networking. We are big believers in self-organizing communities.
        </p>
        <h2>Sign up to try it!</h2>
        <p>
          As a freelancer in UX design, I would like to <b>join</b> the free
          Early Access testing program to use the Marmalade AI peer networking
          platform. I understand that &quot;Early Access&quot; means this is a
          very early pre-release of the application with minimal functionality.
          However:
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

export default UXDesign;
