import React, { useState } from "react";

const FilterGadget = ({ onFilter }) => {
 const [filter, setFilter] = useState("");

 const handleFilterChange = (e) => {
    setFilter(e.target.value);
    onFilter(e.target.value);
 };

 return (
    <div>
      <label htmlFor="filter">Filter by name:</label>
      <input
        type="text"
        id="filter"
        value={filter}
        onChange={handleFilterChange}
      />
    </div>
 );
};

export default FilterGadget;