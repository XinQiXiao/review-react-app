import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

// components
import { ReduxPage, } from './demo'

// redux
import rootReducer from './redux/reducer'

const store = createStore(rootReducer)

class App extends Component{

  render(){
    return (
      <Provider store={store}>
        <ReduxPage />
      </Provider>
    )
  }
}

export default App
