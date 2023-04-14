import { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Container from "./components/UI/Container";
import SearchBar from "./components/SearchBar";
import UserInfo from "./components/UserInfo";
import UserStats from "./components/UserStats";
import RunAppInfo from "./components/RunAppInfo";
import styles from "./app.module.css";

function App() {
  const [url, setUrl] = useState("");
  const [theme, setTheme] = useState("DARK");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  

  async function fetchData() {
    setIsLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response.data);
      const filteredData = {
        avatar: response.data.avatar_url,
        bio: response.data.bio,
        name: response.data.name,
        username: response.data.login,
        github_url: response.data.html_url,
        joined: response.data.created_at,
        repos: response.data.public_repos,
        followers: response.data.followers,
        following: response.data.following,
        location: response.data.location,
        private_site: response.data.blog,
        twitter: response.data.twitter_username,
        company: response.data.company,
      };
      setData(filteredData);
      setError(null)
      console.log(filteredData);
    } catch (error) {
      setError(error.message || "Something went wrong!");
      setData(null)
      console.error(error);
    }
    setIsLoading(false);
  }

  const themeHandler = () => {
    setTheme((curr) => (curr === "DARK" ? "LIGHT" : "DARK"));
  };
  return (
    <Container>
      <main className={styles.app}>
        <Header theme={theme} themeHandler={themeHandler} />
        <SearchBar getUser={fetchData} setUrl={setUrl} />
        <div className={styles.info_container}>
          {error && <h2>error</h2>}
          {isLoading && <h2>Loading...</h2>}
          {!data && <RunAppInfo/>}
          {data && <UserInfo userData={data} />}
          {data && <UserStats userData={data} />}
        </div>
      </main>
    </Container>
  );
}

export default App;
