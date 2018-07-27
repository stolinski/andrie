import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { darkBlue, lightBlue } from '../elements'
import { serif, sans } from '../utilities'

import logo from '../images/andrie_logo-site.svg'

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <FooterNav>
          <a href="#">Current Job Openings</a>
          <a href="#">About Andrie</a>
          <a href="#">Contact</a>
          <a href="#">Linkedin</a>
          <a href="#">For Employees</a>
        </FooterNav>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <img src={logo} alt="Andrie Inc." style={{ width: '200px' }} />
        </Link>
        <ContactInfo>
          <li>561 E. Western Avenue</li>
          <li>Muskegon, MI 49442</li>
          <li>phone 231.728.2226 toll free 800.722.2421</li>
        </ContactInfo>
        <Copywrite>
          Andrie Transportation Group © 2018 All Rights Reserved.
        </Copywrite>
      </FooterContainer>
    )
  }
}

const FooterContainer = styled.footer`
  background: ${darkBlue};
  padding: 20px;
  text-align: center;
  color: white;
`

const FooterNav = styled.nav`
  margin-bottom: 1rem;
  a {
    text-transform: uppercase;
    color: ${lightBlue};
    font-size: 1rem;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
    &:after {
      color: ${lightBlue};
      content: '|';
      margin: 0 10px;
    }
    &:last-child:after {
      content: '';
    }
  }
`
const ContactInfo = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  li {
    margin: 0;
    padding: 0;
    font-size: 0.875rem;
    text-transform: uppercase;
    &:after {
      content: '|';
      margin: 0 10px;
    }
    &:last-child:after {
      content: '';
    }
  }
`

const Copywrite = styled.p`
  font-size: 0.75rem;
  ${sans()};
`
