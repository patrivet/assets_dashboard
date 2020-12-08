import React, { useContext } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const ProgramsTable = () => {
  const { selectedDevice } = useContext(AppContext);
  // Define table rows array to store the selectedDevice's programs
  const rows = selectedDevice.programs;

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="programs table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Start Time</StyledTableCell>
            <StyledTableCell align="right">CPU Usage&nbsp;(%)</StyledTableCell>
            <StyledTableCell align="right">
              Memory Usage&nbsp;(Bytes)
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell>{row.startTime}</StyledTableCell>
              <StyledTableCell align="right">{row.cpuUsage}</StyledTableCell>
              <StyledTableCell align="right">{row.memoryUsage}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProgramsTable;
