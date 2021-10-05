import { string, number, shape } from "prop-types";

import { Typography } from "@mui/material"
import { Box } from "@mui/system"

import { countryCases, vaccinesData } from './utils'

const Content = ({ vaccines, ...cases }) => {
  return (
    <>
      <Box>
        {countryCases.map(({ id, label }) => (
          <Typography key={id}>{`${label} ${cases[id]}`}</Typography>
        ))}
      </Box>
      <Box>
        {vaccinesData.map(({ id, label}) => (
          <Typography key={id}>{`${label} ${vaccines[id]}`}</Typography>
        ))}
      </Box>
    </>
  )
}

Content.propTypes = {
  confirmed: number.isRequired,
  recovered: number.isRequired,
  perInhabitant: number.isRequired,
  date: string,
  vaccines: shape({
    administered: number.isRequired,
    people_vaccinated: number.isRequired,
    people_partially_vaccinated: number.isRequired,
  }).isRequired,
};

Content.defaultProps = {
  date: '',
}

export default Content;
