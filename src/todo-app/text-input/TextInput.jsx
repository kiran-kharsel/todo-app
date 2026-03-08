import React from 'react'
import './style.css'

function TextInput({value = '', onChange = ()=>{}}) {
    function handleChange(e){
        onChange(e.target.value)
    };


  return (
    <input type="text" placeholder='enter todos...'
    value={value} onChange={handleChange} />
  )
}

export default TextInput