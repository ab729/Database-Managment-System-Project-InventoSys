import React, { useState } from 'react'
import './body.css'
import Neworder from './Neworder'

export default function Body({props}) {
  const deleteCustomer = async (id) => {
    try {
      await fetch(`http://localhost:5000/customers/${id}`, {
        'method': 'DELETE'
      })
    } catch (error) {
      throw new Error(error.message)
    }
  }

  const [customer, setCustomer] = useState('')
  const [bank_name, setBank] = useState('')
  const [bank_acc, setAcc] = useState('')
  const [password, setPassword] = useState('')

  const onSubmit = async () => {
    const payload = { customer, bank_name, bank_acc, password}
    try {
      await fetch('http://localhost:5000/customers',
      {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(payload)
      }).then( () => console.log("New customer has been successfully added"))
    } catch (error) {
      console.log(error.message);
    }
  }
  const [toggle, setToggle] = useState(false)
  return (
    <div className='body'>
      { toggle && 
      <Neworder>
      <img src={require('../icons/close.ico')} alt="close" className='close-btn' onClick={() => setToggle(false)}/>
      <div className="add-panel font">
        <h2>Adding a new customer</h2>
        <p>Please fill the informartion below</p>
        <hr/>
        <h3>Customer Name:</h3>
        <input type="text" placeholder='John Watson' required value={customer} onChange={ e => setCustomer(e.target.value)}/>

        <h3>Bank Name</h3>
        <input type="text" placeholder='SVB' required value={bank_name} onChange={ e => setBank(e.target.value)}/>

        <h3>Bank Account</h3>
        <input type="number" placeholder='2548 8482' required value={bank_acc} onChange={ e => setAcc(e.target.value)}/>

        <h3>Password</h3>
        <input type="text" required value={password} onChange={ e => setPassword(e.target.value)}/>
        <button onClick={onSubmit}>Add</button>
      </div>
      </Neworder>}
      <div className="details font">
        <h2>Customers</h2>
        <input
        type="text"
        className='search font'
        name='search'
        placeholder="Type to search.."
        // value={searched}
        // onChange = {e => handleChange(e.target.value)}
        />
        <div className="newOrder" onClick={() => setToggle(true)}>
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
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {
              props.map(customer => (
                <tr key={customer.customer_id}>
                <td>{customer.customer}</td>
                <td>{customer.customer_id}</td>
                <td>{customer.bank_name}</td>
                <td>{customer.bank_acc}</td>
                <td>{customer.username}</td>
                <td>{customer.password}</td>
                <td><button id="delete" className="font" onClick={() => deleteCustomer(customer.customer_id)}>Delete</button></td>
            </tr>
              ))
            }
          </tbody>
        </table>
        
        </div>
    </div>
  )
}