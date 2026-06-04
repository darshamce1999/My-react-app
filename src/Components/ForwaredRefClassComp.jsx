import React, { Component } from 'react'
import ForwaredRefChildClassComp from './ForwaredRefChildClassComp'

export class ForwaredRefClassComp extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        // this.inputRef.current.style.backgroundColor = "red"
        this.inputRef.current.focusEle()
    }

  render() {
    return <>
        <div>ForwaredRefClassComp</div>
        <ForwaredRefChildClassComp ref={this.inputRef}/>
      </>
  }
}

export default ForwaredRefClassComp