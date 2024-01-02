import React, { Component } from 'react'

export default class ClassEventBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         introduction : "Hello!"
      }

    // Binding method 3: Bind the event handler with constrouctor, useful for performance in large applications as it only happens once instead of every render
    this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(){
    //     this.setState({
    //         introduction: "GoodBye!",
    //     })
    // }

    // Binding method 4: Define handler as an arrow function, much easier in code
    handleClick = () => {
        this.setState({
            introduction: "GoodBye!",
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.introduction}</h1>
        
        {/* Binding method 1: Using arrow function, like below, this also helps if had some parameters  */}
        {/* <button onClick={() => this.handleClick()}>
            BindingEventsClass - click
        </button> */}

        {/* Binding method 2: Call bind method with 'this' */}
        {/* <button onClick={this.handleClick.bind(this)}>
            BindingEventsClass - click
        </button> */}

        {/* 3rd method, see constructor ---- 4th method see handleClick handler as an arrow function */}
        <button onClick={this.handleClick}>
            BindingEventsClass - click
        </button>
      </div>
    )
  }
//   REMEMBER: Know all plus it depends which one is best
}
