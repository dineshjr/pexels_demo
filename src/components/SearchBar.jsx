// eslint-disable-next-line react/prop-types
import { useState } from "react";
import "./SearchBar.css";
// eslint-disable-next-line react/prop-types
const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  const handleChange = (event) => {
    setTerm(event.target.value);
    onSubmit(event.target.value)
  };
  return (
    <>
      <div className="search-bar">
        <form onSubmit={handleFormSubmit}>
          <label>Enter search term</label>
          <input value={term} onChange={handleChange} />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
