import React from "react";

function NavBar({ onCategorySelect, onSearch }) {

  const categories = [
    "Trending",
    "Action",
    "Romance",
    "Comedy",
    "Fantasy",
    "Horror",
    "Sci-Fi",
    "Documentary"
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    if (onSearch) onSearch(query);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        {/* Logo */}
        <span className="navbar-brand fw-bold">🎬 MovieApp</span>

        {/* Toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          {/* Menu */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {categories.map((cat) => (
              <li className="nav-item" key={cat}>
                <button
                  className="nav-link btn btn-link text-warning"
                  onClick={() => onCategorySelect(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <form className="d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              name="search"
              placeholder="Search movies..."
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;