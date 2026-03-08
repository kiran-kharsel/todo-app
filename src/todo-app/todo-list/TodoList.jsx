import React from 'react'
import './style.css'

function TodoList({todos = []}) {
  return (
    <div>
      {
        todos.map((data) => {
          return (
            <div key={data.id}>{data.todo}</div>
          )
        })
      }
    </div>
  )
}

export default TodoList