import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PublicIcon from "@mui/icons-material/Public";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import AssignmentIcon from "@mui/icons-material/Assignment";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import Link from "next/link";
import { useRouter } from "next/router";
import { primaryList } from "./listItemData";

export default function MainListItemsContent({ mode,locale }: any) {
  const primeList = primaryList(locale)
  const router = useRouter();
  return (
    <React.Fragment>
      {primeList.map((item, key) => (
        <Link
          key={key}
          href={item.href}
          style={{ textDecoration: "none", color: mode ? "white" : "black" }}
        >
          <ListItemButton
            style={
              router.asPath === item.href
                ? { backgroundColor: `#42a5f525` }
                : {}
            }
          >
            <ListItemIcon>
              {key == 0 && <DashboardIcon />}
              {key == 1 && <HealthAndSafetyIcon color="error" />}
              {key == 2 && <FitnessCenterIcon style={{ color: `green` }} />}
              {key == 3 && <AutoStoriesIcon style={{ color: `brown` }} />}
              {key == 4 && <PublicIcon color="primary" />}
              {key == 5 && <SelfImprovementIcon style={{ color: `orange` }} />}
              {key == 6 && <MusicNoteIcon color="secondary" />}
              {key == 7 && <AssignmentIcon style={{ color: `gold` }} />}
              {key == 8 && (
                <SportsScoreIcon style={{ color: mode ? "white" : "black" }} />
              )}
            </ListItemIcon>
            <ListItemText>{item.title}</ListItemText>
          </ListItemButton>
        </Link>
      ))}
    </React.Fragment>
  );
}
