import React from 'react';
import { AiFillInstagram, AiFillFacebook} from 'react-icons/ai';

import Link from 'next/Link';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 ®HungCellphone</p>
      <p>Design by Hung Luong</p>
      <p className="icons">
        <Link href='https://www.facebook.com/hungluong01'>
          <a target ="_blank"><AiFillFacebook /></a>
        </Link>
        <Link href='https://www.instagram.com/hungln01/'>
          <a target ="_blank"><AiFillInstagram /></a>
        </Link>               
      </p>
    </div>
  )
}

export default Footer