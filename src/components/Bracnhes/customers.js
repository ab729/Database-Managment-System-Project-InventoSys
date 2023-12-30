import React, { useState, useEffect } from 'react'
import SideBar from '../sideBar'
import Navbar from '../navBar'
import Body from '../body'

export default function Customers() {
    const [customers, setCustomers] = useState([])
    const getCustomers = async () => {
    try {
      const response = await fetch("http://localhost:5000/customers")
      const jsonData = await response.json()  
      setCustomers(jsonData.rows)
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getCustomers()
  })
  return (
    <div>
      <Navbar/>
      <SideBar num={customers} title="Customers"/>
      <Body props={customers}/>
    </div>
  )
}
