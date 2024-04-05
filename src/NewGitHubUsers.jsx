import { useState } from "react";
import { GitHubUser } from "./GitHubUser";


export function NewGitHubUsers() {
  const [searchInput, setSearchInput] = useState("");
  const [username, setUsername] = useState("");

  const handleSearchInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchUser = (event) => {
    event.preventDefault(); 
    setUsername(searchInput); 
    setSearchInput(""); 
  };

  return (
    <div>
      <form onSubmit={handleSearchUser}>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInput}
          placeholder="Insert the username you are looking for"
        />
        <button type="submit">Search</button>
      </form>
      {username && <GitHubUser username={username} />}
    </div>
  );
}
