import React from 'react'
import Newsletter from '../components/Newsletter'
import Layout from '../components/Layout'
import { Zone, BoxWrapper, Box, Button } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'
import greatLakes from '../images/greatlakes-background.jpg'
import barbara from '../images/barbara.jpg'
import waves from '../images/SarahAndrie-makingwaves.jpg'
import community from '../images/Andrie-biking-community.jpg'

const IndexPage = () => (
  <Layout>
    <div>
      <Zone modifiers={['right', 'dark', 'hero']} image={hero}>
        <div className="zone-content">
          <h2>The Midwest’s Premiere Marine services company</h2>
          <p>
            From the Great Lakes to the Illinois and Mississippi river systems,
            Andrie is the Midwest’s premiere marine transportation and service
            company. Founded in 1988, we provide a wide range of award-winning
            services to a broad range of customers – from local, national, and
            global corporations to small and medium-sized companies alike.
          </p>
          <Button to="/company">About Andrie</Button>
        </div>
      </Zone>
      <Zone modifiers={['left', 'noOverlay']} image={greatLakes}>
        <div className="zone-content">
          <h2>connecting the great lakes and beyond since 1988</h2>
          <p>
            From our headquarters in Muskegon, Michigan, Andrie serves a diverse
            marine customer base by executing Great Lakes projects and ventures
            from the Atlantic to the Pacific, from Canada to the Gulf of Mexico.
          </p>
          <Button to="/services">Services & Site</Button>
        </div>
      </Zone>
      <Zone modifiers={['blank', 'center', 'short']}>
        <Button modifiers={['dark']}>View All Equipment</Button>
      </Zone>
      <Zone modifiers={['left']} image={barbara}>
        <div className="zone-content">
          <h2>putting our people and the environment first</h2>
          <p>
            From our headquarters in Muskegon, Michigan, Andrie serves a diverse
            marine customer base by executing Great Lakes projects and ventures
            from the Atlantic to the Pacific, from Canada to the Gulf of Mexico.
          </p>
          <Button>Saftey First</Button>
        </div>
      </Zone>
      <BoxWrapper>
        <Box image={waves}>
          <div className="box-inner">
            <h4>andrie making waves</h4>
            <p>New & Seaworthy</p>
          </div>
        </Box>
        <Box image={community}>
          <div className="box-inner">
            <h4>In the community</h4>
            <p>New & Seaworthy</p>
          </div>
        </Box>
      </BoxWrapper>
      <Newsletter />
      <Zone modifiers={['blank', 'center']}>
        <h4>Featured Membership</h4>
      </Zone>
    </div>
  </Layout>
)

export default IndexPage
