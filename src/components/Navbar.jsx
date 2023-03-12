import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      zIndex: 100,
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography color="#fff" fontWeight={600} variant="h5" ml={3} fontFamily="sans-serif" letterSpacing={5}>
        YouTube 2.0
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;
