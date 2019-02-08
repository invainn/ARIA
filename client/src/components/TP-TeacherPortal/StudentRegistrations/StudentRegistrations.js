/* eslint-disable max-len */
import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
  Paper,
  Checkbox,
} from '@material-ui/core/';
import SchoolIcon from '@material-ui/icons/School';
import EnhancedTableHead from './EnhancedTableHead';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortalContainer/CustomerPortalContainer';

const styles = theme => ({
  root: {
    width: '100%',
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  pageTitle: {
    width: '100%',
    textDecoration: 'underline',
    textDecorationColor: '#FFFFFF',
    paddingBottom: '15px',
  },
  button: {
    margin: theme.spacing.unit,
  },
});

function createData(firstName, lastName, suffix, eventType, date, performanceTime, location, startTime,
    endTime, commandPerformance, song1, song2, song3) {
    return {
        firstName,
        lastName,
        suffix,
        eventType,
        date,
        performanceTime,
        location,
        startTime,
        endTime,
        commandPerformance,
        song1,
        song2,
        song3,
    };
}

const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
};

// TODO: Javascript already has a sort, do not do this
const stableSort = (array, cmp) => {
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });

  return stabilizedThis.map(el => el[0]);
};

const getSorting = (order, orderBy) => (order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy));

let EnhancedTableToolbar = (props) => {
  const { numSelected, classes } = props;

  return (
    <Toolbar
      className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      <div className={classes.title}>
        {numSelected > 0 ? (
          <Typography color="inherit" variant="h6">
            {numSelected} selected
          </Typography>
        ) : (
          <SchoolIcon />
        )}
      </div>
      <div className={classes.spacer} />
    </Toolbar>
  );
};


EnhancedTableToolbar = withStyles(styles)(EnhancedTableToolbar);

class StudentRegistrations extends Component {
  state = {
    order: 'asc',
    orderBy: 'firstName',
    selected: [],
    // TODO: Create a data file instead of hard coding inside of code for future use
    data: [
      createData('Alice', 'Smith', 'Jr', 'Halloween Recital', '10/15/18', '6:00 PM', 'DMS 103', '5:00 AM', '9:00 PM', true, 'Ludwig Van Beethoven', 'Chopin', 'Help'),
      createData('Bob', 'Honeycomb', 'Sr', 'Halloween Recital', '10/15/18', '6:00 PM', 'DMS 103', '5:00 AM', '9:00 PM', true, 'Ludwig Van Beethoven', 'Chopin', 'Help'),
      createData('Jack', 'Reynolds', '-', 'Halloween Recital', '10/15/18', '6:00 PM', 'DMS 103', '5:00 AM', '9:00 PM', true, 'Ludwig Van Beethoven', 'Chopin', 'Help'),
    ],
    page: 0,
    rowsPerPage: 5,
  };

  handleRequestSort = (event, property) => {
    let { order = 'desc' } = this.state;
    const { orderBy = property } = this.state;

    if (orderBy === property && order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleSelectAllClick = (event) => {
    if (event.target.checked) {
      this.setState(state => ({ selected: state.data.map(n => n.id) }));
      return;
    }
    this.setState({ selected: [] });
  };

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    this.setState({ selected: newSelected });
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = (id) => {
    const { selected } = this.state;
    return selected.indexOf(id) !== -1;
  };

  render() {
    const { classes } = this.props;
    const {
        data,
        order,
        orderBy,
        selected,
        rowsPerPage,
        page,
    } = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
        <CustomerPortalContainer userType={2}>
          <div className={classes.pageTitle}>
              <Typography component="h2" variant="h2" gutterBottom align="center">
                Student Registrations
              </Typography>
          </div>
            <Paper className={classes.root}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <div className={classes.tableWrapper}>
                <Table className={classes.table} aria-labelledby="tableTitle">
                    <EnhancedTableHead
                      numSelected={selected.length}
                      order={order}
                      orderBy={orderBy}
                      onSelectAllClick={this.handleSelectAllClick}
                      onRequestSort={this.handleRequestSort}
                      rowCount={data.length}
                    />
                    <TableBody>
                    {stableSort(data, getSorting(order, orderBy))
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((n) => {
                        const isSelected = this.isSelected(n.id);

                        return [
                          <TableRow
                            hover
                            onClick={event => this.handleClick(event, n.id)}
                            role="checkbox"
                            aria-checked={isSelected}
                            tabIndex={-1}
                            key={n.id}
                            selected={isSelected}
                            padding="auto"
                          >
                              <TableCell padding="checkbox">
                                <Checkbox color="primary" checked={isSelected} />
                              </TableCell>
                              <TableCell>{n.firstName}</TableCell>
                              <TableCell>{n.lastName}</TableCell>
                              <TableCell>{n.suffix}</TableCell>
                              <TableCell>{n.eventType}</TableCell>
                              <TableCell>{n.date}</TableCell>
                              <TableCell>{n.performanceTime}</TableCell>
                              <TableCell>{n.location}</TableCell>
                          </TableRow>,
                          <TableRow
                            style={{ display: isSelected ? undefined : 'none' }}
                            hover
                            onClick={event => this.handleClick(event, n.id)}
                            role="checkbox"
                            aria-checked={isSelected}
                            tabIndex={-1}
                            key={n.id}
                            selected={isSelected}
                            padding="auto"
                          >
                          {/* Stuff was broken new branch */}
                            <TableCell />
                            <TableCell />
                            <TableCell>Song 1: {n.song1}</TableCell>
                            <TableCell>Song 2: {n.song2}</TableCell>
                            <TableCell>Song 3: {n.song3}</TableCell>
                            <TableCell>CommandPerformance: {n.commandPerformance}</TableCell>
                            <TableCell>Start Time: {n.startTime}</TableCell>
                            <TableCell>End Time: {n.endTime}</TableCell>
                            <TableCell />
                          </TableRow>,
                        ];
                        })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 49 * emptyRows }}>
                        <TableCell colSpan={7} />
                        </TableRow>
                    )}
                    </TableBody>
                </Table>
                </div>
                <TablePagination
                  component="div"
                  count={data.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                  nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        </CustomerPortalContainer>
    );
  }
}


export default withStyles(styles)(StudentRegistrations);
