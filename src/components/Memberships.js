import React from 'react'
import { StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Zone, SplitLayout, above } from '../elements'

const Memberships = () => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressWpMembership {
          edges {
            node {
              title
              content
              featured_media {
                localFile {
                  childImageSharp {
                    resize(height: 200) {
                      src
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={({ allWordpressWpMembership }) => {
      const randomMembershipIndex = Math.floor(
        Math.random() * allWordpressWpMembership.edges.length
      )
      return (
        <Zone modifiers={['blank', 'center', 'short']}>
          <MembershipSplit>
            <div>
              <img
                src={
                  allWordpressWpMembership.edges[randomMembershipIndex].node
                    .featured_media.localFile.childImageSharp.resize.src
                }
              />
            </div>
            <div>
              <h4>Featured Membership</h4>
              <h5>
                {
                  allWordpressWpMembership.edges[randomMembershipIndex].node
                    .title
                }
              </h5>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    allWordpressWpMembership.edges[randomMembershipIndex].node
                      .content,
                }}
              />
            </div>
          </MembershipSplit>
        </Zone>
      )
    }}
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
      width: 49%;
      text-align: left;
    }
  `};
`

export default Memberships
