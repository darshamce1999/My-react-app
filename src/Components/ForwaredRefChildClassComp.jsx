import React, { Component } from 'react'

export class ForwaredRefChildClassComp extends Component {
    constructor(props) {
        super(props)
    }

    focusEle() {
        console.log("ref child")
    }

  render() {
    return (
      <div>ForwaredRefChildClassComp</div>
    )
  }
}

export default ForwaredRefChildClassComp