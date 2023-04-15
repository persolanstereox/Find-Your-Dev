import { useState } from "react";
import axios from "axios";
import Header from "./components/Header";
import Container from "./components/UI/Container";
import SearchBar from "./components/SearchBar";
import UserInfo from "./components/UserInfo";
import UserStats from "./components/UserStats";
import RunAppInfo from "./components/RunAppInfo";
import Loader from "./components/Loader";
import Error from "./components/Error";
import styles from "./app.module.css";

function App() {
  const [url, setUrl] = useState(null);
  const [theme, setTheme] = useState("DARK");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [welcomeMessage, setWelcomeMessage] = useState(true);

  async function fetchData(e) {
    if (!url) return;

    e.target.previousSibling.firstChild.value = "";
    setData(null);
    setIsLoading(true);
    setWelcomeMessage(false);
    setError(null);
    try {
      const response = await axios.get(url);

      if (response.status !== 200) {
        throw new Error(`Can't find this user, try again`);
      }

      console.log(response);
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
      setError(null);
      console.log(filteredData);
    } catch (error) {
      setError(error.message || "Something went wrong!");
      setData(null);
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
        <div className={styles.received_data_container}>
          {welcomeMessage && <RunAppInfo />}
          {data && <UserInfo userData={data} />}
          {data && <UserStats userData={data} />}
          {isLoading && <Loader />}
          {error && <Error />}
        </div>
      </main>
    </Container>
  );
}

export default App;
