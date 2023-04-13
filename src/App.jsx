import { useEffect, useState } from "react";
import Header from "./components/Header";
import Container from "./components/UI/Container";
import SearchBar from "./components/SearchBar";
import UserInfo from "./components/UserInfo";
import UserStats from "./components/UserStats";
import styles from "./app.module.css";
import useFetch from "./custom hooks/useFetch";
import { TOKEN, URL } from "./config.js";

function App() {
  // console.log(TOKEN)

  // // console.log(data)
  // const [shouldFetch, setShouldFetch] = useState(false)
  const [url, setUrl] = useState("");
  const [theme, setTheme] = useState("DARK");
  const [username, setUsername] = useState("");
  // const {data, isLoading, error, fetchData, refetchData} = useFetch();
  // const  {fetchData} = useFetch();

  // const getUserData = () => {
  //   // console.log(username)
  //   // console.log(URL)
  //   // console.log(URL + username)
  //   // setUrl(URL + username)
  //   // setShouldFetch((curr) => (curr === false ? true : false))

  //   // // console.log(data)
  //   // // setUsername(username)
  //   // // setShouldFetch((curr) => (curr === false ? true : false))
  //   // // const user = data.id
  //   // // console.log(user)
  //   // fetchData(url)
  //   // console.log(data)
  // //   setUrl(URL + username)
  // //   refetchData(url)
  // //   console.log(data)

  // }

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    
    setIsLoading(true);
    try {
      setUrl(URL + username);
      
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Request failed");
      }
      const json = await response.json();
      setData(json);
      console.log(data);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  }

  // return { data, isLoading, error, fetchData, refetchData};

  const themeHandler = () => {
    setTheme((curr) => (curr === "DARK" ? "LIGHT" : "DARK"));
  };
  return (
    <Container>
      <main className={styles.app}>
        <Header theme={theme} themeHandler={themeHandler} />
        <SearchBar getUser={fetchData} setUsername={setUsername} />
        <div className={styles.info_container}>
          {error && <h2>error</h2>}
          {isLoading && <h2>Loading...</h2>}
          {data && <UserInfo />}
          {data && <UserStats/>}
          {/* <UserInfo />
          <UserStats /> */}
        </div>
      </main>
    </Container>
  );
}

export default App;
