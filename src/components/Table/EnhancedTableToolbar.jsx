import { useContext, useState } from 'react';
import { string } from 'prop-types';

import { FormControl, InputLabel, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { Context } from '../../context';
import { actionsCreator } from '../../context/actions';
import { continents } from './utils';


const EnhancedTableToolbar = ({ title }) => {

  const { state, dispatch } = useContext(Context)
  const [value, setValue] = useState(state.continent)

  const handleClick = ({ target }) => {
    dispatch(actionsCreator.continent(target.value))
    setValue(target.value)
  }
  return (
    <Toolbar>
      <Typography
        sx={{ flex: '1 1 100%' }}
        variant="h6"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-standard-label">Continente</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={value}
          onChange={handleClick}
          label="Continente"
        >
          {continents.map(({ value, label }, i)=> (
            <MenuItem key={`item-${i}`} value={value}>{label}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  title: string.isRequired,
};

export default EnhancedTableToolbar;
