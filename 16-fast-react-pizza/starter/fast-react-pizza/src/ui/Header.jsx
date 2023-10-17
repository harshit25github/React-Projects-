import React from 'react';
import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import User from '../features/user/User';

function Header() {
  return (
    <header className="text-bold flex items-center justify-between border-b border-gray-900 bg-sky-500 px-7 py-3 text-xl tracking-widest ">
      <Link to="/" className="font-extrabold uppercase">
        Fast React Pizza
      </Link>
      <SearchOrder />
      <User />
    </header>
  );
}

export default Header;
