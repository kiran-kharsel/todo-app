import React, { useRef } from 'react'
import './style.css'

import Button from '../button'

function TodoList({ todos = [], onDelete, onEdit, onEditSave, onEditCancel, onTodoComplete }) {
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
              onEditCancel={onEditCancel}
              onTodoComplete={onTodoComplete}
            />
          )
        })
      }
    </div>
  )
}

export default TodoList;


// todo item component

function TodoItem({ index, data, onDelete, onEdit, onEditSave, onEditCancel, onTodoComplete }) {

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


  function handleEditSave() {
    // get value using ref
    const value = inputRef.current.value;
    onEditSave(index, value)
    // clear ref input
    inputRef.current.value = '';
  }

  function handleEditCancel() {
    onEditCancel(index)
  }

  function handleChange(){
    onTodoComplete(index)
  }

  // check for isEditMode
  if (data.isEditMode) {
    return (
      <div className='todo-item'>
        <input ref={inputRef} type="text" defaultValue={data.todo} />
        <div className="action-btns">
          <Button label={'save'} onClick={handleEditSave} />
          <Button label={'cancel'} onClick={handleEditCancel} />
        </div>
      </div>
    )
  }

  return (
    <div className='todo-item'>
      <div>
        <input onChange={handleChange}  checked={data.isCompleted} className='todo-check' type="checkbox" />
        <span>{data.todo}</span>
      </div>
      <div className="action-btns">
        <Button label={'edit'} onClick={handleEdit(data.id)} />
        <Button label={'delete'} onClick={handleDelete(data.id)} />
      </div>
    </div>
  )
}