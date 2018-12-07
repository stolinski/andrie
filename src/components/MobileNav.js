import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { lightBlue, above, blue, below } from '../elements'

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
    label: 'Services & Sites',
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
    const {toggle} = this.props;
    return (
      <Navigation>
      <>
      <NavButton onClick={toggle} style={{margin: "0 auto 1rem", display: "block"}}>
        Close Menu
      </NavButton>
        {Links.map(({ link, label }) => (
          <Link activeClassName="active" to={link}>
            {label}
          </Link>
        ))}
      </>
      </Navigation>
    )
  }
}

const Navigation = styled.nav`
    background: ${blue};
    color: white;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    padding: 2rem 5%;
    z-index: 10;
    a {
      display: block;
      font-weight: bold;
      font-size: 24px;
      color: white;
      margin-bottom: 2rem;
      text-decoration: none;
    }
`
const NavButton = styled.button`
    ${above.med`
      display: none;
    `}
`;
