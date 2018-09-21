import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Zone, Button, FormBox, blue, SplitLayout } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'

const IndexPage = () => (
  <Layout>
    <div>
      <Zone modifiers={['right', 'dark', 'hero']} image={hero}>
        <div className="zone-content">
          <h2>Contact Andrie</h2>
          <p>
            Andrie Inc.
            <br />
            561 E. Western Avenue
            <br />
            Muskegon, Michigan 49442
            <br />
          </p>
          <p>
            Phone: 231.728.2226
            <br />
            Tol Free Phone: 800.722.2421
            <br />
            Fax: 231.726.6747
            <br />
          </p>
        </div>
      </Zone>
      <FormBox>
        <h3>Send an Email</h3>
        <h2>connecting the great lakes and beyond since 1988</h2>
        <p>
          If you'd like to speak with someone in a specific department, please
          send us a note using form below.
        </p>
        <ContactForm action="">
          <label htmlFor="sendto">
            <span>Send To:</span>
            <input type="text" placeholder="Email Address" />
          </label>
          <label htmlFor="from">
            <span>From:</span>
            <input type="text" placeholder="Email Address" />
          </label>
          <label htmlFor="message">
            <span>Message:</span>
            <textarea />
          </label>
          <button style={{ marginLeft: 'auto' }}>Send</button>
        </ContactForm>
      </FormBox>
      <Zone modifiers={['center', 'solid', 'short']}>
        <h3>Connect</h3>
        <h4>Learn more about Andrie and join our community online.</h4>
        <SplitLayout>
          <div>
            <h5>LinkedIn</h5>
            <p>Corporate connections, resumes, industry news</p>
          </div>
          <div>
            <h5>Facebook</h5>
            <p>Community sponsorships, latest happening and events</p>
          </div>
        </SplitLayout>
        <Button modifiers={['dark']}>View All Equipment</Button>
      </Zone>
    </div>
  </Layout>
)

export default IndexPage

const ContactForm = styled.form`
  label {
    display: flex;
    text-align: right;
    justify-content: space-between;
    span {
      display: block;
      margin-top: 1rem;
      width: 20%;
    }
  }
  input {
    margin-left: 10px;
    padding: 20px;
    background: white;
    border: none;
    text-align: left;
    width: 80%;
    margin-bottom: 1rem;
  }
  textarea {
    margin-left: 10px;
    width: 80%;
    border: none;
    height: 150px;
  }
  button {
    margin: 1rem 0 0 auto;
    display: block;
    white-space: nowrap;
    text-transform: uppercase;
    padding: 10px;
    border: solid 1px ${blue};
    background: transparent;
  }
`
