/**
 * create at 07/12/19
 */
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'

// components
import { ReduxPage, } from './demo'

export default class AppComponent extends Component{
  render(){
    return (
      <Router>
        <Route path="/" component={ReduxPage}/>
      </Router>
    )
  }
}
