import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { darkBlue, lightBlue, above } from '../elements'
import { sans } from '../utilities'

import logo from '../images/andrie_logo-site.svg'

export default class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <FooterNav>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://andrietg.sharepoint.com/employeeportal/_layouts/15/acceptinvite.aspx?invitation=%7B85D90B87-9727-4D23-A8C8-24398DA9549E%7D"
          >
            Employee Portal
          </a>
          <Link to="/jobs">Current Job Openings</Link>
          <Link to="/company">About Andrie</Link>
          <Link to="/contact">Contact</Link>
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
          Andrie Transportation Group ©{new Date().getFullYear()} All Rights
          Reserved.
        </Copywrite>
      </FooterContainer>
    )
  }
}

const FooterContainer = styled.footer`
  background: ${darkBlue};
  padding: 60px;
  text-align: center;
  color: white;
`

const FooterNav = styled.nav`
  margin-bottom: 2rem;
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
  justify-content: center;
  margin-bottom: 1rem;
  li {
    margin: 0;
    padding: 0;
    font-size: 0.875rem;
    text-transform: uppercase;
  }
  ${above.med`
    display: flex;
    li {
      &:after {
        content: '|';
        margin: 0 10px;
      }
      &:last-child:after {
        content: '';
      }
    }
  `}
`

const Copywrite = styled.p`
  font-size: 0.75rem;
  ${sans()};
`
