import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";
import en from "../SharedLayouts/locales/en";
import sr from "../SharedLayouts/locales/sr";
import { useRouter } from "next/router";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";

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
      bgcolor="red"
      flexDirection="column"
    >
      <HealthAndSafetyIcon style={{ fontSize: "350px" }} />
      <Typography fontSize="100px">{lang.health}</Typography>
    </Box>
  );
};

export default Animation;
