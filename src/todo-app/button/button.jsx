import React,{useContext} from 'react'
import './style.css'

import { ThemeContext } from '../../App';

function button({label, onClick = ()=>{}, isActive}) {
  const { darkTheme } = useContext(ThemeContext);
  return (
    <button 
    style={{
      color: isActive ? 'darkcyan' : darkTheme ? 'white' : 'black',
      fontWeight: isActive ? 600 : '',
    }}
    onClick={onClick}>
      {label}
    </button>
  )
}

export default button