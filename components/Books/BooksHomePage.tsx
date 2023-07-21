import React from 'react'
import { Grid,Paper, Typography } from '@mui/material'
import Chart from '../Dashboard/Chart'
const BooksHomePage = () => {
  return (
    <Grid container spacing={3}>
    {/* Chart */}
    <Grid item xs={12} md={8} lg={9}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 240,
        }}
      >
        {/* <Chart /> */}
      </Paper>
    </Grid>
    {/* Recent Deposits */}
    <Grid item xs={12} md={4} lg={3}>
      <Paper
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          height: 240,
        }}
      >
        <Typography>Books</Typography>
      </Paper>
    </Grid>
    {/* Recent Orders */}
    <Grid item xs={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <Typography>Books</Typography>
      </Paper>
    </Grid>
  </Grid>
  )
}

export default BooksHomePage