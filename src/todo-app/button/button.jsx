import React from 'react'
import './style.css'

function button({label, onClick = ()=>{}, isActive}) {
  return (
    <button 
    style={{
      color: isActive ? 'cornflowerblue' : 'black',
    }}
    onClick={onClick}>
      {label}
    </button>
  )
}

export default button