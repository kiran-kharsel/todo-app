import React from 'react'
import './style.css'

import Button from '../button'

function TodoList({todos = []}) {
  return (
    <div>
      {
        todos.map((data) => {
          return (
            <TodoItem key={data.id} data={data}/>
          )
        })
      }
    </div>
  )
}

export default TodoList;


// todo item component

function TodoItem({data}){
  return(
    <div>
      <span>{data.todo}</span>
      <Button label={'edit'}/>
      <Button label={'delete'}/>
    </div>
  )
}