import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Links = [
  'safety',
  'company',
  'services & sites',
  'equipment',
  'jobs',
  'contact',
]

export default class Nav extends Component {
  render() {
    return (
      <Navigation>
        {Links.map(link => (
          <Link to={link}>{link}</Link>
        ))}
      </Navigation>
    )
  }
}

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 50px;
  margin-left: 100px;
  a {
    font-size: 0.8rem;
    color: white;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
  }
`
