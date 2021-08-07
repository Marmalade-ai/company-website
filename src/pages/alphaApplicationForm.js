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
          <label htmlFor="name">
            Name:
            <br />
            <input type="text" id="name" name="user_name" size="60" />
          </label>
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
            <br />
            <textarea id="msg" name="user_message" rows="5" cols="60" />
          </label>
          <br />
          <p>Are you a freelancer?</p>
          <div className="pl-4">
            <label htmlFor="yesRadio">
              <input type="radio" id="yesRadio" name="user_fl" value="yes" />
              &nbsp;Yes
            </label>
            <br />
            <label htmlFor="noRadio">
              <input type="radio" id="noRadio" name="user_fl" value="no" />
              &nbsp;No
            </label>
          </div>
          <p>What is your field of expertise?</p>
          <div className="pl-4">
            <label htmlFor="dmRadio">
              <input
                type="radio"
                id="dmRadio"
                name="user_field"
                value="digital_marketing"
              />
              &nbsp;Digital Marketing
            </label>
            <br />
            <label htmlFor="mlRadio">
              <input
                type="radio"
                id="mlRadio"
                name="user_field"
                value="machine_learning"
              />
              &nbsp;Machine Learning
            </label>
            <br />
            <label htmlFor="uxdRadio">
              <input
                type="radio"
                id="uxdRadio"
                name="user_field"
                value="ux_design"
              />
              &nbsp;UX Design
            </label>
            <br />
            <label htmlFor="otherRadio">
              <input
                type="radio"
                id="otherRadio"
                name="user_field"
                value="other"
              />
              &nbsp;Other
            </label>
          </div>
          <button className="formButton mt-4" type="submit">
            Register
          </button>
        </form>
      </div>
    </article>
  </Layout>
);

export default AlphaApplicationForm;
