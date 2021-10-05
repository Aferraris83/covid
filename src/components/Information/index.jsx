import { useEffect, useState } from "react";
import { string, number } from "prop-types"; 

import { Box } from "@mui/system";

import { useHistory } from "../../hooks/useHistory";
import { useVaccines } from "../../hooks/useVaccines";
import withSpinner from "../withSpinner";
import Content from "./Content";
import { getKeyByValue } from "./utils";

const ContentWithSpinner = withSpinner(Content)

const Information = ({ country, recovered, confirmed, population }) => {
  const { data, isSuccess, isLoading } = useHistory(country)
  const { data: vaccines, isLoading: vaccinesLoading } = useVaccines(country)
  const [date, setDate] = useState('')
  
  const perInhabitant = Math.round((confirmed/population)*100000)
 
  useEffect(() => {
    if(vaccines) {
      vaccines.perPeopleVaccine = Math.round((vaccines.people_vaccinated/vaccines?.population)*100)
    }
  }, [vaccines])

  useEffect(() => {
    isSuccess && setDate(getKeyByValue(data.dates, 1))
  }, [data, isSuccess])

  return (
    <Box display="flex" alignItems="center" justifyContent="space-around" minHeight="150px">
      <ContentWithSpinner 
        confirmed={confirmed} 
        recovered={recovered} 
        perInhabitant={perInhabitant} 
        date={date} 
        vaccines={vaccines}
        isLoading={vaccinesLoading || isLoading}
      />
    </Box>
  )
}

Information.propTypes = {
  country: string.isRequired,
  recovered: number.isRequired,
  confirmed: number.isRequired,
  population: number.isRequired,
};

export default Information;
