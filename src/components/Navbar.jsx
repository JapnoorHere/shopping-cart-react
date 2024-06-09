import React from 'react'
import '../styles/Navbar.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
const Navbar = ({size,handleShowCart}) => {
  return (
    <nav>
        <div className='nav-box'>
            <span className='nav-icon'>
                Droid Shop
            </span>
            <div className="nav-cart">
                <span>
                    <i className='fas fa-cart-plus' onClick={handleShowCart}></i>
                </span>
                <span>{size}</span>
            </div>
        </div>
    </nav>
  )
}

export default Navbar