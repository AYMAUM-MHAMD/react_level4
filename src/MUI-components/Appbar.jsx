import { Menu } from "@mui/icons-material";
import {
  Avatar,
  Link,
  Typography,
  Toolbar,
  AppBar,
  IconButton,
} from "@mui/material";

const Appbar = ({ drawerWidth, showDrawer }) => {
  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          onClick={() => {
            showDrawer();
          }}
          sx={{ mr: "9px", display: { sm: "none" } }}
        >
          <Menu />
        </IconButton>
        <Link
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { fontSize: "18px" },
          }}
          color="inherit"
          href="/"
        >
          My expenses
        </Link>

        <Typography mr={2} variant="body1" color="inherit">
          Ali Hassan
        </Typography>
        <Avatar alt="Ali Hassan.JPG" src="./Imgs/Ali Hassan.JPG" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;
