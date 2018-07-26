import { applyStyleModifiers } from 'styled-components-modifiers'
import styled, { css } from 'styled-components'
import { blue, rgba } from './colors'

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
}

export const Zone = styled.section`
  margin-bottom: 10px;
  ${'' /* background: ${rgba(blue, 0.4)}; */}
  ${'' /* background: ${rgba(blue, 1)}; */}
  padding: 16rem 10%;
  color: white;
  position: relative;
  h2 {
    text-tranform: uppercase;
  }
  ${applyStyleModifiers(MODIFIER_ZONE)};
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${rgba(blue, 1)};
    z-index: -2;
  }
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    z-index: -1;
    background-size: cover;
    ${({ image }) =>
      image &&
      `
      background-image: url(${image});
  `};
`

export const Box = styled.div`
  background: ${blue};
  padding: 19%;
  width: 50%;
  color: white;
  &:last-child {
    margin-left: 10px;
  }
`

export const BoxWrapper = styled.section`
  display: flex;
  margin-bottom: 10px;
`
