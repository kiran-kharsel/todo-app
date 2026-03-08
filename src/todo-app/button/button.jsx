import React from 'react'
import './style.css'

function button({label, onClick = ()=>{}}) {
  return (
    <button onClick={onClick}>{label}</button>
  )
}

export default button