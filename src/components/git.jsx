import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import "./git.css";

function GithubStats() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    fetch("https://api.github.com/users/rudrakshia30", {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Unable to load GitHub profile");
        }

        return response.json();
      })
      .then((githubData) => {
        setData(githubData);
      })
      .catch((fetchError) => {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (error) {
    return (
      <div className="github-status-message">
        <h3>{error}</h3>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="github-status-message">
        <h3>Loading GitHub profile...</h3>
      </div>
    );
  }
  return (
    <section className="github-page" data-aos="fade-up">
      <span className="github-section-label">GITHUB</span>

      <div className="github-header">
        <img
          src={data.avatar_url}
          alt={`${data.login} GitHub profile`}
          className="github-avatar"
        />

        <div className="github-heading-content">
          <h1 className="github-title">GitHub Stats</h1>

          <a
            href={data.html_url}
            target="_blank"
            rel="noreferrer"
            className="github-profile-link"
          >
            @{data.login}
          </a>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-label">Username</span>
          <span className="stat-value username-value">
            {data.login}
          </span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Public Repositories</span>
          <span className="stat-value">
            {data.public_repos}
          </span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Followers</span>
          <span className="stat-value">
            {data.followers}
          </span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Following</span>
          <span className="stat-value">
            {data.following}
          </span>
        </div>
      </div>

      <div className="calendar-card" data-aos="fade-up">
        <h2 className="calendar-title">
          Contribution Calendar
        </h2>

        <p className="calendar-description">
          My GitHub contribution activity over the last year
        </p>

        <div className="calendar-scroll">
          <div className="calendar-inner">
            <GitHubCalendar
              username="rudrakshia30"
              colorScheme="dark"
              blockSize={14}
              blockMargin={5}
              fontSize={14}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GithubStats;