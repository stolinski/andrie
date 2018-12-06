import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Map from '../components/Map'
import { Zone, BoxWrapper, Box, LargeP } from '../elements'

import hero from '../images/A410-fleet.jpg'
import waves from '../images/SarahAndrie-makingwaves.jpg'
import locations from '../images/locations.svg'

const IndexPage = () => (
  <Layout>
    <div>
      <Zone modifiers={['dark']} right={true} hero={true} image={hero}>
        <div className="zone-content">
          <h2>Marine Transportation</h2>
          <p>
            Andrie's Marine Transportation Group offers efficient, reliable and
            safe transportation of a variety of cargo ranging from petroleum
            products to cement in addition to providing vessel management
            services, lightering, icebreaking, and towing.
          </p>
        </div>
        <div className="zone-content zone-content--secondary">
          <h2>Specialized Charters</h2>
          <p>
            Andrie's Specialized Marine Solutions Group will work to meet your
            unique needs. We charter equipment for the marine environment
            including jack-up barges, tugboats, and cranes. If you have other
            specialized needs please contact us directly.
          </p>
        </div>
      </Zone>
      <BoxWrapper>
        <Box image={waves} />
        <div className="box-inner">
          <h4>Additional Services</h4>
        </div>
      </BoxWrapper>
      <Zone modifiers={['solid', 'center', 'short', 'grey']}>
        <h3>Sites & Job Locations</h3>
        <LargeP>
          With its corporate headquarters in Muskegon, Michigan, Andrie
          transportation routes cover a vast area throughout the Great Lakes and
          Seaway region, the Illinois and Mississippi river systems and beyond.
          From Chicago to Duluth to Montreal, the East Coast to the Gulf Coast,
          our marine transportation success ranks Andrie as the industry leader.
          To learn more about Andrie’s transportation services, we invite you to
          cruise around the map. Enjoy your trip.
        </LargeP>
      </Zone>
      <Map />
    </div>
  </Layout>
)

export default IndexPage;