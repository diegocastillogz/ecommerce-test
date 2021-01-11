import React, { useState } from "react";
import searchIconImage from "assets/images/search-icon.png";
import styles from "./searchInput.module.scss";
import { useHistory } from "react-router-dom";

const SearchInput = () => {
  const history = useHistory();
  const [userInput, setUserInput] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userInput && userInput !== undefined) {
      history.push({
        pathname: "/items",
        search: `?search=${userInput}`,
      });
    }
  };

  return (
    <form className={styles.searchInput} role="search" onSubmit={handleSubmit}>
      <input
        placeholder="Nunca dejes de buscar"
        onChange={({ target: { value } }) => setUserInput(value)}
      />
      <button type="submit" alt="buscar">
        <img alt="buscar" src={searchIconImage} />
      </button>
    </form>
  );
};

export default SearchInput;
