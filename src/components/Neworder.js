import React from 'react'
import './neworder.css'


export default function Neworder({children}) {

  return (
    <div className='backdrop'>
      <div className="window">
      {children}
      </div>
    </div>
  )
}
