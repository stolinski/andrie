import React from 'react'
import styled from 'styled-components'
import { StaticQuery } from 'gatsby'
import Layout from '../components/Layout'
import { Zone, above } from '../elements'

import hero from '../images/Home-HeroSpace.jpg'
import rebecca from '../images/Rebecca-Lynn-5-17-15-BRW-1.jpg'
import barbara from '../images/barbara.jpg'
import ice from '../images/DSC_0266.jpg'

const JobsPage = () => (
  <StaticQuery
    query={graphql`
      query {
        wordpressPage(slug: { eq: "jobs" }) {
          content
          title
        }
      }
    `}
    render={({ wordpressPage }) => (
      <Layout>
        <Zone modifiers={['dark', 'solid']} hero={true} image={hero}>
          <JobsLayout>
            <JobsImageCol>
              <img src={ice} alt="" />
              <img src={barbara} alt="" />
              <img src={rebecca} alt="" />
            </JobsImageCol>
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
    )}
  />
)

export default JobsPage

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
  img {
    margin-bottom: 2rem;
  }
`
