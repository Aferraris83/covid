import { string, number, shape } from "prop-types";

import { Typography } from "@mui/material"
import { Box } from "@mui/system"

const Content = ({ confirmed, recovered, perInhabitant, date, vaccines, perPeopleVaccine}) => {
  return (
    <>
      <Box>
        <Typography>{`confirmados: ${confirmed}`}</Typography>
        <Typography>{`recuperados: ${recovered}`}</Typography>
        <Typography>{`casos cada 100.000 habitantes: ${perInhabitant}`}</Typography>
        <Typography>{`fecha primer fallecido: ${date}`}</Typography>
      </Box>
      <Box>
        <Typography>{`cantidad de vacunas disponibles: ${vaccines.administered}`}</Typography>
        <Typography>{`total de personas vacunadas: ${vaccines.people_vaccinated}`}</Typography>
        <Typography>{`parcial de personas vacunadas: ${vaccines.people_partially_vaccinated}`}</Typography>
        <Typography>{`porcentaje de poblacion vacunadas: ${perPeopleVaccine} %`}</Typography>
      </Box>
    </>
  )
}

Content.propTypes = {
  confirmed: number.isRequired,
  recovered: number.isRequired,
  perInhabitant: number.isRequired,
  date: string.isRequired,
  vaccines: shape({
    administered: number.isRequired,
    people_vaccinated: number.isRequired,
    people_partially_vaccinated: number.isRequired,
  }).isRequired,
  perPeopleVaccine: number.isRequired,
};

export default Content;
