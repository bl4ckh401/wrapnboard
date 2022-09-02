import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './Components/NavigationBar';
import { useState } from 'react';
import Wrapping from './Pages/Wrapping';
import Payment from './Pages/Payment';
import CartPage from './Pages/CartPage';
import Boxes from './Pages/Boxes';
import BoxnWrap from './Pages/BoxnWrap';
import Bags from './Pages/Bags';
import Foam from './Pages/Foam';
import Taping from './Pages/Taping';
import Padlocks from './Pages/Padlocks';
import StrapsnTags from './Pages/StrapsnTags';
import Dashboard from './Pages/Dashboard';

function App() {

  const [active, setActive] = useState(true)
  const [cart, setCart] = useState([])

  const handleNav = () => {
    setActive(!active)
  }

  const addToCart = () => {
    setCart(
      [...cart,
        // val
      ]
    )
    console.log(cart)
  }

  return (
    <div className='relative w-screen top-0 left-0 bg-gray-100 min-h-screen'>
      <Router>
        <Navigation active={active} onClick={handleNav} />
        <div className='w-full flex flex-col lg:flex-row'>
          <div className='flex w-full flex-col justify-start items-start'>
            <Routes>
              <Route path='/' element={<Dashboard cart={addToCart}/>} />
              <Route path='/wrapping' element={<Wrapping cart={addToCart} />} />
              <Route path='/boxes' element={<Boxes cart={addToCart} />} />
              <Route path='/boxesandwrapping' element={<BoxnWrap cart={addToCart} />} />
              <Route path='/bags' element={<Bags cart={addToCart} />} />
              <Route path='/foams' element={<Foam cart={addToCart} />} />
              <Route path='/taping' element={<Taping cart={addToCart} />} />
              <Route path='/padlocks' element={<Padlocks cart={addToCart} />} />
              <Route path='/strapsandtags' element={<StrapsnTags cart={addToCart} />} />
            </Routes>
            <Payment />
          </div>
          <div className='w-full lg:w-1/5'>
              <CartPage />
          </div>
        </div>
      </Router>
    </div>

  );
}

export default App;