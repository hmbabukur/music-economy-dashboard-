import { useEffect, useState } from "react";
import axios from "axios";


export default function useFetchData(endpoint, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(endpoint));
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;

    let mounted = true;
    setLoading(true);
    axios
      .get(endpoint)
      .then((res) => {
        if (mounted) setData(res.data);
      })
      .catch((err) => {
        if (mounted) setError(err);
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, deps.length ? deps : [endpoint]);

  return { data, loading, error };
}
