import React , { useContext } from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai';
import { StateContext  } from '../context/StateContext';
import MyCart from './MyCart';


const Navbar = () => {
  const { showCart , setShowCart , totalQuantities } = useContext(StateContext);

  return (
    <div className="navbar-container">
      <p className="logo">
         <Link href="/">AudioVerse Headphones</Link>
      </p>

      <button type="button" className="cart-icon" onClick= {() =>setShowCart(true)} >
        <AiOutlineShopping/>
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      {showCart && <MyCart/>}
    </div>
  )
}

export default Navbar