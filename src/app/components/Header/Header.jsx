'use client'

import style from './header.module.css';
import Link from 'next/link';
import SignInButton from '../SignInButton/SignInButton';

const Header = () => {


  return (
    <div className={style.header}>
      <div className={style.leftSide}>
        <Link href="/">
          <i className="bx bxl-twitter"></i>
        </Link>
        <div className={style.search}>
          <input type="text" placeholder="# Explore" />
        </div>
      </div>

    <SignInButton />
      
    </div>
  );
};

export default Header;
