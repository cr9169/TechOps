import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.scss";

function SearchBar() {
  return (
    <div className="search-container">
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button">
        <SearchIcon className="search-icon" />
      </button>
    </div>
  );
}

export default SearchBar;
