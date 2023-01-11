import { IconButton, InputBase, Paper } from "@mui/material";
import { Search } from "@mui/icons-material";

export default function SearchBar() {
  return (
    <Paper
      component="form"
      sx={{ marginRight:"10%", p: "2px 4px", display: "flex", alignItems: "center", width: 400, backgroundColor: '#ffff' }}
    >
      <IconButton type="button" sx={{ color:'#000', p: "10px" }} aria-label="search">
        <Search sx={{color:"#FF000"}} />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 , color:'primary.hovarColor'}}
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
      />
    </Paper>
  );
}
