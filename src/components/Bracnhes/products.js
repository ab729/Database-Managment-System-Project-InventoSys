import React, {useState, useEffect} from 'react'
import Navbar from '../navBar'
import Sidebar from '../sideBar'
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
  return (
    <div>
      <Navbar/>
      <Sidebar num={products} title="Products"/>
      <div className='body'>
      <div className="details font">
        <h2>Products</h2>
        <input
        type="text"
        className='search'
        name='search'
        placeholder='Search'
        />
        <div className="newOrder">
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
