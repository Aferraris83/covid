import { useQuery } from "react-query"
import { client } from "../config/client"

const createData = ({ countries, data }) => {
  return countries.map(country => {
    return data[country].All
  })
}

const getCountries = async continent => {
  const { data } = continent ? await client.get(`/cases?continent=${continent}`) : await client.get('/cases')
  const resp = createData({ countries: Object.keys(data), data})
  return resp
}

export const useCountries = continent => {
  return useQuery(['countries', continent], () => getCountries(continent))
}