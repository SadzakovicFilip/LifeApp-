import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PublicIcon from "@mui/icons-material/Public";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import BalanceIcon from "@mui/icons-material/Balance";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ApartmentIcon from "@mui/icons-material/Apartment";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Link from "next/link";
import { useRouter } from "next/router";
export default function MainListItemsContent() {
  const router = useRouter();
  return (
    <React.Fragment>
      <Link href="/" style={{ textDecoration: "none", color: "black" }}>
      
      <ListItemButton style={router.asPath === "/" ? { backgroundColor: "#00000010" } : {}}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItemButton>
      </Link>
      <Link href="/Health" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton style={router.asPath === "/Health" ? { backgroundColor: "#00000010" } : {}}>
          <ListItemIcon >
            <HealthAndSafetyIcon color="error"  />
          </ListItemIcon>
          <ListItemText primary="Health" />
        </ListItemButton>
      </Link>
      <Link href="/Training" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton style={router.asPath === "/Training" ? { backgroundColor: "#00000010" } : {}}>
          <ListItemIcon>
            <FitnessCenterIcon style={{ color: "green" }} />
          </ListItemIcon>
          <ListItemText primary="Training" />
        </ListItemButton>
      </Link>
      <Link href="/Books" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton style={router.asPath === "/Books"  ? { backgroundColor: "#00000010" } : {}}>
          <ListItemIcon>
            <AutoStoriesIcon style={{ color: "brown" }} />
          </ListItemIcon>
          <ListItemText primary="Books" />
        </ListItemButton>
      </Link>
      <Link
        href="/Languages"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemButton style={router.asPath === "/Languages" ? { backgroundColor: "#00000010" } : {}}>
          <ListItemIcon>
            <PublicIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Languages" />
        </ListItemButton>
      </Link>
      <Link
        href="/Meditation"
        style={{ textDecoration: "none", color: "black" }}
      >
        <ListItemButton style={router.asPath === "/Meditation" ? { backgroundColor: "#00000010" } : {}}>
          <ListItemIcon>
            <SelfImprovementIcon style={{ color: "orange" }} />
          </ListItemIcon>
          <ListItemText primary="Meditation" />
        </ListItemButton>
      </Link>
      <Link href="/Music" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton style={router.asPath === "/Music"  ? { backgroundColor: "#00000010" } : {}}>
          <ListItemIcon>
            <MusicNoteIcon color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Music" />
        </ListItemButton>
      </Link>
      <Link href="/ToDo" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton style={router.asPath === "/ToDo" ? { backgroundColor: "#00000010" } : {}}>
          <ListItemIcon>
            <AssignmentIcon style={{ color: "gold" }} />
          </ListItemIcon>
          <ListItemText primary="ToDo" />
        </ListItemButton>
      </Link>
      <Link href="/Goals" style={{ textDecoration: "none", color: "black" }}>
        <ListItemButton style={router.asPath === "/Goals" ? { backgroundColor: "#00000010" } : {}}>
          <ListItemIcon>
            <SportsScoreIcon style={{ color: "black" }} />
          </ListItemIcon>
          <ListItemText primary="Goals" />
        </ListItemButton>
      </Link>
    </React.Fragment>
  );
}


