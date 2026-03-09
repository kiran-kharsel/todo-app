import React, { useState } from 'react'
import './App.css'
import TodoApp from './todo-app'

export const ThemeContext = React.createContext(); // default value

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <TodoApp />
      </ThemeContext.Provider>
    </>
  )
}

export default App
