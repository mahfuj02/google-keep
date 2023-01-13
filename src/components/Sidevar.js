import {
  CreateOutlined,
  DeleteOutline,
  LightbulbOutlined,
  NotificationsOutlined,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getWindowSize } from "./Windows";
// import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
export default function Sidevar() {
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

  return (
    <>
      {windowSize.innerWidth < 900 && <MobileSidebar />}
      {windowSize.innerWidth >= 900 && (
        <Box>
          <nav aria-label="main mailbox folders">
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LightbulbOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Notes" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <NotificationsOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Reminders" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CreateOutlined />
                  </ListItemIcon>
                  <ListItemText primary="Label" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <DeleteOutline />
                  </ListItemIcon>
                  <ListItemText primary="Bin" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      )}
    </>
  );
}

export function MobileSidebar() {
  return (
    <Box sx={{ borderRadius: 50 }}>
      <nav aria-label="sidevar">
        <List>
          <ListItem>
            <ListItemButton sx={{ borderRadius: 50 }}>
              <ListItemIcon>
                <LightbulbOutlined />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ borderRadius: 50 }}>
              <ListItemIcon>
                <NotificationsOutlined />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ borderRadius: 50 }}>
              <ListItemIcon>
                <CreateOutlined />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton sx={{ borderRadius: 50 }}>
              <ListItemIcon>
                <DeleteOutline />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
