import React from 'react'
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

import BalanceIcon from "@mui/icons-material/Balance";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Link from "next/link";
const SecondaryListItems = () => {
  return (
        <React.Fragment>
          <ListSubheader component="div" inset>
            Businesses
          </ListSubheader>
          <Link href="/Law" style={{ textDecoration: "none", color: "black" }}>
            <ListItemButton>
              <ListItemIcon>
                <BalanceIcon style={{ color: "	goldenrod" }} />
              </ListItemIcon>
              <ListItemText primary="Law" />
            </ListItemButton>
          </Link>
          <Link
            href="/Programming"
            style={{ textDecoration: "none", color: "black" }}
          >
            <ListItemButton>
              <ListItemIcon>
                <LaptopMacIcon style={{ color: "green" }} />
              </ListItemIcon>
              <ListItemText primary="Programming " />
            </ListItemButton>
          </Link>
          <Link href="/Ranting" style={{ textDecoration: "none", color: "black" }}>
            <ListItemButton>
              <ListItemIcon>
                <ApartmentIcon style={{ color: "darkorchid" }} />
              </ListItemIcon>
              <ListItemText primary="Ranting" />
            </ListItemButton>
          </Link>
        </React.Fragment>
      );
  
}

export default SecondaryListItems