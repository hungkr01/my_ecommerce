import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runFireworks } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext();
  
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireworks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Cảm ơn bạn vì đã đặt hàng</h2>
        <p className="email-msg">Hãy kiểm tra biên lai trong email.</p>
        <p className="description">
          Nếu có thắc mắc, vui lòng liên hệ
          <a className="email" href="mailto:luonghung1005@gmail.com">
            luonghung1005@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" width="300px" className="btn">
            Tiếp tục mua sắm
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success