import Navbar from "../components/navBar";
import Sidebar from "../components/sideBar";
import Body from '../components/body'
import './main.css';
import React from 'react'



export default function main() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <Body></Body>
    </div>
  )
}
