import React from 'react'
import './body.css'


export default function body({props}) {
  return (
    <div className='body'>
      <div className="details font">
        <h2>Type ${}</h2>
        <input type="text" className='search'/>
        <div className="newOrder">
            <h3>New order</h3>
            <img src={require('../icons/new.ico')} alt="" />
        </div>
      </div>
      <hr style={{margin: "1rem 0 0.5rem 0"}}/>
      <div className="table">
        <table id="table" style={{width: "100%"}}>
        <thead>
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Bank name</th>
                <th>Bank Acc.</th>
                <th>Username</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            {
              props.map(customer => (
                <tr>
                <td>{customer.customer}</td>
                <td>{customer.customer_id}</td>
                <td>{customer.bank_name}</td>
                <td>{customer.bank_acc}</td>
                <td>{customer.username}</td>
                <td>{customer.password}</td>
            </tr>
              ))
            }
          </tbody>
        </table>
        </div>
    </div>
  )
}