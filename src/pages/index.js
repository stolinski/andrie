import React from 'react'
import Link from 'gatsby-link'
import Newsletter from '../components/Newsletter'
import { Zone, BoxWrapper, Box, Button } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'
import greatLakes from '../images/Great-Lakes-blue.png'

const IndexPage = () => (
  <div>
    <Zone modifiers={['right', 'dark', 'hero']} image={hero}>
      <h2>The Midwest’s Premiere Marine services company</h2>
      <p>
        From the Great Lakes to the Illinois and Mississippi river systems,
        Andrie is the Midwest’s premiere marine transportation and service
        company. Founded in 1988, we provide a wide range of award-winning
        services to a broad range of customers – from local, national, and
        global corporations to small and medium-sized companies alike.
      </p>
      <Button>About Andrie</Button>
    </Zone>
    <Zone modifiers={['left']} image={greatLakes}>
      <h2>connecting the great lakes and beyond since 1988</h2>
      <p>
        From our headquarters in Muskegon, Michigan, Andrie serves a diverse
        marine customer base by executing Great Lakes projects and ventures from
        the Atlantic to the Pacific, from Canada to the Gulf of Mexico.
      </p>
      <Button>Services & Site</Button>
    </Zone>
    <Zone modifiers={['blank', 'center']}>
      <Button modifiers={['dark']}>View All Equipment</Button>
    </Zone>
    <Zone modifiers={['left']}>
      <h2>putting our people and the environment first</h2>
      <p>From the Great Lakes to the Illinois and Mississippi river syst</p>
      <Button>Saftey First</Button>
    </Zone>
    <BoxWrapper>
      <Box>
        <h4>andrie making waves</h4>
      </Box>
      <Box>
        <h4>andrie making waves</h4>
      </Box>
    </BoxWrapper>
    <Newsletter />
    <Zone modifiers={['blank', 'center']}>
      <h4>Featured Membership</h4>
    </Zone>
  </div>
)

export default IndexPage
