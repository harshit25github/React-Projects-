import React from 'react';
import { useSelector } from 'react-redux';

function User() {
  const user = useSelector((state) => state.user.username);
  console.log(user);
  if (!user) {
    return null;
  }
  return <div className="ml-2 text-[.7rem] font-extrabold">{user}</div>;
}

export default User;
