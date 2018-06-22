import React, { Component } from 'react'
import styled from 'styled-components'
import { darkGrey } from '../elements'
import { sans } from '../utilities'

export default class Newsletter extends Component {
  render() {
    return (
      <NewsletterWrapper>
        <input type="text" />
        <p>
          Updates on latest news, events and industry-related topics. Your info
          will not be shared with others.
        </p>
      </NewsletterWrapper>
    )
  }
}

const NewsletterWrapper = styled.section`
  background: ${darkGrey};
  padding: 5rem 10%;
  text-align: center;
  input {
    text-align: left;
  }
  p {
    font-size: 1rem;
    ${sans()};
  }
`
