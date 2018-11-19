import styled from 'styled-components'
import { above } from './breakpoints'

export const Feature = styled.p`
  font-size: 2.25rem;
  line-height: 1.5;
`

export const LargeP = styled.p`
  font-size: 16px;
  ${above.med`
    font-size: 24px;
  `}
`;