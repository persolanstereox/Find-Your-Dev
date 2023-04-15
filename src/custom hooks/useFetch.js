import { useState, useEffect } from "react";

// function useFetch(url, shouldFetch) {
//   const [data, setData] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {

//     if (shouldFetch) {
//       async function fetchData() {
//         setIsLoading(true);
//         try {
//           const response = await fetch(url);

//           if (!response.ok) {
//             throw new Error("Request failed");
//           }
//           const json = await response.json();
//           setData(json);
//         } catch (error) {
//           setError(error.message || "Something went wrong!");
//         }
//         setIsLoading(false);
//       }
//       fetchData();
//     }
//   }, [shouldFetch]);

//   return [data, isLoading, error];
// }
function useFetch() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData(url) {
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
  async function refetchData(url) {
    setIsLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Request failed");
      }
      const json = await response.json();
      setData(json);
      console.log(data)
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  }
  

  return { data, isLoading, error, fetchData, refetchData};
}

export default useFetch;
