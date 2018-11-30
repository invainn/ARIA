/* eslint-disable max-len */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Toolbar,
  Typography,
  Paper,
  Button,
  Checkbox,
  ListItemIcon,
  IconButton,
  Tooltip,
  Icon,
} from '@material-ui/core/';

import EnhancedTableHead from './EnhancedTableHead';
import CustomerPortalContainer from '../../../containers/Shell/CustomerPortal/CustomerPortalContainer';

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

// TODO: This shouldn't be done like this and a class should be created.
let counter = 0;
function createData(firstName, lastName, suffix, eventType, date, performanceTime, location, startTime,
    endTime, commandPerformance, song1, song2, song3) {
      counter += 1;
    return {
        id: counter,
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
          <Typography variant="h6" id="tableTitle">
            Active Registrations
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 && (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <Typography variant="h6" id="tableTitle">
                Delete
              </Typography>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};


EnhancedTableToolbar = withStyles(styles)(EnhancedTableToolbar);

class ActiveRegistration extends Component {
  state = {
    order: 'asc',
    orderBy: 'firstName',
    selected: [],
    // TODO: Create a data file instead of hard coding inside of code for future use
    data: [
      createData('Alice', 'Smith', 'Halloween Recital', 'Jr', '10/15/18', '6:00 PM', 'DMS 103', '5:00 AM', '9:00 PM', true, 'Ludwig Van Beethoven', 'Chopin', 'Help'),
      createData('Bob', 'Honeycomb', 'Halloween Recital', 'Sr', '10/15/18', '6:00 PM', 'DMS 103', '5:00 AM', '9:00 PM', true, 'Ludwig Van Beethoven', 'Chopin', 'Help'),
      createData('Jack', 'Reynolds', 'Halloween Recital', '', '10/15/18', '6:00 PM', 'DMS 103', '5:00 AM', '9:00 PM', true, 'Ludwig Van Beethoven', 'Chopin', 'Help'),
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
        <CustomerPortalContainer>
          <div className={classes.pageTitle}>
              <Typography component="h2" variant="h2" gutterBottom align="center">
                Active Registrations
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
                        .map((n, i) => {
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
                              <TableCell>{i + 1}</TableCell>
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
                            <TableCell>Song1: {n.song1}</TableCell>
                            <TableCell>Song2: {n.song2}</TableCell>
                            <TableCell>Song3: {n.song3}</TableCell>
                            <TableCell>CommandPerformance: {n.commandPerformance}</TableCell>
                            <TableCell>Start Time: {n.startTime}</TableCell>
                            <TableCell>End Time: {n.endTime}</TableCell>
                            <TableCell />
                          </TableRow>,
                        ];
                        })}
                    {emptyRows > 0 && (
                        <TableRow style={{ height: 49 * emptyRows }}>
                        <TableCell colSpan={6} />
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
              <Button
                variant="contained"
                className={classes.button}
                color="primary"
                component={Link}
                to="/customer/register-for-an-event"
              >
                <ListItemIcon>
                  <Icon>add</Icon>
                </ListItemIcon>
                  Register for Another Event
              </Button>
            </Paper>
        </CustomerPortalContainer>
    );
  }
}


export default withStyles(styles)(ActiveRegistration);
