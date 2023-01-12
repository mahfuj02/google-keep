import { IconButton, InputBase, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";

export default function SearchBar() {
  const [searchActive, setSearchActive] = useState(false);

  function handleSearch(e) {
    if (!searchActive) {
      setSearchActive(true);
    }
  }

  return (
    <Paper
      onClick={handleSearch}
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "50%",
        backgroundColor: searchActive
          ? "primary.searchBoxColor"
          : "primary.hovarColor",
      }}
    >
      <IconButton
        type="button"
        sx={{ color: "#000", p: "10px" }}
        aria-label="search"
      >
        <Search
          sx={{ color: searchActive ? "primary.hoverColor" : "primary.light" }}
        />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, color: "primary.hovarColor" }}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
}
