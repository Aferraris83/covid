import { useQuery } from "react-query"
import { client } from "../config/client"

const getHistory = async country => {
  const { data } = await client.get(`/history?country=${country}&status=deaths`)
  return data.All
}

export const useHistory = country => {
  return useQuery(['history', country], () => getHistory(country))
} 
