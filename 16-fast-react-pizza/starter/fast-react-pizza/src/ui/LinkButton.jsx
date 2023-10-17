import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LinkButton({ children, to = '/' }) {
  const navigate = useNavigate();
  const linkClass =
    'text-sm text-blue-500 transition-all hover:font-bold hover:text-blue-800 hover:underline';
  if (to === '-1') {
    return (
      <button onClick={() => navigate(-1)} className={linkClass}>
        {children}
      </button>
    );
  }
  return (
    <Link to={to} className={linkClass}>
      {children}
    </Link>
  );
}

export default LinkButton;
