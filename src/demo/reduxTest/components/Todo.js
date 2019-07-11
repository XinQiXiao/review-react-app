/**
 * create at 07/11/19
 */
import React from 'react'
import PropTypes from 'prop-types'

const TodoComponents = ({onClick, completed, text})=> (
  <li 
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
)

TodoComponents.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default TodoComponents