import React, { Component } from 'react'
import styled from 'styled-components'
import { brightBlue, darkBlue } from '../elements'
import { serif } from '../utilities'

import barbara from '../images/barbara.jpg'

const data = [
  {
    year: '1988',
    heading: 'Yo ho ho and a bottle of rum',
    body: 'some paragraph text for fun',
  },
  {
    year: '1980',
    heading: 'Yo ho ho and a bottle of rum',
    body: 'some paragraph text for fun',
  },
]

export default class Everest extends Component {
  state = {
    active: 0,
  }

  prev = () => {
    const { active } = this.state
    if (active > 0) {
      this.setState({
        active: active - 1,
      })
    }
  }

  next = () => {
    const { active } = this.state
    if (active < data.length - 1) {
      this.setState({
        active: active + 1,
      })
    }
  }

  render() {
    const { active } = this.state
    return (
      <TimelineZone>
        <TimelineH>Andrie History</TimelineH>
        <Track>
          <TrackButtons>
            <TrackButton onClick={this.prev}>{left}</TrackButton>
            <TrackButton onClick={this.next}>{right}</TrackButton>
          </TrackButtons>
        </Track>
        <SlideContainer>
          <SlideTrack
            style={{
              width: data.length * 100 + '%',
              transform: 'translate3d(' + active * -100 + 'vw, 0, 0)',
            }}
          >
            {data.map(item => (
              <Slide key={item.year}>
                <div className="img">
                  <img src={barbara} />
                </div>
                <div>
                  <h3>{item.year}</h3>
                  <h4>{item.heading}</h4>
                  <p>{item.body}</p>
                </div>
              </Slide>
            ))}
          </SlideTrack>
        </SlideContainer>
      </TimelineZone>
    )
  }
}

const TimelineZone = styled.section`
  padding: 6rem 0;
  margin-bottom: 10px;
`

const Track = styled.div`
  padding: 0 6%;
  margin: 3rem 0;
`

const TrackButtons = styled.div`
  display: flex;
  justify-content: space-between;
`

const TimelineH = styled.h3`
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
`

const SlideContainer = styled.div`
  overflow: hidden;
`
const SlideTrack = styled.div`
  display: flex;
  transition: 0.3s ease all;
`

const TrackButton = styled.button`
  width: 30px;
  height: 30px;
  display: flex;
  border: none;
  background: ${brightBlue};
`
const Slide = styled.div`
  display: flex;
  width: 100vw;
  padding: 0 3%;
  .img {
    width: 30%;
    margin-right: 20px;
  }
  h3 {
    font-size: 32px;
    color: ${darkBlue};
  }
  h4 {
    font-size: 24px / 36px;
  }
  p {
    font-size: 16px / 26px;
    ${serif()};
  }
`

const left = (
  <svg
    width="15"
    viewBox="0 0 448 438"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M257.5 408.1L235.3 430.3C225.9 439.7 210.7 439.7 201.4 430.3L7 236C-2.4 226.6 -2.4 211.4 7 202.1L201.4 7.70002C210.8 -1.69998 226 -1.69998 235.3 7.70002L257.5 29.9C267 39.4 266.8 54.9 257.1 64.2L136.6 179H424C437.3 179 448 189.7 448 203V235C448 248.3 437.3 259 424 259H136.6L257.1 373.8C266.9 383.1 267.1 398.6 257.5 408.1Z"
      fill="white"
    />
  </svg>
)

const right = (
  <svg
    width="15"
    viewBox="0 0 448 438"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M190.5 29.9L212.7 7.70002C222.1 -1.69998 237.3 -1.69998 246.6 7.70002L441 202C450.4 211.4 450.4 226.6 441 235.9L246.6 430.3C237.2 439.7 222 439.7 212.7 430.3L190.5 408.1C181 398.6 181.2 383.1 190.9 373.8L311.4 259H24C10.7 259 0 248.3 0 235V203C0 189.7 10.7 179 24 179H311.4L190.9 64.2C181.1 54.9 180.9 39.4 190.5 29.9Z"
      fill="white"
    />
  </svg>
)
