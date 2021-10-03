import { useReducer } from 'react'

import { Box } from '@mui/system'

import { useCountries } from './hooks/useCountries'
import Table from './components/Table'
import './App.css'
import withSpinner from './components/withSpinner'
import { Context, globalReducer, globalState } from './context'

const TableWithSpinner = withSpinner(Table)

function App() {
  const [state, dispatch] = useReducer(globalReducer, globalState)
  const { continent } = state
  const { data, isLoading } = useCountries(continent)
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Box padding="0 70px" display="flex" justifyContent="center" alignItems="center" height="100vh">
        <TableWithSpinner isLoading={isLoading} rows={data} />
      </Box>
    </Context.Provider>
  )
}

export default App
