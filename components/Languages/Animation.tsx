import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import en from "../SharedLayouts/locales/en";
import sr from "../SharedLayouts/locales/sr";
import { useRouter } from "next/router";
import PublicIcon from "@mui/icons-material/Public";

const Animation = () => {
  const router = useRouter();
  const { locale } = router;
  const lang = locale === "en" ? en : sr;
  return (
    <Box
      color="white"
      display="flex"
      width="100%"
      minHeight="48vw"
      justifyContent="center"
      alignItems="center"
      bgcolor="lightBlue"
      flexDirection="column"
    >
      <PublicIcon style={{ fontSize: "350px" }} />
      <Typography fontSize="100px">{lang.language}</Typography>
    </Box>
  );
};

export default Animation;
