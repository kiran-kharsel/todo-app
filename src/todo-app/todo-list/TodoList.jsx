import React from 'react'
import './style.css'

import Button from '../button'

function TodoList({todos = [], onDelete}) {
  return (
    <div className='todo-list'>
      {
        todos.map((data) => {
          return (
            <TodoItem 
            key={data.id} 
            data={data}
            onDelete={onDelete}/>
          )
        })
      }
    </div>
  )
}

export default TodoList;


// todo item component

function TodoItem({data, onDelete}){

  function handleDelete(id){
    return () => {
      onDelete(id)
    }
  }
  return(
    <div className='todo-item'>
      <span>{data.todo}</span>
      <div className="action-btns">
        <Button label={'edit'} />
        <Button label={'delete'} onClick={handleDelete(data.id)}/>
      </div>
    </div>
  )
}