/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"

function TodoList(props) {
    return (
      <div className="mt-16">
        <ul>
          {props.children}
        </ul>
      </div>
    )
  }
  export default TodoList;