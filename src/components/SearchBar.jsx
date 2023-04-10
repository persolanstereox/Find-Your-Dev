import Button from "./UI/Button";
import styles from "../assets/css/searchbar.module.css";
import searchicon from "/SearchIcon.png";
import { useState } from "react";



const SearchBar = (props) => {

  const usernameHandler = (e) => {
    props.setUsername(e.target.value)
    console.log(e.target.value)
  }

  return (
    <section className={styles.search_bar_container}>
      <div className={styles.img_container}>
        <img src={searchicon} alt="search loupe" />
      </div>
      <div>
        <input
          type="text"
          id="github-user"
          aria-label="Password"
          placeholder=" "
          
          onChange={usernameHandler}
        />
        <label htmlFor="github-user">Search github username...</label>
      </div>
      <Button onClick={props.getUser}>Search</Button>
    </section>
  );
};

export default SearchBar;
