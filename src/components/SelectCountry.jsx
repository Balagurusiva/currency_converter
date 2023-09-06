import React from 'react'
import { Grid,TextField} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete';
import useAxios from '../../hooks/useAxios';

const SelectCountry = () => {
  const [data,loader,error] = useAxios("https://restcountries.com/v3.1/all")
  
   if(loader){
    return (
      <Grid item xs={12} md={3}>
         <Skeleton variant="rounded" height={60}/>
      </Grid>
    )
   }

   if(error){
    return "something went wrong"
   }

  const dataFilter = data.filter(item => "currencies" in item)
  const dataCountries =   dataFilter.map(item => {
    return `${Object.keys(item.currencies)[0] }- ${item.name.common} `
  }) 

  return (
     <Grid item xs={12} md={3}>
        <Autocomplete
          value  ="option1"
           options ={ dataCountries} 
           renderInput={(params) => (
           <TextField {...params}  label="from"  />
        )}   
      />
     </Grid>
  )
}

export default SelectCountry