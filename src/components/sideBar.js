import './sideBar.css'
import React from 'react'

export default function sideBar({num, title}) {
  return (
    <div className='sidebar'>
    <div className="list">
        <p style={{fontSize: "32px"}}>Overview</p>
        <p>Total {title}</p>
        <p>{
          num.length
        }</p>
        {/* <p>sold</p>
        <p>$</p>
        <p>supplied</p>
        <p>$</p> */}
    </div>
    </div>
  )
}