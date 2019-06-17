import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { Zone, above } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'

const GenericPage = ({ data: { wordpressPage } }) => (
  <Layout>
    <Zone modifiers={['dark', 'solid']} hero={true} image={hero}>
      <JobsLayout>
        {/* <JobsImageCol>
          {wordpressPage.acf.images &&
            wordpressPage.acf.images.map(({ image }) => (
              <Img fluid={image.localFile.childImageSharp.fluid} />
            ))}
        </JobsImageCol> */}
        <div>
          <h2>{wordpressPage.title}</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: wordpressPage.content,
            }}
          />
        </div>
      </JobsLayout>
    </Zone>
  </Layout>
)

export default GenericPage

const JobsLayout = styled.div`
  ${above.med`
    display: flex;
    > *:first-child {
      width: 40%;
      margin-right: 5%;
    }
    > *:nth-child(2) {
      flex: 1;
    }  
  `}
`

const JobsImageCol = styled.div`
  img,
  .gatsby-image-wrapper {
    margin-bottom: 2rem;
  }
`

export const query = graphql`
  query GenericQuery($slug: String) {
    wordpressPage(slug: { eq: $slug }) {
      content
      title
      acf {
        images {
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 1000) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`
