import { useEffect, useState } from "react";
function GithubRepos() {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/rudrakshia30/repos")
      .then((res) => res.json())
      .then((data) => {
        setRepos(data);
      });
  }, []);
  return (
    <div>
      <h2>GitHub Repositories</h2>

      <div className="container">
        {repos.map((repo) => (
          <div className="card" key={repo.id}>
            <h3>{repo.name}</h3>
            <p>
              {repo.description
                ? repo.description
                : "No description available"}
            </p>
            <p>
              <b>Language:</b> {repo.language || "Not specified"}
            </p>
            <p>
              <b>Stars:</b> {repo.stargazers_count}
            </p>
            <a href={repo.html_url} target="_blank" rel="noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
export default GithubRepos;