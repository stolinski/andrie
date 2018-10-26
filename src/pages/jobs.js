import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Zone } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'
import rebecca from '../images/Rebecca-Lynn-5-17-15-BRW-1.jpg'
import barbara from '../images/barbara.jpg'
import ice from '../images/DSC_0266.jpg'

const IndexPage = () => (
  <Layout>
    <Zone modifiers={['right', 'dark', 'solid']} hero={true} image={hero}>
      <JobsLayout>
        <JobsImageCol>
          <img src={ice} alt="" />
          <img src={barbara} alt="" />
          <img src={rebecca} alt="" />
        </JobsImageCol>
        <div>
          <h2>Current Openings Page</h2>

          <p>
            This content will change as job openings change. Will need to
            determined what is here by default and/or on launch. Here is current
            text that could be refined and reused.
          </p>

          <p>
            We welcome you to Andrie’s Career Portal and thank you for visiting
            our website. This is your opportunity to join the Midwest’s premiere
            marine transportation company.
          </p>

          <p>Andrie does not currently have any open positions.</p>
          <ul>
            <li>Excellent Pay</li>
            <li>Bonus Program</li>
            <li>Travel Subsidy Program</li>
            <li>Medical, Dental, and Vision Benefits</li>
            <li>Safety Incentives</li>
            <li>Profit Sharing</li>
            <li>401k Plan</li>
            <li>Educational Assistance</li>
            <li>Life Insurance</li>
            <li>Long Term Disability</li>
            <li>
              Opportunities for advancement with a leading Great Lakes company
            </li>
          </ul>
          <p>A career at Andrie provides the following compensations.</p>
          <p>
            To apply, please email copies of your TWIC, Passport, Driver's
            License, MMC, and a current resume to: careers@andrie.com. If your
            credentials meet the requirements for a current vacancy we will
            contact you with an application.
          </p>
          <p>We look forward to sailing with you!</p>
        </div>
      </JobsLayout>
    </Zone>
  </Layout>
)

export default IndexPage

const JobsLayout = styled.div`
  display: flex;
  > *:first-child {
    width: 40%;
    margin-right: 5%;
  }
  > *:nth-child(2) {
    flex: 1;
  }
`

const JobsImageCol = styled.div`
  img {
    margin-bottom: 2rem;
  }
`
