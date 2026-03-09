import React,{useContext} from 'react'
import './style.css'

import { ThemeContext } from '../../App';

function button({label, onClick = ()=>{}, isActive}) {
  const { darkTheme } = useContext(ThemeContext);

  return (
    <button
    className={`
      ${darkTheme ? 'dark-theme' : 'light-theme'}
      ${isActive ? 'active' : ''}
    `}
    onClick={onClick}>
      {label}
    </button>
  )
}

export default button