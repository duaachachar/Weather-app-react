
import React, { useState } from 'react';

const CitySearch = ({ onCitySearch }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onCitySearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default CitySearch;
