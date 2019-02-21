import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core/';
import ParticipantTableHead from './ParticipantTableHead';

// Do not do this, fix this
let counter = 0;

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
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

const createData = (firstName, middleInitial, lastName, Age, teacher) => {
    counter += 1;
    return {
        id: counter, firstName, middleInitial, lastName, Age, teacher,
    };
};

const desc = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }

  if (b[orderBy] > a[orderBy]) {
    return 1;
  }

  return 0;
};

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.primary,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.primary.main,
          backgroundColor: lighten(theme.palette.primary.main, 0.75),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.primary,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.primary,
  },
  title: {
    flex: '0 0 auto',
  },
});

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
            Participants
          </Typography>
        )}
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        {numSelected > 0 ? (
          <Tooltip title="Delete">
            <IconButton aria-label="Delete">
              <Typography variant="h6" id="tableTitle">
                Delete
              </Typography>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        ) : (
          <Tooltip title="Filter list">
            <IconButton aria-label="Filter list">
              <FilterListIcon />
            </IconButton>
          </Tooltip>
        )}
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

class SelectParticipants extends Component {
  state = {
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    musicLevel: '',
    open: false,
    previousLevel: '',
    // TODO: Create a data file instead of hard coding inside of code for future use
    data: [
      createData('Alice', 'P', 'Smith', 9, 'Mr. Jenkins'),
      createData('Mary', 'B', 'Daniels', 8, 'Mr. Matthews'),
      createData('Ronald', 'E', 'Davidson', 16, 'Mrs. Charles'),
      createData('Scott', 'K', 'Brown', 13, 'Ms. Anderson'),
      createData('Raymond', 'I', 'McMann', 18, 'Mrs. Stevenson'),
      createData('Kenneth', 'B', 'Honeycomb', 13, 'Mr. Franklin'),
      createData('Gary', 'N', 'Peters', 16, 'Mr. Jackson'),
      createData('Joshua', 'S', 'Holyfield', 12, 'Ms. Sparks'),
      createData('Heather', 'D', 'Howard', 14, 'Mrs. Cilliza'),
      createData('Lou', 'V', 'York', 12, 'Mrs. Thomas'),
      createData('Jack', 'S', 'Ybarra', 13, 'Mrs. Banks'),
      createData('Steve', 'A', 'Noack', 10, 'Mr. Cummings'),
      createData('Gabriella', 'I', 'Barnett', 11, 'Mr. Ehlers'),
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
    const { selected, previousLevel } = this.state;
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

    if (event.target.value >= 1 && previousLevel <= 0) {
      this.setState({ selected: newSelected });
      this.setState({ previousLevel: event.target.value });
    } else if (event.target.value === 0) {
      this.setState({ selected: newSelected });
      this.setState({ previousLevel: event.target.value });
    }
  };

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

  handleChangeMusicLevel = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
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
        open,
        musicLevel,
    } = this.state;

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

    return (
            <Paper className={classes.root}>
                <EnhancedTableToolbar numSelected={selected.length} />
                <div className={classes.tableWrapper}>
                <Table className={classes.table} aria-labelledby="tableTitle">
                    <ParticipantTableHead
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
                        return (
                            <TableRow>
                              <TableCell padding="checkbox">
                                  <Checkbox color="primary" checked={isSelected} />
                              </TableCell>
                              <TableCell component="th" scope="row" padding="none">
                                  {n.firstName}
                              </TableCell>
                              <TableCell>{n.middleInitial}</TableCell>
                              <TableCell>{n.lastName}</TableCell>
                              <TableCell>{n.Age}</TableCell>
                              <TableCell>{n.teacher}</TableCell>
                              <TableCell>
                                <form autoComplete="off">
                                  <FormControl className={classes.formControl}>
                                        <InputLabel>Select A Level</InputLabel>
                                    <Select
                                      padding="checkbox"
                                      hover
                                      onClick={this.handleClick}
                                      onChange={this.handleChangeMusicLevel}
                                      role="checkbox"
                                      tabIndex={-1}
                                      key={n.id}
                                      aria-checked={isSelected}
                                      selected={isSelected}
                                      open={open}
                                      onClose={this.handleClose}
                                      onOpen={this.handleOpen}
                                      value={musicLevel}
                                      inputProps={{
                                        name: 'musicLevel',
                                        id: 'levelChoice',
                                      }}
                                    >
                                      <MenuItem value={0}>Select A Level</MenuItem>
                                      <MenuItem value={1}>1</MenuItem>
                                      <MenuItem value={2}>2</MenuItem>
                                      <MenuItem value={3}>3</MenuItem>
                                      <MenuItem value={4}>4</MenuItem>
                                      <MenuItem value={5}>5</MenuItem>
                                      <MenuItem value={6}>6</MenuItem>
                                      <MenuItem value={7}>7</MenuItem>
                                      <MenuItem value={8}>8</MenuItem>
                                      <MenuItem value={9}>9</MenuItem>
                                      <MenuItem value={10}>10</MenuItem>
                                      <MenuItem value={11}>11</MenuItem>
                                      <MenuItem value={12}>12</MenuItem>
                                    </Select>
                                  </FormControl>
                                </form>
                              </TableCell>
                            </TableRow>
                        );
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
            </Paper>
    );
  }
}

export default withStyles(styles)(SelectParticipants);
