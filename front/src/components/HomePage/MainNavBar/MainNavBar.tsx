import "./MainNavBar.scss";

const MainNavBar = () => {
  return (
    <div className="nav-main-container">
      <div className="nav-links-section">
        <a href="/teamPage" className="team-page-link">
          Our Team
        </a>
        <a href="/authPage" className="log-out-link">
          Log Out
        </a>
      </div>
    </div>
  );
};

export default MainNavBar;
