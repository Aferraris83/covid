import { Box } from "@mui/system";
import { useEffect, useState } from "react";

import { useHistory } from "../../hooks/useHistory";
import { useVaccines } from "../../hooks/useVaccines";
import withSpinner from "../withSpinner";
import Content from "./Content";

const ContentWithSpinner = withSpinner(Content)

const Information = ({ country, recovered, confirmed, population }) => {
  const { data, isSuccess } = useHistory(country)
  const { data: vaccines, isLoading: vaccinesLoading } = useVaccines(country)
  const [date, setDate] = useState('')
  
  const perInhabitant = Math.round((confirmed/population)*100000)
  const perPeopleVaccine = Math.round((vaccines?.people_vaccinated/vaccines?.population)*100)

  function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

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
        perPeopleVaccine={perPeopleVaccine}
        isLoading={vaccinesLoading}
      />
    </Box>
  )
}

export default Information;
