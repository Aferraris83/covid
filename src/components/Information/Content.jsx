import { useState } from 'react';
import { string, number, shape } from "prop-types";

import { Typography } from "@mui/material"
import { Box } from "@mui/system"

import { countryCases, vaccinesData } from './utils'

const Content = ({ vaccines, ...cases }) => {
  const dates = cases?.dates && Object.keys(cases.dates);
  const maxDate = dates && dates[0];
  const minDate = dates && dates[dates.length-1];
  const [date, setDate] = useState(maxDate)

  const handleChange = ({ target }) => {
    if(target.value < maxDate && target.value > minDate) {
      setDate(target.value)
    }
  }

  return (
    <>
      <Box role="information">
        {countryCases.map(({ id, label }) => (
          <Typography key={id}>
            {label}
            <Typography sx={{fontWeight: 700, margin: "0 10px"}} component="span" role={id}>
              {cases[id]}
            </Typography>
          </Typography>
        ))}
        <Box display="flex" flexDirection="column">
          {cases.dates && (
            <>
              <Typography role="date">{`Cantidad de fallecidos por fecha: ${date} : ${cases.dates[date]}`}</Typography>
              <input 
                type="date" 
                value={date} 
                onChange={handleChange} 
                id="date-picker" 
                max={maxDate} 
                min={minDate} 
              />
            </>
          )}
        </Box>
      </Box>
      <Box>
        {vaccines && vaccinesData.map(({ id, label}) => (
          <Typography key={id}>
            {label}
            <Typography sx={{fontWeight: 700, margin: "0 10px"}} component="span" role={id}>
              {vaccines[id]}
            </Typography>
          </Typography>
        ))}
      </Box>
    </>
  )
}

Content.propTypes = {
  cases: shape({
    confirmed: number.isRequired,
    recovered: number.isRequired,
    perInhabitant: number.isRequired,
    date: string.isRequired,
  }),
  vaccines: shape({
    administered: number,
    people_vaccinated: number,
    people_partially_vaccinated: number,
  })
};

export default Content;
