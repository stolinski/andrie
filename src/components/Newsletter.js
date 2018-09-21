import React, { Component } from 'react'
import styled from 'styled-components'
import { FormBox, blue } from '../elements'

export default class Newsletter extends Component {
  render() {
    return (
      <FormBox>
        <form action="">
          <input type="text" placeholder="Email Address" />
          <button>Sign Up</button>
        </form>
        <p>
          Updates on latest news, events and industry-related topics. Your info
          will not be shared with others.
        </p>
      </FormBox>
    )
  }
}

const NewsletterForm = styled.form`
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
`
