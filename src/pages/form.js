import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/seo';
import Button from '../components/Button';

const Form = () => (
  <Layout>
    <SEO title="Form" description="Form" />
    <article className="py-20 lg:pb-20 lg:pt-24">
      <div className="px-6 mx-auto lg:w-2/3">
        <h1>Registration Form</h1>
        <form className="mt-4" action="/my-handling-form-page" method="post">
          <label htmlFor="name">Name:</label>
          <br />
          <input type="text" id="name" name="user_name" size="45" /> <br />
          <label htmlFor="mail">E-mail:</label>
          <br />
          <input type="email" id="mail" name="user_email" size="45" /> <br />
          <label htmlFor="msg">
            How will this networking application help you?
          </label>
          <br />
          <textarea id="msg" name="user_message" rows="5" cols="45" /> <br />
          <p>Are you a freelancer?</p>
          <input type="radio" id="yesRadio" name="user_fl" value="yes" />
          <label className="pr-4" htmlFor="yesRadio">
            Yes
          </label>
          <input type="radio" id="noRadio" name="user_fl" value="no" />
          <label htmlFor="noRadio">No</label> <br />
          <p>What is your field of expertise?</p>
          <input
            type="radio"
            id="dmRadio"
            name="user_field"
            value="digital_marketing"
          />
          <label className="pr-4" htmlFor="dmRadio">
            Digital Marketing
          </label>
          <input
            type="radio"
            id="mlRadio"
            name="user_field"
            value="machine_learning"
          />
          <label className="pr-4" htmlFor="mlRadio">
            Machine Learning
          </label>
          <input
            type="radio"
            id="uxdRadio"
            name="user_field"
            value="ux_design"
          />
          <label className="pr-4" htmlFor="uxdRadio">
            UX Design
          </label>
          <input type="radio" id="otherRadio" name="user_field" value="other" />
          <label className="pr-4" htmlFor="otherRadio">
            Other
          </label>{' '}
          <br />
          <Button className="mt-4" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </article>
  </Layout>
);

export default Form;
