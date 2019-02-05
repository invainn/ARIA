import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

class EnhancedTableHead extends React.Component {
  createSortHandler = property => (event) => {
    const { onRequestSort } = this.props;
    onRequestSort(event, property);
  };

  render() {
    const {
        onSelectAllClick,
        order,
        orderBy,
        numSelected,
        rowCount,
    } = this.props;

    const rows = [
      {
 id: 'idNum', numeric: false, disablePadding: false, label: 'Event #',
},
      {
 id: 'eventName', numeric: false, disablePadding: false, label: 'Name',
},
      {
 id: 'date', numeric: false, disablePadding: false, label: 'Date',
},
      {
 id: 'startTime', numeric: false, disablePadding: false, label: 'Start Time',
},
      {
 id: 'endTime', numeric: false, disablePadding: false, label: 'End Time',
},
      {
 id: 'location', numeric: false, disablePadding: false, label: 'Location',
},
   ];

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox
              indeterminate={numSelected > 0 && numSelected < rowCount}
              checked={numSelected === rowCount}
              onChange={onSelectAllClick}
              color="primary"
            />
          </TableCell>
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

export default EnhancedTableHead;
