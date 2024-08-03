import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Welcome from './pages/Welcome';
import ShopCategory from './pages/ShopCategory'

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
          <Route path='/dessert' element={<ShopCategory category="dessert"/>}/>
        </Routes>
        </BrowserRouter>
        <Footer/>        
      </div>

    </div>
  );
}

export default App;

