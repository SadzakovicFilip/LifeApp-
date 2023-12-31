import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NightsStayIcon from "@mui/icons-material/NightsStay";
import LightModeIcon from "@mui/icons-material/LightMode";
import Image from "next/image";
import { FormControl, Select, InputLabel, MenuItem } from "@mui/material";
import { useRouter } from "next/router";
import MainListItemsContent from "@/components/SharedLayouts/ListItems/MainlistItems";
import SecondaryListItems from "./ListItems/SecondaryListItems";
import { SerbianFlag, BritishFlag } from "./locales/customFlagIcons";

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();
const darkModeTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
type Props = {
  children: React.ReactNode;
};
function SharedLayoutContent({ children }: Props) {
  const [darkMode, setDarkMode] = React.useState(false);
  React.useEffect(() => {
    const time = new Date();
    const hours = time.getHours();
    if (hours > 18 || hours < 6) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);
  const router = useRouter();
  const { locale, asPath } = router;
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const changeLanguage = (value: any) => {
    router.push(`${asPath}`, `/${asPath}`, { locale: value });
  };

  return (
    <ThemeProvider theme={darkMode ? darkModeTheme : mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              User
            </Typography>

            <FormControl
              style={{
                width: "70px",
                marginRight: "30px",
                display: "flex",
                textAlign: "center",
              }}
            >
              <InputLabel id="demo-simple-select-label">
                {locale === "en" ? `English` : `Srpski`}
              </InputLabel>
              <Select
                style={{ height: "45px" }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Language"
                placeholder="lang"
                onChange={(e) => changeLanguage(e.target.value)}
                value={locale}
              >
                <MenuItem value={`sr`}>
                  <SerbianFlag />
                </MenuItem>
                <MenuItem value={`en`}>
                  <BritishFlag />
                </MenuItem>
              </Select>
            </FormControl>

            <IconButton color="inherit" sx={{ mr: "30px" }}>
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <NightsStayIcon />
              ) : (
                <LightModeIcon style={{ color: "gold" }} />
              )}
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <h3>{`${asPath.slice(1, router.asPath.length)}`}</h3>
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItemsContent mode={darkMode} locale={locale} />
            <Divider sx={{ my: 1 }} />
            <SecondaryListItems mode={darkMode} locale={locale} />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Box  sx={{ m:0,p:0}}>
            {children}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function SharedLayout({ children }: Props) {
  return <SharedLayoutContent>{children}</SharedLayoutContent>;
}
