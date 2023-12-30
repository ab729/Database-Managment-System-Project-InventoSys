import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import main from './Pages/main';
import Customers from './components/Bracnhes/customers';
import Products from './components/Bracnhes/products';
import Suppliers from './components/Bracnhes/suppliers';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/main' Component={main}></Route>
          <Route path='/customers' Component={Customers}></Route>
          <Route path='/products' Component={Products}></Route>
          <Route path='/suppliers' Component={Suppliers}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;