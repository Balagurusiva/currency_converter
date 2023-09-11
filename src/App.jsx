import React, { useState } from 'react'
import { Button, Container, Grid, Typography } from '@mui/material'
import './App.css'
import InputAmount from './components/inputAmount'
import SelectCountry from './components/SelectCountry'
import SwitchCurrency from './components/SwitchCurrency'

const App = () => {

  const [fromCurrency, setFromCurrency] = useState("")
  const [toCurrency, setToCurrency] =useState("")

  const BoxStyle = {
    background: '#fdfdfd',
    marginTop:'10rem',
    textAlign:'center',
    color:"#222",
    minHeight:"20rem",
    borderRadius:2,
    padding: "4rem 2rem",
    boxShadow:"0px 10px 15px -3px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1)",
    postion:'relative'
  }
  return (
    <Container maxWidth="md" sx={BoxStyle}>
      <Typography variant='h5' sx={{ marginBottom: '2rem' }}>Currency converstion</Typography>
      <Grid container spacing={2} > 
        <InputAmount />
        <SelectCountry value={fromCurrency} setValue={setFromCurrency}  label="From"/>
        <SwitchCurrency />
        <SelectCountry value = {toCurrency} setValue = {setToCurrency} label="To"/>
      </Grid>
    </Container>
  )
}


export default App