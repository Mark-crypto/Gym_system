import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await fetch(url);
        const response = await data.json();
        setData(response);
        setIsLoading(false);
      };
      fetchData();
    } catch (error) {
      console.log("An error occurred: ", error.message);
      setIsLoading(false);
      setIsError(true);
    }
  }, []);
  return { data, isLoading, isError };
};
