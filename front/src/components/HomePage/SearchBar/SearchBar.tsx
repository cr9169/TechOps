import SearchIcon from "@mui/icons-material/Search";
import "./SearchBar.scss";
import { useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search"
        value={searchValue}
        onChange={handleInputChange}
      />
      <button className="search-button">
        <SearchIcon className="search-icon" />
      </button>
    </div>
  );
}

export default SearchBar;
