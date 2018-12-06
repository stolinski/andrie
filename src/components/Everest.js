import React, { Component } from 'react';

import barbara from '../images/barbara.jpg'

const data = [{
  year: "1988",
  heading: "Yo ho ho and a bottle of rum",
  body: "some paragraph text for fun"
},{
  year: "1988",
  heading: "Yo ho ho and a bottle of rum",
  body: "some paragraph text for fun"
}]


export default class Everest extends Component {
  render() {
    return (
      <div>
      {data.map(item => (
        <div key={item.year}>
          <img src={barbara} />
          <h3>{item.year}</h3>
          <h4>{item.heading}</h4>
          <p>{item.body}</p>
        </div>
      ))}
      </div>
    )
  }
}