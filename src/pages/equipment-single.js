import React from 'react'
import { Link, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { blue, above } from '../elements'

const EquipmentPage = ({ data: { wordpressWpEquipment } }) => (
  <Layout>
    <EquipHeading>
      <Link to="/equipment">&laquo; Back to main list</Link>
    </EquipHeading>
    <EquipBody>
      <Img
        fluid={
          wordpressWpEquipment.featured_media.localFile.childImageSharp.fluid
        }
      />
      <EquipDetails>
        <h1>{wordpressWpEquipment.title}</h1>
        <p>{wordpressWpEquipment.acf.subheading}</p>
        <ul>
          {wordpressWpEquipment.acf.length && (
            <li>
              <span>Length</span> {wordpressWpEquipment.acf.length}
            </li>
          )}
          {wordpressWpEquipment.acf.width && (
            <li>
              <span>Width</span> {wordpressWpEquipment.acf.width}
            </li>
          )}
          {wordpressWpEquipment.acf.power && (
            <li>
              <span>Power</span> {wordpressWpEquipment.acf.power}
            </li>
          )}
          {wordpressWpEquipment.acf.capacity && (
            <li>
              <span>Capacity</span> {wordpressWpEquipment.acf.capacity}
            </li>
          )}
        </ul>
        <h3>For more information, please contact:</h3>
        <ul>
          <li>Name Mike Caliendo</li>
          <li>Phone 231.332.9243</li>
          <li>Email mikecaliendo@andrie.com</li>
        </ul>
      </EquipDetails>
    </EquipBody>
  </Layout>
)

export default EquipmentPage

const EquipHeading = styled.div`
  padding: 2rem 5%;
  font-size: 14px;
  padding-top: 220px;
  margin-top: -230px;
  ${above.med`
    padding-top: 180px;
    margin-top: -130px;
  `};
  a {
    color: white;
    text-transform: uppercase;
  }
  background: ${blue};
`

const EquipBody = styled.div`
  background: ${blue} url(${({ bg }) => bg});
  .gatsby-image-wrapper {
    width: 100%;
  }
  ${above.med`
    display: flex;
  `}
`

const EquipDetails = styled.div`
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 40px;
  ${above.med`
    max-width: 400px;
    margin-left: auto;
  `}
  h1 {
    font-size: 24px;
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    margin-bottom: 4px;
    span {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  p {
    margin-top: 0;
  }
  h3 {
    margin: 2rem 0 10px;
    text-transform: uppercase;
    font-size: 16px;
  }
`

export const query = graphql`
  query EquipmentQuery($slug: String) {
    wordpressWpEquipment(slug: { eq: $slug }) {
      title
      slug
      featured_media {
        localFile {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      acf {
        type
        subheading
        width
        power
        length
        capacity
      }
    }
  }
`
