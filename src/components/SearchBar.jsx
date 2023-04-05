import Button from "./UI/Button";
import styles from "../assets/css/searchbar.module.css";
import searchicon from "/SearchIcon.png";

const SearchBar = (props) => {
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
        />
        <label htmlFor="github-user">Search github username...</label>
      </div>
      <Button>Search</Button>
    </section>
  );
};

export default SearchBar;
