import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import main from './Pages/main';
import Customers from './components/Bracnhes/customers';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/main' Component={main}></Route>
          <Route path='/customers' Component={Customers}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;