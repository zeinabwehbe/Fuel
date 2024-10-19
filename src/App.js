import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Welcome from './pages/Welcome';
import ShopCategory from './pages/ShopCategory'
import LoginSignup from './pages/LoginSignup';
import Product from './pages/Product';
import Cart from './pages/Cart'


//here we will be ssaving the navs that will be used in the projects and between pages
function App() {
  return (
    <div className='background'>
      <div>
        <BrowserRouter>      
        <NavBar />
        <Routes>
          {/* setting the route so that you will be directioned to the suitable one */}
          <Route path='/' element={<Welcome/>}/>
          <Route path='/drink' element={<ShopCategory category="drink"/>}/>
          <Route path='/Pastries' element={<ShopCategory category="Pastries"/>}/>
          
          <Route path='/product/:productId' element={<Product />} />


          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/LoginSignup' element={<LoginSignup/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>        
      </div>

    </div>
  );
}

export default App;

