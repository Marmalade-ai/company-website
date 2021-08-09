import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const CodeOfConduct = () => (
  <Layout>
    <SEO title="Code of Conduct" description="Code of Conduct" />
    <div className="container mx-auto mt-10">
      <h1>Code of Conduct</h1>
    </div>
    <article className="py-20 lg:pb-4 lg:pt-4">
      <div className="px-6 mx-auto lg:w-2/3">
        <h2>Our Pledge</h2>
        <p>
          In the interest of fostering an open and welcoming environment, we as
          Marmalade networking members pledge to make participation in our
          meetings and in our community a harassment-free experience for
          everyone, regardless of age, body size, disability, ethnicity, sex
          characteristics, gender identity and expression, level of experience,
          education, socio-economic status, nationality, personal appearance,
          race, religion, or sexual identity and orientation.
        </p>

        <h2>Our Standards</h2>
        <p>
          Examples of behavior that contributes to creating a positive
          environment include:
        </p>
        <ul>
          <li>Using welcoming and inclusive language</li>
          <li>Being respectful of differing viewpoints and experiences</li>
          <li>Gracefully accepting constructive criticism</li>
          <li>Focusing on what is best for the community</li>
          <li>Showing empathy towards other community members</li>
        </ul>
        <p>Examples of unacceptable behavior by participants include:</p>
        <ul>
          <li>
            The use of sexualized language or imagery and unwelcome sexual
            attention or advances
          </li>
          <li>
            Trolling, insulting/derogatory comments, and personal or political
            attacks
          </li>
          <li>Public or private harassment</li>
          <li>
            Publishing others’ private information, such as a physical or
            electronic address, without explicit permission
          </li>
          <li>
            Other conduct which could reasonably be considered inappropriate in
            a professional setting
          </li>
        </ul>

        <h2>Our Responsibilities</h2>
        <p>
          Marmalade AI administrators are responsible for clarifying the
          standards of acceptable behavior and are expected to take appropriate
          and fair corrective action in response to any instances of
          unacceptable behavior.
        </p>
        <p>
          Administrators have the right and responsibility to remove, edit, or
          reject comments and other written contributions that are not aligned
          to this Code of Conduct, or to ban temporarily or permanently any
          networking member for other behaviors that they deem inappropriate,
          threatening, offensive, or harmful.
        </p>

        <h2>Scope</h2>
        <p>
          This Code of Conduct applies within all networking spaces, and it also
          applies when an individual is representing the community in public
          spaces. Examples of representing the community include discussion of
          member experiences at public social media sites. Representation of the
          community may be further defined and clarified by Administrators.
        </p>

        <h2>Enforcement</h2>
        <p>
          Instances of abusive, harassing, or otherwise unacceptable behavior
          may be reported by contacting the community administrators at
          community-administrators@marmalade.ai. All complaints will be reviewed
          and investigated and will result in a response that is deemed
          necessary and appropriate to the circumstances. The community
          administrators are obligated to maintain confidentiality with regard
          to the reporter of an incident. Further details of specific
          enforcement policies may be posted separately. Community
          administrators who do not follow or enforce the Code of Conduct in
          good faith may face temporary or permanent repercussions as determined
          by other members of the community’s leadership.
        </p>

        <h2>Attribution</h2>
        <p>
          This Code of Conduct is adapted from the Contributor Covenant, version
          1.4, available at{' '}
          <a href="https://www.contributor-covenant.org/version/1/4/code-of-conduct.html">
            https://www.contributor-covenant.org/version/1/4/code-of-conduct.html
          </a>
          . For answers to common questions about that code of conduct, see{' '}
          <a href="https://www.contributor-cov/faq">
            https://www.contributor-cov/faq
          </a>
          .
        </p>
      </div>
    </article>
  </Layout>
);

export default CodeOfConduct;
