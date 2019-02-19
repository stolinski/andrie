import React from 'react'
import { StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Zone, FormBox, blue } from '../elements'

import rebecca from '../images/Rebecca-Lynn-5-17-15-BRW-1.jpg'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressPage(slug: { eq: "contact" }) {
          slug
          acf {
            zones_page {
              heading
              paragraph
            }
          }
        }
      }
    `}
    render={({ wordpressPage }) => (
      <Layout>
        <div>
          <Zone modifiers={['dark']} right={true} hero={true} image={rebecca}>
            <div className="zone-content">
              <h2>{wordpressPage.acf.zones_page[0].heading}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.acf.zones_page[0].paragraph.replace(
                    /(\r\n|\n|\r)/g,
                    '<br />'
                  ),
                }}
              />
            </div>
          </Zone>
          <FormBox>
            <h3>{wordpressPage.acf.zones_page[1].heading}</h3>
            <p>{wordpressPage.acf.zones_page[1].paragraph}</p>
            <ContactForm
              name="contact"
              method="post"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <label htmlFor="sendto">
                <span>Send To:</span>
                <select name="sendto" id="sendto">
                  <option value="mikecaliendo@andrie.com">
                    Sales & Information
                  </option>
                  <option value="mstump@andrie.com">
                    Environmental/Safety
                  </option>
                  <option value="careers@andrie.com">Careers</option>
                  <option value="scott.tolinski@gmail.com">Test Email</option>
                </select>
              </label>
              <label htmlFor="from">
                <span>From:</span>
                <input
                  type="text"
                  name="from"
                  id="from"
                  placeholder="Email Address"
                />
              </label>
              <label htmlFor="message">
                <span>Message:</span>
                <textarea name="message" id="message" />
              </label>
              <button style={{ marginLeft: 'auto' }}>Send</button>
            </ContactForm>
          </FormBox>
          {/* <ContacZone modifiers={['center', 'solid', 'short']}>
        <h3>Connect</h3>
        <h4>Learn more about Andrie and join our community online.</h4>
        <ContactSplit>
          <a
            href="https://www.linkedin.com/company/andrie-inc./"
            rel="nofollow"
            target="_blank"
          >
            <img src={linkedin} alt="LinkedIn Logo" style={{ width: '80px' }} />
            <h5>LinkedIn</h5>
            <p>Corporate connections, resumes, industry news</p>
          </a>
          <a
            href="https://www.facebook.com/pages/Andrie-Inc/161039470584729"
            rel="nofollow"
            target="_blank"
          >
            <img src={facebook} alt="Facebook Logo" style={{ width: '80px' }} />
            <h5>Facebook</h5>
            <p>Community sponsorships, latest happening and events</p>
          </a>
        </ContactSplit>
      </ContacZone> */}
        </div>
      </Layout>
    )}
  />
)

export default IndexPage

// const ContactSplit = styled(SplitLayout)`
//   justify-content: space-around;
//   max-width: 650px;
//   margin: 0 auto;
//   > * {
//     max-width: 300px;
//   }
//   h5 {
//     font-size: 1.75rem;
//   }
// `

// const ContacZone = styled(Zone)`
//   h3 {
//     text-transform: uppercase;
//     font-size: 2rem;
//   }
//   h4 {
//     font-size: 1.5rem;
//     text-transform: none;
//     font-weight: 400;
//     ${serif()};
//   }
//   p {
//     margin-bottom: 0;
//   }
// `

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
