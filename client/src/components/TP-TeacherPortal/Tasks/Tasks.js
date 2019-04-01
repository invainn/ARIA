import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      textDecoration: 'underline',
      textDecorationColor: '#FFFFFF',
    },
    body: {
      fontSize: 14,
    },
}))(TableCell);

const styles = theme => ({
    root: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
      overflowX: 'auto',
    },
    table: {
      minWidth: 700,
    },
    row: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
    pageTitle: {
        width: '100%',
        textDecoration: 'underline',
        textDecorationColor: (theme.palette.type === 'light') ? '#000000' : '#FFFFFF',
        paddingBottom: '15px',
    },
});

let id = 0;

const createData = (name, calories, fat, carbs, protein) => {
    id += 1;
    return {
        id,
        name,
        calories,
        fat,
        carbs,
        protein,
    };
};

  const rows = [
    createData('Student Recital', 'mm/dd/yyyy', 'Door Monitor', '9:00 AM', '3:00 PM'),
    createData('NNMTA Steinway Youth Piano Festival', 'mm/dd/yyyy', 'Food Preparation', '4:00 PM', '8:00 PM'),
    createData('Young Artist Medal', 'mm/dd/yyyy', 'Door Monitor', '11:00 AM', '4:00 PM'),
    createData('Halloween Recital', 'mm/dd/yyyy', 'Food Preparation', '1:00 PM', '5:00 PM'),
    createData('Silver State Competition', 'mm/dd/yyyy', 'Door Monitor', '9:00 AM', '5:00 PM'),
    createData('Christmas Play-A-Thon', 'mm/dd/yyyy', 'Cleanup', '5:30 PM', '8:0 PM'),
  ];

const Tasks = (props) => {
  const { classes } = props;

  return (
      <CustomerPortalContainer userType={2}>
          <div className={classes.pageTitle}>
              <Typography component="h2" variant="h2" gutterBottom align="center">
                  Tasks
              </Typography>
          </div>
          <Paper className={classes.root}>
          <Table className={classes.table}>
              <TableHead>
              <TableRow>
                  <CustomTableCell>Event Name</CustomTableCell>
                  <CustomTableCell align="center">Date</CustomTableCell>
                  <CustomTableCell align="center">Assigned Task</CustomTableCell>
                  <CustomTableCell align="center">Start Time</CustomTableCell>
                  <CustomTableCell align="center">End Time</CustomTableCell>
              </TableRow>
              </TableHead>
              <TableBody>
              {rows.map(row => (
                  <TableRow className={classes.row} key={row.id}>
                  <CustomTableCell component="th" scope="row">
                      {row.name}
                  </CustomTableCell>
                  <CustomTableCell align="center">{row.calories}</CustomTableCell>
                  <CustomTableCell align="center">{row.fat}</CustomTableCell>
                  <CustomTableCell align="center">{row.carbs}</CustomTableCell>
                  <CustomTableCell align="center">{row.protein}</CustomTableCell>
                  </TableRow>
              ))}
              </TableBody>
          </Table>
          </Paper>
      </CustomerPortalContainer>
  );
};


export default withStyles(styles)(Tasks);
