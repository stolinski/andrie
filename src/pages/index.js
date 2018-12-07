import React from 'react'
import { Link, StaticQuery } from 'gatsby'
import styled from 'styled-components'
import Slider from 'react-slick'
import Newsletter from '../components/Newsletter'
import Layout from '../components/Layout'
import { Zone, BoxWrapper, Box, Button, SplitLayout, above } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'
import greatLakes from '../images/greatlakes-background.jpg'
import barbara from '../images/barbara.jpg'
import waves from '../images/SarahAndrie-makingwaves.jpg'
import community from '../images/Andrie-biking-community.jpg'
import asphaltinstitute from '../images/asphaltinstitute.jpg'

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
              <Button to="/company">About Andrie</Button>
            </div>
          </Zone>
          <Zone modifiers={['noOverlay']} left={true} image={greatLakes}>
            <div className="zone-content">
              <h2>{wordpressPage.acf.zones_page[1].heading}</h2>
              <div
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
                <EquipItem to={'/equipment/barbara'}>
                  <div>
                    <img src={barbara} />
                    <div className="text-overlay">
                      <h6>Barbara Andrie</h6>
                    </div>
                  </div>
                </EquipItem>
                <EquipItem to={'/equipment/barbara'}>
                  <div>
                    <img src={barbara} />
                    <div className="text-overlay">
                      <h6>Barbara Andrie</h6>
                    </div>
                  </div>
                </EquipItem>
                <EquipItem to={'/equipment/barbara'}>
                  <div>
                    <img src={barbara} />
                    <div className="text-overlay">
                      <h6>Barbara Andrie</h6>
                    </div>
                  </div>
                </EquipItem>
                <EquipItem to={'/equipment/barbara'}>
                  <div>
                    <img src={barbara} />
                    <div className="text-overlay">
                      <h6>Barbara Andrie</h6>
                    </div>
                  </div>
                </EquipItem>
                <EquipItem to={'/equipment/barbara'}>
                  <div>
                    <img src={barbara} />
                    <div className="text-overlay">
                      <h6>Barbara Andrie</h6>
                    </div>
                  </div>
                </EquipItem>
                <EquipItem to={'/equipment/barbara'}>
                  <div>
                    <img src={barbara} />
                    <div className="text-overlay">
                      <h6>Barbara Andrie</h6>
                    </div>
                  </div>
                </EquipItem>
                <EquipItem to={'/equipment/barbara'}>
                  <div>
                    <img src={barbara} />
                    <div className="text-overlay">
                      <h6>Barbara Andrie</h6>
                    </div>
                  </div>
                </EquipItem>
                <EquipItem to={'/equipment/barbara'}>
                  <div>
                    <img src={barbara} />
                    <div className="text-overlay">
                      <h6>Barbara Andrie</h6>
                    </div>
                  </div>
                </EquipItem>
              </Slider>
            </div>
            <Button to="/equipment" modifiers={['dark']}>
              View All Equipment
            </Button>
          </Zone>
          <Zone left={true} image={barbara}>
            <div className="zone-content">
              <h2>{wordpressPage.acf.zones_page[2].heading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: wordpressPage.acf.zones_page[2].paragraph,
                }}
              />
              <Button to="/safety">Safety First</Button>
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
          <Zone modifiers={['blank', 'center', 'short']}>
            <MembershipSplit>
              <div>
                <img src={asphaltinstitute} />
              </div>
              <div>
                <h4>Featured Membership</h4>
                <h5>Asphalt Institute</h5>
                <p>Additional text about affiliation Board Member Associated</p>
              </div>
            </MembershipSplit>
          </Zone>
        </div>
      </Layout>
    )}
  />
)

const MembershipSplit = styled(SplitLayout)`
  img {
    margin: 0 auto;
    display: block;
  }
  h5 {
    font-size: 30px;
  }
  p {
    font-size: 16px;
    margin-bottom: 0;
  }
  ${above.med`
    > * {
      width: 50%;
      text-align: left;
    }
  `};
`

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
