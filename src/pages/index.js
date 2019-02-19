import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'
import Slider from 'react-slick'
import Newsletter from '../components/Newsletter'
import Layout from '../components/Layout'
import Memberships from '../components/Memberships'
import { Zone, BoxWrapper, Box, Button } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'
import greatLakes from '../images/greatlakes-background.jpg'
import barbara from '../images/barbara.jpg'

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressPage(slug: { eq: "home" }) {
          slug
          acf {
            zones_page {
              heading
              paragraph
            }
          }
        }
        allWordpressWpHomepageLinks {
          edges {
            node {
              title
              content
              featured_media {
                source_url
              }
              acf {
                page_link
              }
            }
          }
        }
        allWordpressWpEquipment(limit: 10, sort: { fields: [acf___weight] }) {
          edges {
            node {
              title
              slug
              featured_media {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 400, maxHeight: 220, cropFocus: CENTER) {
                      ...GatsbyImageSharpFluid_tracedSVG
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({
      wordpressPage,
      allWordpressWpHomepageLinks,
      allWordpressWpEquipment,
    }) => {
      return (
        <Layout>
          <div>
            <Zone modifiers={['dark']} right={true} hero={true} image={hero}>
              <div className="zone-content">
                <h2>{wordpressPage.acf.zones_page[0].heading}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: wordpressPage.acf.zones_page[0].paragraph,
                  }}
                />
                <Button to="/company">About Andrie</Button>
              </div>
            </Zone>
            <Zone modifiers={['noOverlay']} left={true} image={greatLakes}>
              <div className="zone-content">
                <h2>{wordpressPage.acf.zones_page[1].heading}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: wordpressPage.acf.zones_page[1].paragraph,
                  }}
                />
                <Button to="/services">Services & Sites</Button>
              </div>
            </Zone>
            <Zone modifiers={['blank', 'center', 'short']} fullWidth={true}>
              <div style={{ marginBottom: '2rem' }}>
                <Slider {...settings}>
                  {allWordpressWpEquipment.edges
                    .map(a => ({ sort: Math.random(), value: a }))
                    .sort((a, b) => a.sort - b.sort)
                    .map(a => a.value)
                    .map(({ node }) => (
                      <EquipItem to={`/equipment/${node.slug}`}>
                        <div>
                          <Img
                            fluid={
                              node.featured_media.localFile.childImageSharp
                                .fluid
                            }
                          />
                          <div className="text-overlay">
                            <h6>{node.title}</h6>
                          </div>
                        </div>
                      </EquipItem>
                    ))}
                </Slider>
              </div>
              <Button to="/equipment" modifiers={['dark']}>
                View All Equipment
              </Button>
            </Zone>
            <Zone left={true} image={barbara}>
              <div className="zone-content">
                <h2>{wordpressPage.acf.zones_page[2].heading}</h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: wordpressPage.acf.zones_page[2].paragraph,
                  }}
                />
                <Button to="/safety">Safety First</Button>
              </div>
            </Zone>
            <BoxWrapper>
              {allWordpressWpHomepageLinks.edges.map(({ node }) => (
                <Box
                  key={node.slug}
                  image={node.featured_media.source_url}
                  to={node.acf.page_link.replace(
                    /https:\/\/andrieapi.com/g,
                    ''
                  )}
                >
                  <div className="box-inner">
                    <h4>{node.title}</h4>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: node.content,
                      }}
                    />
                  </div>
                </Box>
              ))}
            </BoxWrapper>
            <Newsletter />
            <Memberships />
          </div>
        </Layout>
      )
    }}
  />
)

const EquipItem = styled(Link)`
  padding: 0 10px;
  div {
    position: relative;
  }
  .text-overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(09, 24, 39, 0.81);
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    opacity: 0;
    transition: 0.3s ease all;
  }
  &:hover {
    .text-overlay {
      opacity: 1;
    }
  }
  h6 {
    color: white;
    font-size: 20px;
  }
  img {
    margin: 0;
  }
`

export default IndexPage
