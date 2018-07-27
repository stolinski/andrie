import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'styled-components'
import Nav from './Nav'

import logo from '../images/andrie_logo-site.svg'

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <h1 style={{ margin: 0 }}>
      <Link
        to="/"
        style={{
          color: 'white',
          textDecoration: 'none',
        }}
      >
        <img src={logo} alt="Andrie Inc." style={{ width: '200px' }} />
      </Link>
    </h1>
    <Nav />
  </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.header`
  height: 130px;
  padding: 20px 10%;
  display: flex;
  justify-content: space-between;
`
