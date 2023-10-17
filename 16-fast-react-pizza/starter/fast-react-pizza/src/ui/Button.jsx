import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, disabled = false, to, type = 'primary', onClick }) {
  const base =
    'text-stone rounded-full bg-sky-500 font-bold uppercase tracking-wide text-slate-950 transition-all hover:bg-sky-400 focus:bg-sky-400 focus:outline-none focus:ring focus:ring-sky-400 focus:ring-offset-2';
  const styles = {
    primary: `${base} px-4 py-3`,
    small: `${base} px-3 py-2`,
    extraSmall: `${base} px-2 py-1`,
    round: `${base} px-3 py-1 md:px-4 md:py-2`,
    secondary:
      'px-3 py-2 text-stone-500 border-2 border-slate-500 rounded-full bg-slate-300 hover:font-extrabold uppercase tracking-wide hover:text-slate-950 transition-all hover:bg-slate-400 focus:bg-slate-400 focus:outline-none focus:ring focus:ring-slate-400 focus:ring-offset-2',
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  if (onClick) {
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );
  }
  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
