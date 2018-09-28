import React from 'react'
import Newsletter from '../components/Newsletter'
import Layout from '../components/Layout'
import { Zone, BoxWrapper, Box, Button } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'
import greatLakes from '../images/Great-Lakes-blue.png'
import barbara from '../images/barbara.jpg'
import waves from '../images/SarahAndrie-makingwaves.jpg'
import community from '../images/Andrie-biking-community.jpg'

const IndexPage = () => (
  <Layout>
    <div>
      <Zone modifiers={['right', 'dark', 'hero', 'solid']} image={hero}>
      <h2>Current Openings Page</h2>

<p>This content will change as job openings change. Will need to determined what is here by default and/or on launch. Here is current text that could be refined and reused.</p>

<p>We welcome you to Andrie’s Career Portal and thank you for visiting our website. This is your opportunity to join the Midwest’s premiere marine transportation company.</p>
 
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
<li>Opportunities for advancement with a leading Great Lakes company</li>
</ul>
<p>A career at Andrie provides the following compensations.</p>
<p>To apply, please email copies of your TWIC, Passport, Driver's License, MMC, and a current resume to: careers@andrie.com. If your credentials meet the requirements for a current vacancy we will contact you with an application.</p>
<p>We look forward to sailing with you!</p>
      </Zone>
    </div>
  </Layout>
)

export default IndexPage
