import React from 'react'
import Layout from '../components/Layout'
import { Zone, Button, LargeP } from '../elements'

import hero from '../images/safety.jpg'

const IndexPage = () => (
  <Layout>
    <div>
      <Zone modifiers={['dark']} right={true} hero={true} image={hero}>
      <div className="zone-content">
        <h2>Safety First</h2>
        <p>We strongly believe that safety strengthens our organization and improves the quality of life for our employees and customers. Safety is our #1 priority. We want everyone to go home safe at the end of each day.</p>
        <p>As a member of the A team, we expect everyone to contribute to improve our safety culture. We strive to affirmatively abide by these 5 statements in order to help us strengthen our safety culture.</p>
        <ol>
          <li>I must assess and control risks before starting any task.</li>
          <li>I must only perform activities for which I am authorized.</li>
          <li>I must never override or misuse health and safety devices.</li>
          <li>I must always use the required PPE.</li>
          <li>I must never work under the influence of alcohol or drugs</li>
        </ol>
        </div>
      </Zone>
      <Zone modifiers={['solid', 'center', 'short']}>
        <h3>First Choice</h3>
        <LargeP>
        Our mission at Andrie is to empower our employees to server in a safe, cost effective and environmentally sound manner. In order to achieve this we have made the promise to be the company of First Choice.</LargeP>
        <LargeP>
        Andrie strives to be the company of First Choice for our employees, customers and our unique ecosystem that we operate within. We believe in achieving this we all leave the world in a better place for our future generations.</LargeP> 
      </Zone>
    </div>
  </Layout>
)

export default IndexPage
