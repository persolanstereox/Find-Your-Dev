import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Request failed");
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      }
      setIsLoading(false);
    }
    fetchData();
  }, [url]);

  return [data, isLoading, error];
}

export default useFetch;
