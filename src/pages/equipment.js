import React from 'react'
import styled from 'styled-components'
import Newsletter from '../components/Newsletter'
import Layout from '../components/Layout'
import { Zone, BoxWrapper, Box, Button, Grid } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'
import greatLakes from '../images/Great-Lakes-blue.png'
import barbara from '../images/barbara.jpg'
import waves from '../images/SarahAndrie-makingwaves.jpg'
import community from '../images/Andrie-biking-community.jpg'

const EquipmentPage = () => (
  <Layout>
    <div>
      <Zone modifiers={['solid', 'hero']} image={hero}>
        <EquipHeading>
          <h3>Tugboats</h3>
        </EquipHeading>
        <Grid>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
        </Grid>
      </Zone>
      <Zone modifiers={['solid', 'pale', 'short']} image={hero}>
        <EquipHeading>
          <h3>Barges</h3>
        </EquipHeading>
        <Grid>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
        </Grid>
      </Zone>
      <Zone modifiers={['solid', 'short']} image={hero}>
        <EquipHeading>
          <h3>Jack-up Barges</h3>
        </EquipHeading>
        <Grid>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
        </Grid>
      </Zone>
      <Zone modifiers={['solid', 'pale', 'short']} image={hero}>
        <EquipHeading>
          <h3>Other Equipment</h3>
        </EquipHeading>
        <Grid>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
          <div>
            <img src={barbara} />
            <h6>Barbara Andrie</h6>
          </div>
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
