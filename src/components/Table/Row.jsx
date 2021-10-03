import { useState } from "react";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { Collapse, TableCell, TableRow } from "@mui/material";
import Information from "../Information";

function Row({ country, confirmed, continent, deaths, id, recovered, population }) {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(prevState => !prevState)
  }

  return (
    <>
      <TableRow
        hover
        onClick={handleOpen}
        tabIndex={-1}
        key={country}
      >
        <TableCell>
          {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
        </TableCell>
        <TableCell
          component="th"
          id={id}
          scope="row"
          align="center"
        >
          {country}
        </TableCell>
        <TableCell align="center">{confirmed}</TableCell>
        <TableCell align="center">{deaths}</TableCell>
        <TableCell align="center">{continent}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open}>
            {open && (
              <Information 
                country={country} 
                recovered={recovered} 
                confirmed={confirmed} 
                population={population}
              />
            )}
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

export default Row;
