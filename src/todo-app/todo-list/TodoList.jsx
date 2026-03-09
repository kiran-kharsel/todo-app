import React, { useRef } from 'react'
import './style.css'

import Button from '../button'

function TodoList({ todos = [], onDelete, onEdit, onEditSave }) {
  return (
    <div className='todo-list'>
      {
        todos.map((data, index) => {
          return (
            <TodoItem
              key={data.id}
              index={index}
              data={data}
              onDelete={onDelete}
              onEdit={onEdit}
              onEditSave={onEditSave}
            />
          )
        })
      }
    </div>
  )
}

export default TodoList;


// todo item component

function TodoItem({ index, data, onDelete, onEdit, onEditSave }) {

  const inputRef = useRef('')

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


  function handleEditSave(id) {
    return () => {
      // get value using ref
      const value = inputRef.current.value;
      onEditSave(index, value)
      // false editmode
      // clear ref input
      inputRef.current.value = '';

    }
  }

  function handleEditCancel(id) {

  }

  // check for isEditMode
  if (data.isEditMode) {
    return (
      <div className='todo-item'>
        <input ref={inputRef} type="text" defaultValue={data.todo} />
        <div className="action-btns">
          <Button label={'save'} onClick={handleEditSave(data)} />
          <Button label={'cancel'} onClick={handleEditCancel(data.id)} />
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