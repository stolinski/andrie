import styled from 'styled-components'
import { above } from './breakpoints'

export const SplitLayout = styled.div`
  ${above.med`
    display: flex;
    justify-content: space-between;
  `};
`

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  > * {
    margin-right: 2%;
    width: 23%;
    &:nth-child(4) {
      margin-right: 0;
    }
  }
`
