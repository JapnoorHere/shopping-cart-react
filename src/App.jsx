import React, { useEffect, useReducer, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';
import list from './list'

const App = () => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [message, setMessage] = useState(false);
  const [showCart,setShowCart] = useState(false);
  const [items,setItems] = useState([]);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((c) => {
      if (item.id === c.id) {
        isPresent = true;
      }
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false)
      }, 2000);
    }
    else{
      setMessage(true);
      setTimeout(()=>{
        setMessage(false)
      },2000);
      setCart([...cart, item]);
      }
  }

  function handleShowCart(){
      setShowCart(!showCart);
  }

  useEffect(()=>{
    console.log(showCart);
    if(showCart)
      setItems(cart);
    else
      setItems(list)
  },[showCart])

  return (
    <div>
      <Navbar size={cart.length} handleShowCart={handleShowCart} showCartVal={showCart}/>
      <div className='messageAndWarning'>
      {warning && <div className='warning'>Item is already present in your cart.</div>}
      {message && <div className='message'>Item added to ur cart</div>}
      </div>
      <Shop handleClick={handleClick} list={items} showCartVal={showCart}/>
    </div>
  )
}

export default App;
