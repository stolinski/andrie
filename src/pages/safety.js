import React from 'react'
import { StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import { Zone } from '../elements'

import hero from '../images/safety.jpg'

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressPage(slug: { eq: "safety" }) {
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
          </Zone>
          <Zone modifiers={['solid', 'center', 'short']} largep={true}>
            <h3>{wordpressPage.acf.zones_page[1].heading}</h3>
            <div
              dangerouslySetInnerHTML={{
                __html: wordpressPage.acf.zones_page[1].paragraph,
              }}
            />
          </Zone>
        </div>
      </Layout>
    )}
  />
)

export default IndexPage
