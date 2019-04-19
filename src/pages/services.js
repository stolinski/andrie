import React from 'react'
import { StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import Map from '../components/StaticMap'
import { Zone, LargeP } from '../elements'

import hero from '../images/A410-fleet.jpg'

const ServicesPage = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressPage(slug: { eq: "services" }) {
          slug
          acf {
            zones_page {
              heading
              paragraph
            }
          }
        }
      }
    `}
    render={({ wordpressPage }) => (
      <Layout>
        <div>
          <Zone modifiers={['dark']} right={true} hero={true} image={hero}>
            <div className="zone-content">
              <h2>{wordpressPage.acf.zones_page[0].heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.acf.zones_page[0].paragraph,
                }}
              />
            </div>
            <div className="zone-content zone-content--secondary">
              <h2>{wordpressPage.acf.zones_page[1].heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.acf.zones_page[1].paragraph,
                }}
              />
            </div>
          </Zone>
          <Zone modifiers={['solid', 'center', 'short', 'grey']} largep>
            <h3>{wordpressPage.acf.zones_page[2].heading}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: wordpressPage.acf.zones_page[2].paragraph,
              }}
            />
          </Zone>
          <Map />
        </div>
      </Layout>
    )}
  />
)

export default ServicesPage
