import React from 'react'

const button = ({color,text,onClick}) => {
  return (
    <button className="btn" 
    style={{backgroundColor:color}}
    onClick={onClick}
    >{text}</button>
  )
}

export default button