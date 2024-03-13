import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Appbar from "MUI-components/Appbar";
import Drawere from "MUI-components/Drawer";
import { useMemo, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import getDesignTokens from "styles/MyTheme";

const drawerWidth = 240;

const Root = () => {
  const [mode, setmyMode] = useState(
    localStorage.getItem("currentMode") === null
      ? "light"
      : localStorage.getItem("currentMode") === "light"
      ? "light"
      : "dark"
  );

  const [noneORblok, setnoneORblok] = useState("none");
  const [drawerType, setdrawerType] = useState("permanent");
  const showDrawer = () => {
    setdrawerType("temporary");
    setnoneORblok("block");
  };

  const noneDrawer = () => {
    setdrawerType("permanent");
    setnoneORblok("none");
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <Appbar {...{ drawerWidth, showDrawer }} />

        <Drawere
          {...{ drawerWidth, setmyMode, noneORblok, drawerType, noneDrawer }}
        />

        <Box
          component="main"
          sx={{
            ml: { sm: `${drawerWidth}px` },
            mt: "66px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Outlet />
        </Box>
      </div>
    </ThemeProvider>
  );
};

export default Root;
