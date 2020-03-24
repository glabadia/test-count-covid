import { useState, useEffect } from "react";

export default function useStats(url) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    async function fetchData() {
      setLoading(true);
      console.log("Fetching Data...");
      const dataPromise = fetch(url, { signal: signal });
      const data = await dataPromise
        // const data = await fetch(url)
        .then(data => data.json())
        .catch(err => setError(err));

      setStats(data);
      setLoading(false);
      console.log(stats);
    }
    fetchData();

    return function cleanup() {
      controller.abort();
    };
  }, [url]);

  return {
    stats,
    loading,
    error
  };
}
