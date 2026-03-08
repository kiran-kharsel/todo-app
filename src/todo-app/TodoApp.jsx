import React, { useState } from 'react'
import './style.css'

import TextInput from './text-input'
import Button from './Button'
import TodoList from './todo-list'

function TodoApp() {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')

  function handleChange(value){
    setTodo(value)
  }

  function handleAddTodo(){

    const todoObj = {
      todo: todo,
      id: Math.floor(Math.random() * 10_000_000) + 1,
    };

    setTodoList([todoObj, ...todoList])
  }

  return (
    <div>
      <div>
        <TextInput value={todo} onChange={handleChange}/>
        <Button label={'add'} onClick={handleAddTodo}/>
      </div>

      <TodoList todos={todoList}/>
    </div>
  )
}

export default TodoApp