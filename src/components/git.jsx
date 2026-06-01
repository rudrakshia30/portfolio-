import { useEffect, useState } from "react";
import "./git.css";
function GithubStats() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://api.github.com/users/rudrakshia30")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  if (!data) return <h3>Loading...</h3>;
  return (
    <div className="stats">
      <h2>GitHub Stats <img src={data.avatar_url} width="100" /></h2>
      <p><b>Username:</b> {data.login}</p>
      <p><b>Public Repos:</b> {data.public_repos}</p>
      <p><b>Followers:</b> {data.followers}</p>
      <p><b>Following:</b> {data.following}</p>
    </div>
  );
}
export default GithubStats;