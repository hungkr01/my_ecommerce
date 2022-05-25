import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

//lấy icon tên là AiOutlineShopping từ thư viện react-icons
import { AiOutlineShopping } from 'react-icons/ai' 

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

import mylogo from '../st_logo/logo.png';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/"><Image src={mylogo} alt="HungCellphone"/></Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />} 
    </div>
  )
}

export default Navbar