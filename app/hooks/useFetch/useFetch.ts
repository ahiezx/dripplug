import { useState } from "react";
import { useEffect } from "react";
function useFetch(url: string, initValue: any = null) {
  const [data, setData] = useState(initValue);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);

  function fetchData() {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`error fetching ${url}`);
        }
        return response.json();
      })
      .then((response) => {
        setData(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  function refetch() {
    fetchData();
  }
  return { data, error, loading, refetch };
}
export default useFetch;