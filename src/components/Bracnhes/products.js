import React, {useState, useEffect} from 'react'
import Navbar from '../navBar'
import Sidebar from '../sideBar'
import Neworder from '../Neworder'
import '../body.css'

export default function Products() {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:5000/products")
      const jsonData = await response.json()  
      setProducts(jsonData)
    } catch (error) {
      console.log(error.message);
    }
  }
    useEffect(() => {
    getProducts()
  })

  const deleteProduct = async (id) => {
    try {
      await fetch(`http://localhost:5000/products/${id}`, {
        'method': 'DELETE'
      })
    } catch (error) {
      console.log(error.message);
    }
  }

    const [toggle, setToggle] = useState(false)

  const [product_name, setProduct] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [stock_quantity, setQuantity] = useState('')

  const onSubmit = async () => {
    const payload = { product_name, category, price, stock_quantity }
    console.log(payload);
    try {
      await fetch('http://localhost:5000/products',
      {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(payload)
      }).then( () => console.log("New product has been successfully added")).then(setToggle(false))
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <Navbar/>
      <Sidebar num={products} title="Products"/>
      { toggle && 
      <Neworder>
      <img src={require('../../icons/close.ico')} alt="close" className='close-btn' onClick={() => setToggle(false)}/>
      <div className="add-panel font">
        <h2>Adding a new product</h2>
        <p>Please fill the informartion below</p>
        <hr/>
        <h3>Product:</h3>
        <input type="text" placeholder='Smart Watch' required value={product_name} onChange={ e => setProduct(e.target.value)}/>

        <h3>Category:</h3>
        <input type="text" placeholder='Electronics' required value={category} onChange={ e => setCategory(e.target.value)}/>

        <h3>Price:</h3>
        <input type="number" placeholder='10.99$' required value={price} onChange={ e => setPrice(e.target.value)}/>

        <h3>Stock:</h3>
        <input type="number" placeholder='50' required value={stock_quantity} onChange={ e => setQuantity(e.target.value)}/>
        <button onClick={onSubmit}>Add</button>
      </div>
      </Neworder> }
      <div className='body'>
      <div className="details font">
        <h2>Products</h2>
        <input
        type="text"
        className='search'
        name='search'
        placeholder='Search'
        />
        <div className="newOrder" onClick={setToggle}>
            <h3>New order</h3>
            <img src={require('../../icons/new.ico')} alt="" />
        </div>
      </div>
      <hr style={{margin: "1rem 0 0.5rem 0"}}/>
      <div className="table">
        <table id="table" style={{width: "100%"}}>
        <thead>
            <tr>
                <th>Product</th>
                <th>ID</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            {
              products.map(product => (
                <tr key={product.product_id}>
                <td>{product.product_name}</td>
                <td>{product.product_id}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stock_quantity}</td>
                <td><button id="delete" className="font" onClick={() => {
                  deleteProduct(product.product_id)
                }}>Delete</button></td>
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
