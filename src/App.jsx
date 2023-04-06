import { useState } from "react";
import Header from "./components/Header";
import Container from "./components/UI/Container";
import SearchBar from "./components/SearchBar";
import UserInfo from "./components/UserInfo";
import UserStats from "./components/UserStats";
import styles from "./app.module.css";

function App() {
  const [theme, setTheme] = useState("DARK");

  const themeHandler = () => {
    setTheme((curr) => (curr === "DARK" ? "LIGHT" : "DARK"));
  };
  return (
    <Container>
      <main className={styles.app}>
        <Header theme={theme} themeHandler={themeHandler} />
        <SearchBar/>
        <div className={styles.info_container}>
        <UserInfo/>
        <UserStats/>
        </div>
      </main>
    </Container>
  );
}

export default App;
