import React from 'react'
import './style.css'

function button({label, onClick = ()=>{}, isActive}) {
  return (
    <button 
    style={{
      color: isActive ? 'darkcyan' : '',
      fontWeight: isActive ? 600 : '',
    }}
    onClick={onClick}>
      {label}
    </button>
  )
}

export default button