import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch('https://fakestoreapi.com/products?sort=desc')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        const results = json.filter((products) => {
            return product 
         })
         console.log(results);
    });

  };
  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }

  return (
    <div className="search-controller">
      <button className="search-btn">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
      <input
        type="text"
        placeholder="Search"
        value={input}
        onChange={(e) => handleChange.navigate(e.target.value)}
      />
    </div>
  );
};
