
import { useGitHubUser } from "./UseGitHubUser";

export function GitHubUser({ username }) {
  const { data, loading, error } = useGitHubUser(username);

  return (
    <div>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error: {error.message}</h1>}
      {data && <h1>{data.login}</h1>}
      {data && <img src={data.avatar_url} alt={data.login} />}
    </div>
  );
}
