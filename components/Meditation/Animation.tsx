import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import en from "../SharedLayouts/locales/en";
import sr from "../SharedLayouts/locales/sr";
import { useRouter } from "next/router";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

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
      bgcolor="orange"
      flexDirection="column"
    >
      <SelfImprovementIcon style={{ fontSize: "350px" }} />
      <Typography fontSize="100px">{lang.meditation}</Typography>
    </Box>
  );
};

export default Animation;
