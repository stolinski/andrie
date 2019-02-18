import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { StaticQuery } from 'gatsby'
import { brightBlue, blue } from '../elements'
import { serif } from '../utilities'

export default class EverestWrapper extends Component {
  render() {
    return (
      <StaticQuery
        query={graphql`
          query {
            allWordpressWpTimeline(sort: { fields: [acf___year] }) {
              edges {
                node {
                  title
                  content
                  acf {
                    year
                  }
                  featured_media {
                    localFile {
                      childImageSharp {
                        fluid(maxWidth: 400) {
                          ...GatsbyImageSharpFluid_tracedSVG
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allWordpressWpTimeline }) => (
          <Everest data={allWordpressWpTimeline.edges} />
        )}
      />
    )
  }
}

class Everest extends Component {
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
    const { data } = this.props
    if (active < data.length - 1) {
      this.setState({
        active: active + 1,
      })
    }
  }

  render() {
    const { active } = this.state
    const { data } = this.props
    return (
      <TimelineZone>
        <TimelineH>Andrie History</TimelineH>
        <TrackWrapper>
          <Track>
            <TrackLineContainer>
              <TrackLine />
              <TrackDots
                style={{
                  transform: `translate3d(${active * 32 * -1}%, 0, 0)`,
                }}
              >
                {data.map(({ node }, index) => (
                  <TrackDotWrapper>
                    <TrackDotsYear active={active === index}>
                      {node.acf.year}
                    </TrackDotsYear>
                    <TrackDot
                      onClick={() =>
                        this.setState({
                          active: index,
                        })
                      }
                      key={index}
                    />
                  </TrackDotWrapper>
                ))}
              </TrackDots>
            </TrackLineContainer>
            <TrackButtons>
              <TrackButton onClick={this.prev}>{left}</TrackButton>
              <TrackButton onClick={this.next}>{right}</TrackButton>
            </TrackButtons>
          </Track>
        </TrackWrapper>
        <SlideContainer>
          <SlideTrack
            style={{
              width: data.length * 100 + '%',
              transform: 'translate3d(' + active * -100 + 'vw, 0, 0)',
            }}
          >
            {data.map(({ node }) => (
              <Slide key={node.acf.year}>
                {node.featured_media && (
                  <div className="img">
                    <Img
                      fluid={
                        node.featured_media.localFile.childImageSharp.fluid
                      }
                    />
                  </div>
                )}
                <div>
                  <h3>{node.acf.year}</h3>
                  <h4>{node.title}</h4>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.content,
                    }}
                  />
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

const TrackWrapper = styled.div`
  padding: 0 6%;
  margin: 4rem 0 5rem;
`

const Track = styled.div`
  position: relative;
`
const TrackLineContainer = styled.div`
  position: relative;
  overflow-x: hidden;
  padding-top: 70px;
`

const TrackDots = styled.div`
  display: flex;
  position: absolute;
  left: 0;
  top: -11px;
  width: 100%;
  z-index: 20;
  position: relative;
  transition: 0.3s ease all;
`

const TrackDotsYear = styled.div`
  background: ${brightBlue};
  color: white;
  position: absolute;
  top: -60px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 40px;
  font-weight: bold;
  opacity: 0;
  transition: 0.3s ease all;
  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background: ${brightBlue};
    left: 50%;
    bottom: -6px;
    transform: translateX(-50%) rotate(45deg);
    z-index: -1;
  }
  ${({ active }) =>
    active &&
    css`
      opacity: 1;
    `}
`

const TrackDotWrapper = styled.div`
  margin: 0 15%;
  flex-grow: 0;
  flex-shrink: 0;
  position: relative;
`

const TrackDot = styled.div`
  height: 24px;
  width: 24px;
  background: ${brightBlue};
  border-radius: 50%;
`

const TrackLine = styled.div`
  height: 2px;
  background: #9f9f9f;
`

const TrackButtons = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  bottom: 12px;
  width: 100%;
  z-index: 20;
  pointer-events: none;
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
  pointer-events: all;
  background: ${brightBlue};
`
const Slide = styled.div`
  display: flex;
  width: 100vw;
  padding: 0 80px;
  .img {
    width: 40%;
    margin-right: 30px;
    flex-grow: 0;
    flex-shrink: 0;
  }
  h3 {
    font-size: 32px;
    color: ${blue};
  }
  h4 {
    font-size: 24px;
    line-height: 1.5;
    text-transform: none;
    ${serif()};
  }
  p {
    font-size: 16px;
    line-height: 1.625;
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
