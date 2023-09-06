import React from 'react'
import { Grid, InputAdornment, TextField } from '@mui/material'

const inputAmount = () => {
  return (
      <Grid item xs={12} md>
        <TextField
           label="Amount"
           fullWidth
           InputProps={{
            type: 'number',
            startAdornment: <InputAdornment position='start'>$</InputAdornment>
           }}/> 
      </Grid>
  )  
}

export default inputAmount