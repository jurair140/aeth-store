import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      className="form-control my-4 w-50"
      placeholder="Search products..."
      onChange={e => setSearchTerm(e.target.value)}
      
    />
  );
}

export default SearchBar;
