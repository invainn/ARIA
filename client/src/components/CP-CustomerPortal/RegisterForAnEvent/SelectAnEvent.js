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
  CircularProgress,
} from '@material-ui/core/';
import axios from 'axios';

import EventTableHead from './EventTableHead';

import ARIA_SERVER_URL from '../../../config';

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
    selected: -1,
    events: [],
  };

  componentWillMount = async () => {
    // Fetch participants related to Customer
    const req = await axios.get(`${ARIA_SERVER_URL}/customer/event`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    });

    this.setState({ events: [...req.data] });
  };

  handleClick = (ID) => {
    const { handleEvent } = this.props;
    const { events } = this.state;

    this.setState({ selected: ID });
    events.forEach((event) => {
      if (event.ID === ID) {
        handleEvent(event);
      }
    });
  }

  isSelected = (id) => {
    const { selected } = this.state;
    return selected === id;
  };

  render() {
    const { classes } = this.props;
    const {
        order,
        orderBy,
        selected,
        events,
    } = this.state;

    if (events.length === 0) {
      return <CircularProgress color="primary" />;
    }

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
                    />
                    <TableBody>
                    {events.map(({ ID, Name, ChairEmail }) => {
                        const isSelected = this.isSelected(ID);
                        return [
                          <TableRow
                            hover
                            onClick={() => this.handleClick(ID)}
                            role="checkbox"
                            aria-checked={isSelected}
                            tabIndex={-1}
                            key={ID}
                            selected={isSelected}
                            padding="auto"
                          >
                              <TableCell padding="checkbox">
                                <Radio color="primary" checked={isSelected} />
                              </TableCell>
                              <TableCell>{Name}</TableCell>
                              <TableCell>{ChairEmail}</TableCell>
                          </TableRow>,
                        ];
                        })}
                    </TableBody>
                </Table>
                </div>
            </div>
    );
  }
}

export default withStyles(styles)(SelectAnEvent);
