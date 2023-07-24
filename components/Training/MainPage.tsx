import React from "react";
import { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import Chart from "../Dashboard/Chart";

const MainPage = () => {
  const [select, setSelect] = useState(`Blood Pressure`);

  console.log(select);
  return (
    <Grid
      container
      spacing={3}
      px="24px"
      py={5}
      bgcolor="green"
      minHeight="48vw"
      height="100%"
    >
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 240,
          }}
        >
          <Typography color="primary">Average Blood Pressure</Typography>
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12} md={4} lg={4}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography mb={4} color="primary">
            Inputs
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">General</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="General"
              sx={{ width: "250px" }}
              value={select}
              onChange={(e) => {
                setSelect(e.target.value);
              }}
            >
              <MenuItem value={`Blood Pressure`}>Blood Pressure</MenuItem>
              <MenuItem value={`SPO2`}>SPO2</MenuItem>
              <MenuItem value={`Heart Rate`}>Heart Rate</MenuItem>
            </Select>
          </FormControl>
          {select === "Blood Pressure" && (
            <Box display="flex" ml="30px" alignItems="center">
              <Input type="number" sx={{width:"45px"}} />
              /
              <Input type="number" sx={{width:"45px"}} />
              <Button sx={{ml:"10px"}}>Submit</Button>
            </Box>
          )}
          {select === "SPO2" && 
            <Box display="flex" ml="30px" alignItems="center">
            <Input type="number" sx={{width:"45px"}} /> %
            <Button sx={{ml:"10px"}}>Submit</Button>
          </Box>
          }
          {select === "Heart Rate" && 
            <Box display="flex" ml="30px" alignItems="center">
            <Input type="number" sx={{width:"45px"}} /> BPM
            <Button sx={{ml:"10px"}}>Submit</Button>
          </Box>
          }
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <Typography>Books</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default MainPage;
