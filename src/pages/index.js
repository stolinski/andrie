import React from 'react'
import Link from 'gatsby-link'
import Newsletter from '../components/Newsletter'
import { Zone, BoxWrapper, Box } from '../elements'

const IndexPage = () => (
  <div>
    <Zone modifiers={['right', 'dark']}>
      <h2>The Midwest’s Premiere Marine services company</h2>
      <p>From the Great Lakes to the Illinois and Mississippi river syst</p>
      <Link className="button">About Andrie</Link>
    </Zone>
    <Zone modifiers={['left']}>
      <h2>connecting the great lakes and beyond since 1988</h2>
      <p>From the Great Lakes to the Illinois and Mississippi river syst</p>
      <Link className="button">Services & Site</Link>
    </Zone>
    <Zone modifiers={['blank', 'center']}>
      <Link className="button">View All Equipment</Link>
    </Zone>
    <Zone modifiers={['left']}>
      <h2>putting our people and the environment first</h2>
      <p>From the Great Lakes to the Illinois and Mississippi river syst</p>
      <Link className="button">Saftey First</Link>
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
