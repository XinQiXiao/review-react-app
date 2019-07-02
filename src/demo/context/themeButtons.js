/**
 * create at 06/28/19
 */
import React, { Component } from 'react'

// const
import { ThemeContext } from './const'

class ThemeButton extends Component {
  render() {
    return <Button theme={this.props.theme} />
  }
}

class Button extends Component{
  static contextType = ThemeContext

  render(){
    console.log('theme=>', this.context)
    return (
      <div>
        <span>button</span>
      </div>
    )
  }
}

export default ThemeButton
