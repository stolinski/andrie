import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Nav from './Nav'
import MobileNav from './MobileNav'
import { above, Button, blue, Toggle } from '../elements'

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
        <img
          src={logo}
          alt="Andrie Inc."
          style={{ height: '120px', marginBottom: 0 }}
        />
      </Link>
    </h1>
    <Toggle>
      {({ on, toggle }) => (
        <>
          <button style={{ marginTop: '1rem' }} onClick={toggle}>
            Menu
          </button>
          {on && <MobileNav toggle={toggle} />}
        </>
      )}
    </Toggle>
    <Nav />
  </HeaderWrapper>
)

export default Header

const HeaderWrapper = styled.header`
  height: 230px;
  padding: 20px 10%;
  display: flex;
  z-index: 100;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${above.med`
    height: 130px;
    flex-direction: row;
    justify-content: space-between;
    button {
      display: none;
    }
  `}
  button {
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    z-index: 1;
    padding: 10px 20px;
    border: solid 1px white;
    background: transparent;
    position: relative;
    transition: all 0.3s;
    &:after {
      content: '';
      position: absolute;
      z-index: -1;
      transition: all 0.3s;
      width: 0%;
      height: 100%;
      top: 0;
      left: 0;
      background: #fff;
    }
    &:hover {
      color: ${blue};
      &:after {
        width: 100%;
      }
    }
  }
`
