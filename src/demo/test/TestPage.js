/**
 * create at 07/04/19
 */

import React, { Component } from 'react'

class TestPage extends Component{
  render(){
    return [
      // 不要忘记设置 key :)
      <li key="A">{null}</li>,
      <li key="B">Second{undefined} item</li>,
      <li key="C">Third item</li>,
    ]
  }
}

export default TestPage