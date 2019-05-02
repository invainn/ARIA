/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
  Typography,
  Paper,
  Radio,
} from '@material-ui/core/';
import EventTableHead from './EventTableHead';

const styles = () => ({
  root: {
    width: '100%',
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
});

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

// TODO: This shouldn't be done like this and a class should be created.
// eslint-disable-next-line max-len
function createData(id, eventName, eventDate, eventDeadline, eventStartTime, eventEndTime, eventAddress, email) {
    return {
        id,
        eventName,
        eventDate,
        eventDeadline,
        eventStartTime,
        eventEndTime,
        eventAddress,
        email,
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
        <Typography variant="h6" id="tableTitle">
            Active Registration
        </Typography>
      </div>
      <div className={classes.spacer} />
    </Toolbar>
  );
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

class SelectAnEvent extends Component {
  state = {
    order: 'asc',
    orderBy: 'calories',
    selected: -1,
    // TODO: Create a data file instead of hard coding inside of code for future use
    data: [
      createData(0, 'Some Competition', '01/01/1970', '01/01/1970', '9:00 PM', '11:00 PM', '111 Virginia St.', 'admin@nnmta.org'),
      createData(1, 'Some Competition', '01/01/1970', '01/01/1970', '9:00 PM', '11:00 PM', '111 Virginia St.', 'admin@nnmta.org'),
      createData(2, 'Some Competition', '01/01/1970', '01/01/1970', '9:00 PM', '11:00 PM', '111 Virginia St.', 'admin@nnmta.org'),
    ],
    page: 0,
    rowsPerPage: 3,
  };

  handleClick = (event, id) => {
    const { handleEvent } = this.props;
    const { data } = this.state;

    this.setState({ selected: id });
    handleEvent(data[id]);
  }

  isSelected = (id) => {
    const { selected } = this.state;
    return selected === id;
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
            <div className={classes.root}>
                <div className={classes.tableWrapper}>
                <Table className={classes.table} aria-labelledby="tableTitle">
                    <EventTableHead
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
                                <Radio color="primary" checked={isSelected} />
                              </TableCell>
                              <TableCell>{n.eventName}</TableCell>
                              <TableCell>{n.eventDate}</TableCell>
                              <TableCell>{n.eventDeadline}</TableCell>
                              <TableCell>{n.eventStartTime}</TableCell>
                              <TableCell>{n.eventEndTime}</TableCell>
                              <TableCell>{n.eventAddress}</TableCell>
                              <TableCell>{n.email}</TableCell>
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
            </div>
    );
  }
}

export default withStyles(styles)(SelectAnEvent);
