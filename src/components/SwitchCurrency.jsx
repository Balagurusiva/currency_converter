import React from 'react'
import { Button, Grid } from '@mui/material'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'

const SwitchCurrency = () => {
  return (
    <Grid itemxs={12} md='auto'>
      <Button sx={{
           borderRadius:1,
           height:"100%",
      }}>
         <CompareArrowsIcon sx={{fontSize:30}}/>
      </Button>
    </Grid>

  )
}

export default SwitchCurrency