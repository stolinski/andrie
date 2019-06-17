import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import { Zone, above } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'

const GenericPage = ({ data: { wordpressWpOfficer } }) => (
  <Layout>
    <Zone modifiers={['dark', 'solid']} hero={true} image={hero}>
      <JobsLayout>
        <JobsImageCol style={{ textAlign: 'right' }}>
          <Img
            resolutions={
              wordpressWpOfficer.featured_media.localFile.childImageSharp
                .resolutions
            }
          />
        </JobsImageCol>
        <div>
          <h2>{wordpressWpOfficer.title}</h2>
          <p>{wordpressWpOfficer.acf.title}</p>
          <div
            dangerouslySetInnerHTML={{
              __html: wordpressWpOfficer.content,
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
    display: block !important;
    margin: 0 auto 2rem;
  }
`

export const query = graphql`
  query OfficerQuery($slug: String) {
    wordpressWpOfficer(slug: { eq: $slug }) {
      title
      featured_media {
        localFile {
          childImageSharp {
            resolutions(width: 200) {
              ...GatsbyImageSharpResolutions_withWebp_tracedSVG
            }
          }
        }
      }
      content
      acf {
        title
      }
    }
  }
`
