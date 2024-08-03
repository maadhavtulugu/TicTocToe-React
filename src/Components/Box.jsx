import React from 'react'
import "./Box.css"
export const Box = ({value,onClick}) => {
    
    const classname= value==='X'?"box x":"box o";

  return (
    <button className={classname} onClick={onClick}>{value}</button>
   
  )
}
