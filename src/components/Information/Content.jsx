import { string, number, shape } from "prop-types";

import { Typography } from "@mui/material"
import { Box } from "@mui/system"

import { countryCases, vaccinesData } from './utils'

const Content = ({ vaccines, ...cases }) => {
  return (
    <>
      <Box>
        {countryCases.map(({ id, label }) => (
          <Typography key={id}>
            {label}
            <Typography sx={{fontWeight: 700, margin: "0 10px"}} component="span" role={id}>
              {cases[id]}
            </Typography>
          </Typography>
        ))}
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
    administered: number.isRequired,
    people_vaccinated: number.isRequired,
    people_partially_vaccinated: number.isRequired,
  })
};

export default Content;
