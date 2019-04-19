import React from 'react'
import { StaticQuery } from 'gatsby'
import styled from 'styled-components'
import { Zone, above } from '../elements'

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
      return (
        <Zone modifiers={['blank', 'center', 'short']}>
          <MembershipGrid>
            {allWordpressWpMembership.edges.map(membership => (
              <img
                alt={membership.node.title}
                src={
                  membership.node.featured_media.localFile.childImageSharp
                    .resize.src
                }
              />
            ))}
          </MembershipGrid>
        </Zone>
      )
    }}
  />
)

const MembershipGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  img {
    flex-shrink: 0;
    margin: 0 auto;
    width: 25%;
    display: block;
    align-self: center;
  }
  ${above.med`
    > * {
      width: 49%;
      text-align: left;
    }
  `};
`

export default Memberships
