import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { Zone, Grid } from '../elements'
import hero from '../images/Home-HeroSpace.jpg'

const EquipmentPage = () => (
  <Layout>
    <StaticQuery
      query={graphql`
        query Equipment {
          allWordpressWpEquipment {
            edges {
              node {
                title
                slug
                featured_media {
                  localFile {
                    childImageSharp {
                      fluid(maxWidth: 400) {
                        ...GatsbyImageSharpFluid_tracedSVG
                      }
                    }
                  }
                }
                acf {
                  type
                }
              }
            }
          }
        }
      `}
      render={({ allWordpressWpEquipment }) => (
        <div>
          <Zone modifiers={['solid']} hero={true} image={hero}>
            <EquipHeading>
              <h3>Tugboats</h3>
            </EquipHeading>
            <Grid>
              {allWordpressWpEquipment.edges
                .filter(item => item.node.acf.type === 'tugboat')
                .map(({ node }) => (
                  <EquipItem to={`/equipment/${node.slug}`}>
                    <Img
                      fluid={
                        node.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                    <h6>{node.title}</h6>
                  </EquipItem>
                ))}
            </Grid>
          </Zone>
          <Zone modifiers={['solid', 'pale', 'short']} image={hero}>
            <EquipHeading>
              <h3>Barges</h3>
            </EquipHeading>
            <Grid>
              {allWordpressWpEquipment.edges
                .filter(item => item.node.acf.type === 'barge')
                .map(({ node }) => (
                  <EquipItem to={`/equipment/${node.slug}`}>
                    <Img
                      fluid={
                        node.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                    <h6>{node.title}</h6>
                  </EquipItem>
                ))}
            </Grid>
          </Zone>
          <Zone modifiers={['solid', 'short']} image={hero}>
            <EquipHeading>
              <h3>Jack-up Barges</h3>
            </EquipHeading>
            <Grid>
              {allWordpressWpEquipment.edges
                .filter(item => item.node.acf.type === 'jackup')
                .map(({ node }) => (
                  <EquipItem to={`/equipment/${node.slug}`}>
                    <Img
                      fluid={
                        node.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                    <h6>{node.title}</h6>
                  </EquipItem>
                ))}
            </Grid>
          </Zone>
          <Zone modifiers={['solid', 'pale', 'short']} image={hero}>
            <EquipHeading>
              <h3>Other Equipment</h3>
            </EquipHeading>
            <Grid>
              {allWordpressWpEquipment.edges
                .filter(item => item.node.acf.type === 'other')
                .map(({ node }) => (
                  <EquipItem to={`/equipment/${node.slug}`}>
                    <Img
                      fluid={
                        node.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                    <h6>{node.title}</h6>
                  </EquipItem>
                ))}
            </Grid>
          </Zone>
        </div>
      )}
    />
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
  .gatsby-image-wrapper {
    margin-bottom: 1rem;
    transition: 0.3s ease all;
  }
  &:hover {
    .gatsby-image-wrapper {
      transform: scale(1.2) translate3d(0, -10px, 0);
      box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3),
        0px 0px 10px rgba(0, 0, 0, 0.1);
    }
  }
`
