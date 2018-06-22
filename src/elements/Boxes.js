import { applyStyleModifiers } from 'styled-components-modifiers'
import styled, { css } from 'styled-components'
import { blue } from './colors'

const MODIFIER_ZONE = {
  blank: () => `
    background: white;
    color: black;
  `,
  center: () => `
    text-align: center;
  `,
}

export const Zone = styled.section`
  margin-bottom: 10px;
  background: ${blue};
  padding: 5rem 10%;
  color: white;
  h2 {
    text-tranform: uppercase;
  }
  ${applyStyleModifiers(MODIFIER_ZONE)};
`

export const Box = styled.div`
  background: ${blue};
  padding: 19%;
  color: white;
  &:last-child {
    margin-left: 10px;
  }
`

export const BoxWrapper = styled.section`
  display: flex;
  margin-bottom: 10px;
`
