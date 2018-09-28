import { applyStyleModifiers } from 'styled-components-modifiers'
import styled from 'styled-components'
import { darkBlue, blue, darkGrey, lightBlue } from './colors'
import { sans } from '../utilities/Type'

const MODIFIER_ZONE = {
  blank: () => `
    background: white;
    color: black;
  `,
  center: () => `
    text-align: center;
  `,
  hero: () => `
    padding-top: calc(130px + 10rem);
    margin-top: -130px;
  `,
  right: () => `
    .zone-content {
      width: 60%;
      margin-left: auto;
    }
  `,
  left: () => `
    .zone-content {
      width: 60%;
      margin-right: auto;
    }
  `,
  short: () => `
    padding: 6rem 10%;
  `,
  solid: () => `
    background: ${blue};
    transition: none;
  `,
  pale: () => `
    background: ${lightBlue};
  `,
  grey: () => `
    background: ${darkGrey};
    color: #333;
  `,
}

export const Zone = styled.section`
  margin-bottom: 10px;
  padding: 14rem 10%;
  color: white;
  position: relative;
  h2 {
    text-tranform: uppercase;
  }
  p {
    margin-bottom: 4rem;
  }
  ${applyStyleModifiers(MODIFIER_ZONE)};
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    background: ${darkBlue};
    z-index: -1;
    transition: 0.3s all ease;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-size: cover;
    ${({ image }) =>
      image &&
      `
      background-image: url(${image});
  `};
  }
  &:hover {
    &:before {
      opacity: 0.7;
    }
  }
`

export const Box = styled.div`
  padding: 7%;
  width: 50%;
  text-align: center;
  color: white;
  position: relative;
  display: flex;
  .box-inner {
    border: solid 1px white;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 14%;
    transition: 0.6s all ease;
  }
  &:hover {
    .box-inner {
      transform: scale(1.1);
    }
  }
  &:last-child {
    margin-left: 10px;
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${darkBlue};
    opacity: 0.8;
    z-index: -1;
    transition: 0.3s all ease;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-size: cover;
    ${({ image }) =>
      image &&
      `
      background-image: url(${image});
    `};
  }
  &:hover {
    &:before {
      opacity: 0.7;
    }
  }
`

export const BoxWrapper = styled.section`
  display: flex;
  margin-bottom: 10px;
`

export const FormBox = styled.section`
  background: ${darkGrey};
  padding: 5rem 25%;
  text-align: center;
  h3 {
    color: white;
  }
  p {
    font-size: 1rem;
    ${sans()};
  }
`
