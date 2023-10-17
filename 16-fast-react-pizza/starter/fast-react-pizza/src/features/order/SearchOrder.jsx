import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search oder #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full px-4 py-3 text-sm transition-all duration-300 focus:outline-none focus:ring focus:ring-sky-600 focus:ring-opacity-50 sm:w-64 sm:focus:w-72"
      />
    </form>
  );
}

export default SearchOrder;
