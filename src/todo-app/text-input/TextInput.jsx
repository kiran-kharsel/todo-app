import React,{useContext} from 'react'
import './style.css'

import { ThemeContext } from '../../App';

function TextInput({ value = '', onChange = () => { } }) {
  const { darkTheme } = useContext(ThemeContext);

  function handleChange(e) {
    console.log(e.target.value)
    onChange(e.target.value)
  };


  return (
    <input 
    style={{
      color: darkTheme ? 'white' : 'black',
    }}
    className='textinput' type="text" 
    placeholder='enter todos...'
    value={value} onChange={handleChange} />
  )
}

export default TextInput