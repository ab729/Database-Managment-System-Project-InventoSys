import Navbar from "../components/navBar";
import Sidebar from "../components/sideBar";
import Body from '../components/body'
import './main.css';
import React from 'react'

  const getInfo = () => {
    fetch('http://localhost:5000/customers')
    fetch('http://localhost:5000/products')
    
  }

export default function main() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Body></Body>
    </div>
  )
}
