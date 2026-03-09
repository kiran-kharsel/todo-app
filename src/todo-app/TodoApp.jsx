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
      isEditMode: false,
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

  function handleEdit(id){
    const newTodoList = todoList.map((todo) => {
      if(todo.id === id){
        todo.isEditMode = true;
      }else{
        todo.isEditMode = false;
      }

      return {...todo}
    });

    setTodoList(newTodoList)
  }

  function handleEditSave(index, newValue){
    const newTodoList = structuredClone(todoList)
    newTodoList[index].todo = newValue;
    newTodoList[index].isEditMode = false;

    setTodoList(newTodoList)
  }

  function handleEditCancel(index){
    const newTodoList = structuredClone(todoList)
    newTodoList[index].isEditMode = false;

    setTodoList(newTodoList)
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
          <Button label={'add todo'} onClick={handleAddTodo} />
        </div>

        <div className="todo">
          <TodoList 
          todos={todoList} 
          onDelete={handleDelete}
          onEdit={handleEdit}
          onEditSave={handleEditSave}
          onEditCancel={handleEditCancel}
          />
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