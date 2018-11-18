import React from 'react'
import {Link } from 'gatsby'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { Zone, BoxWrapper, Box, Button, Grid, blue, above } from '../../elements'
import barbara from '../../images/barbara-full.jpg'

const EquipmentPage = () => (
  <Layout>
        <EquipHeading>
          <Link to="/equipment">&laquo; Back to main list</Link>
        </EquipHeading>
        <EquipBody bg={barbara}>
          <EquipDetails>
            <h1>Barbara Andrie</h1>
            <p>2000 HP Tugboat</p>
<ul>
<li>
  <span>Length</span> 122'
  </li>
  <li>
  <span>Width</span> 29.6'
  </li>
  <li>
  <span>Power</span> 2,000'
  </li>
  <li>
  <span>Capacity</span> 25,000 gallons
  </li>
</ul>
<h3>For more information, 
please contact:</h3>
<ul>
<li>Name </li>
<li>Phone </li>
<li>Email </li>
<li>Request </li>
</ul>
          </EquipDetails>
        </EquipBody>
  </Layout>
)

export default EquipmentPage

const EquipHeading = styled.div`
  padding: 2rem 5%;
  padding-top: 180px;
  font-size: 14px;
  margin-top: -230px;
  ${above.med`
    margin-top: -130px;
  `};
  a {
    color: white;
    text-transform: uppercase;
  }
  background: ${blue};
`

const EquipBody = styled.div`
  height: 70vh;
  background: ${blue} url(${({bg}) => bg});
  background-size: cover;
  padding: 2rem 5%;
`

const EquipDetails = styled.div`
  background: rgba(0,0,0,0.7);
  width: 400px;
  margin-left: auto;
  color: white;
  padding: 40px;
  h1 {
    font-size: 24px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-bottom: 4px;
    span {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  p {
    margin-top: 0;
  }
  h3 {
    margin: 2rem 0 10px;
    text-transform: uppercase;
    font-size: 16px;
  }
`
