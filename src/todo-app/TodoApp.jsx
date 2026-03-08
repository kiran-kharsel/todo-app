import React, { useState } from 'react'
import './style.css'

import TextInput from './text-input'
import Button from './button'
import TodoList from './todo-list'

function TodoApp() {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')

  function handleChange(value) {
    setTodo(value)
  }

  function handleAddTodo() {

    const todoObj = {
      todo: todo,
      id: Math.floor(Math.random() * 10_000_000) + 1,
    };

    setTodoList([todoObj, ...todoList])
    setTodo('')
  }

  function handleDelete(id){
    const filteredTodoList = todoList.filter((todo) => {
      return todo.id !== id
    });

    setTodoList(filteredTodoList)
  }

  return (
    <>
      <div className='todo-container'>
        <header className='todo-header'>
          <h1>TODO</h1>
          <div>button fot theme</div>
        </header>

        <div className='todo-input'>
          <TextInput value={todo} onChange={handleChange} />
          <Button label={'add'} onClick={handleAddTodo} />
        </div>

        <div className="todo">
          <TodoList todos={todoList} onDelete={handleDelete}/>
          <div className='todo-info'>
            <div>2 item left</div>
            <div>clear completed</div>
          </div>
        </div>

        <div className="todo-status">
          <div>all</div>
          <div>completed</div>
          <div>active</div>
        </div>

      </div>
    </>

  )
}

export default TodoApp