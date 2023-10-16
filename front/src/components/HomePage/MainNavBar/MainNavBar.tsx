import SearchBar from "../SearchBar/SearchBar";
import "./MainNavBar.scss";

const MainNavBar = () => {
  return (
    <div className="nav-main-container">
      <SearchBar />
      <div className="nav-links-section">
        <a href="/teamPage" className="nav-team-page-link">
          Our Team
        </a>
        <a href="/authPage" className="nav-logout-link">
          Log Out
        </a>
      </div>
    </div>
  );
};

export default MainNavBar;
