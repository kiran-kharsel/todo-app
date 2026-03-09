import React from 'react'
import './style.css'

import Button from '../button'

function TodoList({ todos = [], onDelete, onEdit }) {
  return (
    <div className='todo-list'>
      {
        todos.map((data) => {
          return (
            <TodoItem
              key={data.id}
              data={data}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          )
        })
      }
    </div>
  )
}

export default TodoList;


// todo item component

function TodoItem({ data, onDelete, onEdit }) {

  function handleDelete(id) {
    return () => {
      onDelete(id)
    }
  }

  function handleEdit(id) {
    return () => {
      onEdit(id)
    }
  }

  // check for isEditMode
  if (data.isEditMode) {
    return (
      <div className='todo-item'>
        <input type="text" value={data.todo} />
        <div className="action-btns">
          <Button label={'save'} onClick={handleEdit(data.id)} />
          <Button label={'cancel'} onClick={handleDelete(data.id)} />
        </div>
      </div>
    )
  }

  return (
    <div className='todo-item'>
      <span>{data.todo}</span>
      <div className="action-btns">
        <Button label={'edit'} onClick={handleEdit(data.id)} />
        <Button label={'delete'} onClick={handleDelete(data.id)} />
      </div>
    </div>
  )
}