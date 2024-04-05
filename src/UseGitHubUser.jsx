import { useEffect, useState } from "react";

export function useGitHubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGitHub = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error("User not found");
        }
        const userData = await response.json();
        setData(userData);
      } catch (error) {
        setError(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchGitHub();
    }
  }, [username]);

  return { data, loading, error };
}
