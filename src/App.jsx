import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/UI/Container";
import SearchBar from "./components/SearchBar";
import UserInfo from "./components/UserInfo";
import UserStats from "./components/UserStats";
import styles from "./app.module.css";
import useFetch from "./custom hooks/useFetch";
import {TOKEN, URL} from './config.js'

function App() {
  // console.log(TOKEN)
 
  // console.log(data)
  const [theme, setTheme] = useState("DARK");
  const [username, setUsername] = useState('')
  const [data, isLoading, error] = useFetch(URL + username);


  const getUserData = () => {
    
    const user = data
    console.log(user)
  }

  const themeHandler = () => {
    setTheme((curr) => (curr === "DARK" ? "LIGHT" : "DARK"));
  };
  return (
    <Container>
      <main className={styles.app}>
        <Header theme={theme} themeHandler={themeHandler} />
        <SearchBar getUser={getUserData} setUsername={setUsername}/>
        <div className={styles.info_container}>
        <UserInfo/>
        <UserStats/>
        </div>
      </main>
    </Container>
  );
}

export default App;
