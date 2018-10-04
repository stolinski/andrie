import { applyStyleModifiers } from 'styled-components-modifiers'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { blue } from './colors'

const MODIFIER_ZONE = {
  dark: () => `
    border-color: ${blue};
    color: ${blue};
  `,
  center: () => `
    text-align: center;
  `,
}

export const Button = styled(Link)`
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  padding: 10px 20px;
  border: solid 1px white;
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
  ${applyStyleModifiers(MODIFIER_ZONE)};
`
