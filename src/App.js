import './App.css';
import {Home,Products,Contact} from './components';
import {Routes,Route,Link} from 'react-router-dom';



function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <nav className='nav-container'>
          <ul>
            <li>
              <Link to="/" style={{ textDecoration: 'none', color: 'black' }}> Home</Link>
            </li>
            <li>
              <Link to="/products" style={{ textDecoration: 'none', color: 'black' }}> Products</Link>
            </li>
            <li>
              <Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}> Contact Us</Link>
            </li>
          </ul>
        </nav>
   

      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </div>
  )
};  
 
export default App;
