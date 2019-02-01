import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';

class EventTableHead extends Component {
  createSortHandler = property => (event) => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
  };

  render() {
    const {
        order,
        orderBy,
    } = this.props;

    const rows = [
      {
 id: 'eventName', numeric: false, disablePadding: false, label: 'Event Name',
},
      {
 id: 'eventDate', numeric: false, disablePadding: false, label: 'Event Date',
},
      {
 id: 'eventDeadline', numeric: false, disablePadding: false, label: 'Event Deadline',
},
      {
 id: 'eventStartTime', numeric: false, disablePadding: false, label: 'Event Start Time',
},
      {
 id: 'eventEndTime', numeric: false, disablePadding: false, label: 'Event End Time',
},
      {
 id: 'eventAddress', numeric: false, disablePadding: false, label: 'Event Address',
},
      {
 id: 'email', numeric: false, disablePadding: false, label: 'Facilitator Email',
},
   ];

    return (
      <TableHead>
        <TableRow>
          <TableCell />
          {rows.map(row => (
              <TableCell
                key={row.id}
                numeric={row.numeric}
                padding="auto"
                sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip
                  title="Sort"
                  placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel
                    active={orderBy === row.id}
                    direction={order}
                    onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ), this)}
        </TableRow>
      </TableHead>
    );
  }
}

export default EventTableHead;
