import { useState, useEffect } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      onSearch(query);
    }, 500); // wait 0.5s after typing

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <div className="d-flex me-3">
      <input
        className="form-control"
        type="search"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;