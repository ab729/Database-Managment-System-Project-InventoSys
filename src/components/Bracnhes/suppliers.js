import React, {useState, useEffect} from 'react'
import Navbar from '../navBar'
import Sidebar from '../sideBar'
import '../body.css'
import Neworder from '../Neworder'

export default function Suppliers() {
    const [supplier, setSupplier] = useState([])
    const getSupplier = async () => {
    try {
      const response = await fetch("http://localhost:5000/suppliers")
      const jsonData = await response.json()  
      setSupplier(jsonData)
    } catch (error) {
      console.log(error.message);
    }
  }
    useEffect(() => {
    getSupplier()
  })

  const deleteSuppllier = (id) => {
    try {
        fetch(`http://localhost:5000/suppliers/${id}`, {
        'method': 'DELETE'
    })
    } catch (error) {
        console.log(error.message);
    }
  }

  const [toggle, setToggle] = useState(false)

  const [supplier_name, setName] = useState('')
  const [contact_person, setContact] = useState('')
  const [contact_email, setEmail] = useState('')
  const [contact_phone, setPhone] = useState('')

  const onSubmit = async () => {
    const payload = { supplier_name, contact_person, contact_email, contact_phone }
    console.log(payload);
    try {
      await fetch('http://localhost:5000/suppliers',
      {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(payload)
      }).then( () => console.log("New supplier has been successfully added")).then(setToggle(false))
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
    { toggle && 
      <Neworder>
      <img src={require('../../icons/close.ico')} alt="close" className='close-btn' onClick={() => setToggle(false)}/>
      <div className="add-panel font">
        <h2>Adding a new supplier</h2>
        <p>Please fill the informartion below</p>
        <hr/>
        <h3>Supplier Name:</h3>
        <input type="text" placeholder='Al-Nakhil Ltd..' required value={supplier_name} onChange={ e => setName(e.target.value)}/>

        <h3>Contact Name</h3>
        <input type="text" placeholder='Napoleon' required value={contact_person} onChange={ e => setContact(e.target.value)}/>

        <h3>Contact Email</h3>
        <input type="text" placeholder='person@mail.com' required value={contact_email} onChange={ e => setEmail(e.target.value)}/>

        <h3>Contact Phone</h3>
        <input type="text" required value={contact_phone} onChange={ e => setPhone(e.target.value)}/>
        <button onClick={onSubmit}>Add</button>
      </div>
      </Neworder> }
      <Navbar />
      <Sidebar num={supplier} title="Suppliers"/>
      <div className='body'>
      <div className="details font">
        <h2>Suppliers</h2>
        <label>Search <input type="text" className='search' name='search'/></label>
        <div className="newOrder" onClick={() => setToggle(true)}>
            <h3>New supplier</h3>
            <img src={require('../../icons/new.ico')} alt="" />
        </div>
      </div>
      <hr style={{margin: "1rem 0 0.5rem 0"}}/>
      <div className="table">
        <table id="table" style={{width: "100%"}}>
        <thead>
            <tr>
                <th>Supplier</th>
                <th>ID</th>
                <th>Contact Person</th>
                <th>Contact Email</th>
                <th>Contact Phone</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {
              supplier.map(supplier => (
                <tr key={supplier.supplier_id}>
                <td>{supplier.supplier_name}</td>
                <td>{supplier.supplier_id}</td>
                <td>{supplier.contact_person}</td>
                <td>{supplier.contact_email}</td>
                <td>{supplier.contact_phone}</td>
                <td><button id="delete" className="font" onClick={() => {deleteSuppllier(supplier.supplier_id)}}>Delete</button></td>
            </tr>
              ))
            }
          </tbody>
        </table>
        </div>
    </div>
    </div>
  )
}
