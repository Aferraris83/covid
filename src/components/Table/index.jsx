import { useState } from 'react';
import { 
  Paper, 
  TablePagination, 
  TableContainer,
  TableBody,
  Table,
  Box,
} from '@mui/material';

import { getComparator, stableSort, headCells } from './utils'
import EnhancedTableHead from './EnhancedTableHead';
import EnhancedTableToolbar from './EnhancedTableToolbar';
import Row from './Row';

function EnhancedTable({ rows }) {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('country');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  
  return (
    <Box width="100%">
      <Paper >
        <EnhancedTableToolbar title="Covid-19" />
        <TableContainer sx={{ maxHeight: '75vh', overflow: 'auto' }}>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
          >
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              headCells={headCells}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => (
                  <Row 
                    {...row} 
                    key={`table-row-${index}`} 
                    id={`table-row-${index}`}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}

export default EnhancedTable;
