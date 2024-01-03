import React from 'react'
import { Link } from 'react-router-dom'
import './navBar.css'
import dashboard from '../icons/dashboard.ico'

export default function navBar() {
  return (
    <div>
      <div className="nav">
        <div className="categories font">
        <Link to={'/products'}>
          <div className="element">
            <h3>Products</h3>
            <img src={dashboard} alt="dashboard" />
          </div>
        </Link>
        <Link to={'/suppliers'}>
          <div className="element">
            <h3>Supplier</h3>
            <img src={require('../icons/suppliers.ico')} alt="" />
          </div>
        </Link>
        {/* <Link to={'/purchases'}>
          <div className="element">
            <h3>Purchases Order</h3>
            <img src={require('../icons/purchaseOrder.ico')} alt="" />
          </div>
        </Link>
        <Link to={'/sales'}>
          <div className="element">
            <h3>Sales Order</h3>
            <img src={require('../icons/salesOdrer.ico')} alt="" />
          </div>
        </Link> */}
        <Link to={'/customers'}>
          <div className="element">
            <h3>Customers</h3>
            <img src={require('../icons/customers1.ico')} alt="" />
          </div>  
        </Link>
        </div> 
        <div className="info font">
            <h3 style={{"color": "Black", fontSize: "24px"}}>InventoSys</h3>
            <img src={require('../icons/logo.png')} alt="logo" />
        </div>
        <div className="user">
            <h3>Welcome: Admin</h3>
        </div>
      </div>
    </div>
  )
}
