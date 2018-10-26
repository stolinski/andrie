import React from 'react'
import Layout from '../components/Layout'
import { Zone, Button } from '../elements'

import hero from '../images/safety.jpg'

const IndexPage = () => (
  <Layout>
    <div>
      <Zone modifiers={['right', 'dark']} hero={true} image={hero}>
        <div className="zone-content">
          <h2>Putting our people and the environment first</h2>
          <p>
            From the Great Lakes to the Illinois and Mississippi river systems,
            Andrie is the Midwest’s premiere marine transportation and service
            company. Founded in 1988, we provide a wide range of award-winning
            services to a broad range of customers – from local, national, and
            global corporations to small and medium-sized companies alike.
          </p>
        </div>
        <div className="zone-content zone-content--secondary">
          <h2>Safety First</h2>
          <p>
            From the Great Lakes to the Illinois and Mississippi river systems,
            Andrie is the Midwest’s premiere marine transportation and service
            company. Founded in 1988, we provide a wide range of award-winning
            services to a broad range of customers – from local, national, and
            global corporations to small and medium-sized companies alike.
          </p>
        </div>
      </Zone>
      <Zone modifiers={['solid', 'center', 'short']}>
        <h3>Our Promise</h3>
        <p>
          Andrie strives for efficiency and effectiveness. Our empowered
          employee teams strive to be the benchmark in safety and performance
          across the markets we serve. We value each other, we value our
          dedicated vendors, we value our lasting customer relationships.
        </p>
        <Button modifiers={['dark']}>View All Equipment</Button>
      </Zone>
    </div>
  </Layout>
)

export default IndexPage
