/**
 * create at 07/11/19
 */

import React from 'react'

// components
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer /> 
  </div>
)

export default App