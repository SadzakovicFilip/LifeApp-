import React from 'react'
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import BalanceIcon from "@mui/icons-material/Balance";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Link from "next/link";


import { secondaryList,businesses } from './listItemData';
import { useRouter } from 'next/router';


const SecondaryListItems = ({mode,locale}:any) => {
  const business=businesses(locale)
  const secList = secondaryList(locale)
  const router=useRouter()
  return (
        <React.Fragment>
          <ListSubheader component="div" inset>
            {business}
          </ListSubheader>
          {secList.map((item,key)=>(
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
                     {key == 0 && <BalanceIcon style={{color:`goldenrod`}} />}
                     {key == 1 && <LaptopMacIcon style={{ color: "green" }} />}
                     {key == 2 && <ApartmentIcon style={{ color: "darkorchid" }} />}
       
                   </ListItemIcon>
                   <ListItemText>{item.title}</ListItemText>
                 </ListItemButton>
               </Link>
          ))}
     
      
        </React.Fragment>
      );
  
}

export default SecondaryListItems