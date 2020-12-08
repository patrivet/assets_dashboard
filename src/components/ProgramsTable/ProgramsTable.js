import React, { useContext, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import orderBy from 'lodash/orderBy';

// Custom components & context
import { AppContext } from '../Dashboard/Dashboard';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#1876D2',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover, //#D9EAF7
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

// Table Column headers
const headerColumns = [
  {
    name: 'Name',
    prop: 'name',
  },
  {
    name: 'Start Time',
    prop: 'startTime',
  },
  {
    name: 'CPU Usage (%)',
    prop: 'cpuUsage',
    align: 'right',
  },
  {
    name: 'Memory Usage (Bytes)',
    prop: 'memoryUsage',
    align: 'right',
  },
];

// Sorting variables.
const invertDirection = {
  asc: 'desc',
  desc: 'asc',
};

const ProgramsTable = () => {
  const { selectedDevice } = useContext(AppContext);
  // Define table rows array to store the selectedDevice's programs
  const rows = selectedDevice.programs;

  // State for holding sorting values.
  const [state, setState] = useState({
    columnToSort: 'name', // Default to 1st column
    sortDirection: 'asc', // Default to ascending
  });

  // Sorting handler operations
  const updateSort = (columnProp) => {
    setState((currState) => ({
      columnToSort: columnProp,
      sortDirection:
        currState.columnToSort === columnProp
          ? invertDirection[currState.sortDirection]
          : 'asc', // Default to asc
    }));
  };

  const applySort = (rows) =>
    orderBy(rows, state.columnToSort, state.sortDirection);

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="programs table">
        <TableHead>
          <TableRow>
            {headerColumns.map((col, i) => (
              <StyledTableCell key={`hdr-col-${i}`}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  onClick={() => {
                    updateSort(col.prop);
                  }}
                >
                  <span>{col.name}</span>
                  {state.columnToSort === col.prop ? (
                    state.sortDirection === 'asc' ? (
                      <ArrowDropUp />
                    ) : (
                      <ArrowDropDown />
                    )
                  ) : null}
                </div>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {applySort(rows).map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.startTime}</StyledTableCell>
              <StyledTableCell>{row.cpuUsage}</StyledTableCell>
              <StyledTableCell>{row.memoryUsage}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProgramsTable;
