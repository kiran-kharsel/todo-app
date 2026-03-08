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

  return (
    <div>
      <div>
        <TextInput value={todo} onChange={handleChange}/>
        <Button label={'add'}/>
      </div>

      <TodoList/>
    </div>
  )
}

export default TodoApp