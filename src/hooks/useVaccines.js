import { useQuery } from "react-query"
import { client } from "../config/client"

const getVaccines = async country => {
  const { data } = await client.get(`/vaccines?country=${country}`)
  return data.All
}

export const useVaccines = country => {
  return useQuery(['vaccines', country], () => getVaccines(country))
}
