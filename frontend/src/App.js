import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HomeScreen } from './screens/HomeScreen';
import { ProductScreen } from './screens/ProductScreen';
import { CartScreen } from './screens/CartScreen';
import { Navbar } from './components/Navbar';
import { BackDrop } from './components/BackDrop';
import { SideDrawer } from './components/SideDrawer';
import { useState } from 'react';

function App() {
  const [sideToggle, setSideToggle] = useState(false);
  const [cartItemQuantity, setCartItemQuantity] = useState(1);
  return (
    <Router>
      <Navbar click={setSideToggle} />
      <BackDrop show={sideToggle} click={setSideToggle}/>
      <SideDrawer show={sideToggle}/>
      <main>
      <Routes>
        <Route exact path = '/' element={<HomeScreen />} />
        <Route exact path = '/product/:id' element={<ProductScreen setCartItemQuantity={setCartItemQuantity}/>} />
        <Route exact path = '/cart' element={<CartScreen cartItemQuantity={cartItemQuantity}/>} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
