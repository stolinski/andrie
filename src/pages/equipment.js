import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Layout from '../components/Layout'
import { Zone, BoxWrapper, Box, Button, Grid } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'
import barbara from '../images/barbara.jpg'

const EquipmentPage = () => (
  <Layout>
    <div>
      <Zone modifiers={['solid', 'hero']} image={hero}>
        <EquipHeading>
          <h3>Tugboats</h3>
        </EquipHeading>
        <Grid>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
        </Grid>
      </Zone>
      <Zone modifiers={['solid', 'pale', 'short']} image={hero}>
        <EquipHeading>
          <h3>Barges</h3>
        </EquipHeading>
        <Grid>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
        </Grid>
      </Zone>
      <Zone modifiers={['solid', 'short']} image={hero}>
        <EquipHeading>
          <h3>Jack-up Barges</h3>
        </EquipHeading>
        <Grid>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
        </Grid>
      </Zone>
      <Zone modifiers={['solid', 'pale', 'short']} image={hero}>
        <EquipHeading>
          <h3>Other Equipment</h3>
        </EquipHeading>
        <Grid>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
          <EquipItem to={'/equipment/barbara'}>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </EquipItem>
        </Grid>
      </Zone>
    </div>
  </Layout>
)

export default EquipmentPage

const EquipHeading = styled.div`
  h3 {
    font-size: 2rem;
    text-transform: uppercase;
  }
  margin-bottom: 2rem;
`

const EquipItem = styled(Link)`
  margin-bottom: 2rem;
  text-decoration: none;
  color: white;
  font-size: 1.4rem;
  img {
    transition: 0.3s ease all;
  }
  &:hover {
    img {
      transform: scale(1.2) translate3d(0, -10px, 0);
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3),
        0px 0px 10px rgba(0, 0, 0, 0.1);
    }
  }
`
