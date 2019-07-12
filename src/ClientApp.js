/**
 * create at 07/12/19
 */
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


// components
import AppComponent from './App'

// redux
import rootReducer from './redux/reducer'

const store = createStore(rootReducer)

class App extends Component{

  render(){
    return (
      <Provider store={store}>
        <AppComponent />
      </Provider>
    )
  }
}

export default App