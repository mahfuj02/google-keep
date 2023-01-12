import { Avatar, Box, Divider, Stack, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import { useState } from "react";
// import profilePhoto from '../assets/images/profilePhoto.jpg'

export default function Header({ handleSwitch, themeType }) {
  return (
    <>
      <Stack sx={{ height: 60, alignItems: "center" }} direction="row">
        <Stack sx={{ width: "25%", alignItems: "center" }} direction="row">
          <Box
            sx={{
              alignItems: "center",
              align: "center",
              padding: 1,
              marginLeft: 3,
              marginRight: 2,
              height: 40,
              width: 40,
              "&:hover": {
                //    backgroundColor:"#303134",
                backgroundColor: "primary.hovarColor",
                borderRadius: 50,
              },
            }}
          >
            <MenuIcon />
          </Box>

          <Box
            component="img"
            sx={{
              height: 44,
              width: 40,
              marginRight: 2,
            }}
            src="https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png"
            alt="logo"
            loading="lazy"
          />
          <Box sx={{ fontSize: "22px" }}>Keep</Box>
        </Stack>

        <SearchBar  />

        <Stack
          sx={{ paddingRight: "5%", width: "30%", alignItems: "center" }}
          direction="row-reverse"
        >
          <Avatar src="" alt="profile" />
          <Switch
            sx={{ marginRight: "10%" }}
            chacked={themeType === "light"}
            onChange={handleSwitch}
            color="primary"
          />
        </Stack>
      </Stack>
      <Divider sx={{ bgcolor: "primary.light", opacity:0.2 }} />
    </>
  );
}
