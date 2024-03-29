import {
  Divider,
  Drawer,
  List,
  ListItem,
  useTheme,
  IconButton,
  Box,
} from "@mui/material";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  Brightness4,
  Brightness7,
  Create,
  Home,
  Logout,
  Person2,
  Settings,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

const Drawere = ({
  drawerWidth,
  setmyMode,
  noneORblok,
  drawerType,
  noneDrawer,
}) => {
  const location = useLocation();

  const navigate = useNavigate();
  const theme = useTheme();

  const myList = [
    { text: "Home", icon: <Home />, path: "/" },
    { text: "Create", icon: <Create />, path: "/create" },
    { text: "Profile", icon: <Person2 />, path: "/profile" },
    { text: "Settings", icon: <Settings />, path: "/settings" },
  ];

  return (
    <Box component="nav">
      <Drawer
        sx={{
          display: { xs: noneORblok, sm: "block" },
          width: `${drawerWidth}px`,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: `${drawerWidth}px`,
            boxSizing: "border-box",
          },
        }}
        variant={drawerType}
        anchor="left"
        open={true}
        onClose={() => {
          noneDrawer();
        }}
      >
        <List>
          <ListItem
            sx={{ display: "flex", justifyContent: "center", mb: "12px" }}
            disablePadding
          >
            <IconButton
              sx={{ mt: "3px" }}
              onClick={() => {
                localStorage.setItem(
                  "currentMode",
                  theme.palette.mode === "dark" ? "light" : "dark"
                );
                setmyMode(theme.palette.mode === "light" ? "dark" : "light");
              }}
              color="inherit"
            >
              {theme.palette.mode === "dark" ? (
                <Brightness7 sx={{ color: "orange" }} />
              ) : (
                <Brightness4 />
              )}
            </IconButton>
          </ListItem>
      
          <Divider />
      
          {myList.map((item) => {
            return (
              <ListItem
              key={item.text}
                sx={{
                  bgcolor:
                    location.pathname === item.path
                      ? // @ts-ignore
                        theme.palette.greyr
                      : null,
                }}
                disablePadding
              >
                <ListItemButton
                  onClick={() => {
                    navigate(item.path);
                  }}
                >
                  <ListItemIcon>
                  {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            );
          })}
      
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Logout />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Drawere;
