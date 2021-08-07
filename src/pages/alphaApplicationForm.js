import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';

const AlphaApplicationForm = () => (
  <Layout>
    <SEO
      title="Application Form"
      description="Register for Marmalade AI Networking"
    />
    <article className="py-20 lg:pb-20 lg:pt-24">
      <div className="px-6 mx-auto lg:w-2/3">
        <h1>Registration Form</h1>
        <form
          className="mt-4"
          action="/alphaApplicationFormAccepted"
          method="get"
        >
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="user_name" size="60" />
          <br />
          <br />
          <label htmlFor="mail">
            E-mail:
            <br />
            <input type="email" id="mail" name="user_email" size="60" />
          </label>
          <br />
          <br />
          <label htmlFor="msg">
            How will this networking application help you?
          </label>
          <br />
          <textarea id="msg" name="user_message" rows="5" cols="60" />
          <br />
          <p>Are you a freelancer?</p>
          <div className="pl-4">
            <input type="radio" id="yesRadio" name="user_fl" value="yes" />
            <label className="pl-2 pr-4" htmlFor="yesRadio">
              Yes
            </label>
            <br />
            <input type="radio" id="noRadio" name="user_fl" value="no" />
            <label className="pl-2 pr-4" htmlFor="noRadio">
              No
            </label>
          </div>
          <p>What is your field of expertise?</p>
          <div className="pl-4">
            <input
              type="radio"
              id="dmRadio"
              name="user_field"
              value="digital_marketing"
            />
            <label className="pl-2 pr-4" htmlFor="dmRadio">
              Digital Marketing
            </label>
            <br />
            <input
              type="radio"
              id="mlRadio"
              name="user_field"
              value="machine_learning"
            />
            <label className="pl-2 pr-4" htmlFor="mlRadio">
              Machine Learning
            </label>
            <br />
            <input
              type="radio"
              id="uxdRadio"
              name="user_field"
              value="ux_design"
            />
            <label className="pl-2 pr-4" htmlFor="uxdRadio">
              UX Design
            </label>
            <input
              type="radio"
              id="otherRadio"
              name="user_field"
              value="other"
            />
            <label className="pl-2 pr-4" htmlFor="otherRadio">
              Other
            </label>
          </div>
          <br />
          <button className="formButton mt-4" type="submit">
            Register
          </button>
        </form>
      </div>
    </article>
  </Layout>
);

export default AlphaApplicationForm;
