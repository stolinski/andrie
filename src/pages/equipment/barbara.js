import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'
import { Zone, BoxWrapper, Box, Button, Grid } from '../../elements'

const EquipmentPage = () => (
  <Layout>
    <div>
      <Zone modifiers={['solid', 'hero']}>
        <EquipHeading>
          <h3>Tugboats</h3>
        </EquipHeading>
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
