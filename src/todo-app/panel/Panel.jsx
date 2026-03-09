import React,{useContext} from 'react'
import './style.css'

import { ThemeContext } from '../../App';

function Panel({children}) {
  const { darkTheme } = useContext(ThemeContext);


  return (
    <div 
    style={{
      backgroundColor: darkTheme ? '#30475E' : 'white',
    }}
    className='panel'>
      {children}
    </div>
  )
}

export default Panel