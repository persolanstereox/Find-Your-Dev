import Button from "./UI/Button";
import styles from "../assets/css/searchbar.module.css";
import searchicon from "/SearchIcon.png";
import { URL } from "../config.js";
import { useState } from "react";



const SearchBar = (props) => {

  const usernameHandler = (e) => {
    
    let validUrl = URL + e.target.value
    props.setUrl(validUrl)
    console.log(validUrl)
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
          aria-label="Github Username"
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
