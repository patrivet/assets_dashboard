import React, { useContext, useState, useEffect } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import orderBy from 'lodash/orderBy';

import './ProgramsTable.css';

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
    prop: 'lastCpuUsage',
    align: 'right',
  },
  {
    name: 'Memory Usage (Bytes)',
    prop: 'lastMemoryUsage',
    align: 'right',
  },
];

// Sorting variables.
const invertDirection = {
  asc: 'desc',
  desc: 'asc',
};
// Default/initial table state.
const initalState = { columnToSort: 'name', sortDirection: 'asc' };

const ProgramsTable = () => {
  const { selectedDevice } = useContext(AppContext);
  // Define table rows array to store the selectedDevice's programs
  const rows = selectedDevice.programs;

  // State for holding sorting values.
  const [state, setState] = useState({});

  // Set the table state when this component mounts (when selectedDevice changes)
  useEffect(() => {
    setState(initalState);
  }, [selectedDevice]);

  // Sorting handler operations
  const updateSortSettings = (columnProp) => {
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
    <div className="programsTable">
      <h4 className="programsTable__label">Currently running Programs</h4>
      <TableContainer className="programsTable__tableCon" component={Paper}>
        <Table
          stickyHeader
          className={classes.table}
          aria-label="programs table"
        >
          <TableHead>
            <TableRow>
              {headerColumns.map((col, i) => (
                <StyledTableCell key={`hdr-col-${i}`}>
                  <div
                    className="programsTable__headerCell"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                    }}
                    onClick={() => {
                      updateSortSettings(col.prop);
                    }}
                  >
                    <span>{col.name}</span>
                    <TableSortLabel
                      active={state.columnToSort === col.prop}
                      direction={state.sortDirection}
                    ></TableSortLabel>
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
                <StyledTableCell>{row.lastCpuUsage}</StyledTableCell>
                <StyledTableCell>{row.lastMemoryUsage}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProgramsTable;
