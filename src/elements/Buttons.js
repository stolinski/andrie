import { applyStyleModifiers } from 'styled-components-modifiers'
import styled, { css } from 'styled-components'
import Link from 'gatsby-link'
import { blue, rgba } from './colors'

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
  ${applyStyleModifiers(MODIFIER_ZONE)};
`
