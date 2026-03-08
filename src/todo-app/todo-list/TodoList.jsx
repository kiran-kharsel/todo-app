import React from 'react'
import './style.css'

import Button from '../button'

function TodoList({todos = []}) {
  return (
    <div className='todo-list'>
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
    <div className='todo-item'>
      <span>{data.todo}</span>
      <div className="action-btns">
        <Button label={'edit'}/>
        <Button label={'delete'}/>
      </div>
    </div>
  )
}