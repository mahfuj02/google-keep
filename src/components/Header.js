import { Avatar, Box, Divider, Fade, Stack, Switch } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchBar from "./SearchBar";
import { useEffect, useState } from "react";
import { LogoutOutlined } from "@mui/icons-material";
import { getWindowSize } from "./Windows";
// import MobileHeader from "./MobileHeader";
// import profilePhoto from '../assets/images/profilePhoto.jpg'

export default function Header({ handleSwitch, themeType }) {
  const [checkedLogOut, setCheckedLogOut] = useState(false);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const LogOuthandle = () => {
    setCheckedLogOut((prev) => !prev);
  };

  return (
    <>
      {windowSize.innerWidth < 900 && (
        <MobileHeader handleSwitch={handleSwitch} themeType />
      )}
      {windowSize.innerWidth >= 900 && (
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

          <SearchBar />

          <Stack
            sx={{ paddingRight: "5%", width: "30%", alignItems: "center" }}
            direction="row-reverse"
          >
            <Avatar
              sx={{ cursor: "pointer" }}
              src=""
              alt=""
              onClick={LogOuthandle}
            />
            <Fade in={checkedLogOut}>
              <LogoutOutlined sx={{ mr: "5px", cursor: "pointer" }} />
            </Fade>

            <Switch
              sx={{ marginRight: "10%" }}
              chacked={themeType === "light"}
              onChange={handleSwitch}
              color="primary"
            />
          </Stack>
        </Stack>
      )}
      <Divider sx={{ bgcolor: "primary.light", opacity: 0.2 }} />
    </>
  );
}

export function MobileHeader({ handleSwitch, themeType }) {
  const [checkedLogOut, setCheckedLogOut] = useState(false);
  const LogOuthandle = () => {
    setCheckedLogOut((prev) => !prev);
  };
  return (
    <>
      <Stack sx={{ height: 60, alignItems: "center" }} direction="row">
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
        <SearchBar />

        <Stack
          sx={{
            paddingRight: { xs: "2px", md: "5%" },
            width: "20%",
            alignItems: "center",
          }}
          direction="row-reverse"
        >
          <Avatar
            sx={{ cursor: "pointer" }}
            src=""
            alt=""
            onClick={LogOuthandle}
          />
          <Fade in={checkedLogOut}>
            <LogoutOutlined sx={{ mr: "5px", cursor: "pointer" }} />
          </Fade>
        </Stack>
      </Stack>
      <Divider sx={{ bgcolor: "primary.light", opacity: 0.2 }} />
    </>
  );
}
