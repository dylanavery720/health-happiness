import React, { Component } from 'react';

const Slide = (props) => {
return (
      <div className="ppoint-box">
        <h1 className="ppoint-underline">{props.title}</h1>
        <ul>
          <li>{props.one}</li>
          <li>{props.two}</li>
          <li>{props.three}</li>
          <li>{props.four}</li>
        </ul>
      </div>
      )
    }

export default Slide
