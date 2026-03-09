import React, { useState } from 'react'
import './style.css'

import TextInput from './text-input'
import Button from './button'
import TodoList from './todo-list'

function TodoApp() {
  const [todoList, setTodoList] = useState([])
  const [todo, setTodo] = useState('')
  const [filter, setFilter] = useState('all')

  const getIncompleteCount = () => {
    return todoList.filter(todo => !todo.isCompleted).length;
  };

  function handleClearCompleted(){
    const newTodoList = todoList.filter(todo => !todo.isCompleted)
    setTodoList(newTodoList)
  }


  function handleChange(value) {
    setTodo(value)
  }

  function handleAddTodo() {

    const todoObj = {
      todo: todo,
      id: Math.floor(Math.random() * 10_000_000) + 1,
      isEditMode: false,
      isCompleted: false,
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

  function handleTodoComplete(index){
    const newTodoList = structuredClone(todoList)
    newTodoList[index].isCompleted = !newTodoList[index].isCompleted;

    setTodoList(newTodoList)
  }

  function handleShowAllTodos(){
    setFilter('all')
  }

  function handleShowActiveTodos(){
    setFilter('active')
  }

  function handleShowCompletedTodos(){
    setFilter('completed')
  }

  const visibleTodos = todoList.filter((todo) => {
    if(filter === 'all') return todo;
    if(filter === 'active') return !todo.isCompleted;
    if(filter === 'completed') return todo.isCompleted;
  })


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
          todos={visibleTodos} 
          onDelete={handleDelete}
          onEdit={handleEdit}
          onEditSave={handleEditSave}
          onEditCancel={handleEditCancel}
          onTodoComplete={handleTodoComplete}
          />
          <div className='todo-info'>
            <div>
               {getIncompleteCount()} item left
            </div>
            <div>
              <Button label={'clear completed'} onClick={handleClearCompleted}/>
            </div>
          </div>
        </div>

        <div className="todo-filter">
          <Button label={'all'} onClick={handleShowAllTodos}/>
          <Button label={'active'} onClick={handleShowActiveTodos}/>
          <Button label={'completed'} onClick={handleShowCompletedTodos}/>
        </div>

      </div>
    </>

  )
}

export default TodoApp