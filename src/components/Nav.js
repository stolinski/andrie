import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { lightBlue, above } from '../elements'

const Links = [
  {
    link: 'safety',
    label: 'Safety',
  },
  {
    link: 'company',
    label: 'Company',
  },
  {
    link: 'services',
    label: 'services & sites',
  },
  {
    link: 'equipment',
    label: 'Equipment',
  },
  {
    link: 'jobs',
    label: 'Jobs',
  },
  {
    link: 'contact',
    label: 'Contact',
  },
]

export default class Nav extends Component {
  render() {
    return (
      <Navigation>
        {Links.map(({ link, label }) => (
          <Link activeClassName="active" to={link}>
            {label}
          </Link>
        ))}
      </Navigation>
    )
  }
}

const Navigation = styled.nav`
  display: none;
  ${above.med`
    margin-left: 50px;
    display: flex;
    flex: 1;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;
    a {
      font-size: 0.8rem;
      color: white;
      text-transform: uppercase;
      text-decoration: none;
      font-weight: bold;
      border-bottom: solid 4px transparent;
      transition: 0.3s ease border;
      &:hover,
      &.active {
        border-bottom: solid 4px ${lightBlue};
      }
    }
  `}
`
