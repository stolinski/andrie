import React, { Component } from 'react'
import styled from 'styled-components'
import { darkGrey, blue } from '../elements'
import { sans } from '../utilities'

export default class Newsletter extends Component {
  render() {
    return (
      <NewsletterWrapper>
        <form action="">
          <input type="text" placeholder="Email Address" />
          <button>Sign Up</button>
        </form>
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
  padding: 5rem 30%;
  text-align: center;
  form {
    background: white;
    display: flex;
    padding: 10px;
    input {
      border: none;
      text-align: left;
      width: 100%;
    }
    button {
      white-space: nowrap;
      text-transform: uppercase;
      padding: 10px;
      border: solid 1px ${blue};
      background: transparent;
    }
  }
  p {
    font-size: 1rem;
    ${sans()};
  }
`
