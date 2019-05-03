import React, { Component } from 'react';
import axios from 'axios';
import {
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Table,
  Grid,
  CircularProgress,
  Checkbox,
} from '@material-ui/core';

import ARIA_SERVER_URL from '../../../config';

class SelectParticipants extends Component {
  state = {
    students: [],
    selected: [],
  };

  componentWillMount = async () => {
    // Fetch participants related to Customer
    const req = await axios.get(`${ARIA_SERVER_URL}/customer/participant`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('jwtToken')}`,
      },
    });

    this.setState({ students: [...req.data] });
  };

  handleClick = (ID) => {
    const { selected, students } = this.state;
    const { handleStudents } = this.props;
    const selectedIndex = selected.indexOf(ID);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, ID);
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

    const newStudents = [];

    newSelected.forEach((selectedID) => {
      students.forEach((student) => {
        if (student.ID === selectedID) {
          newStudents.push(student);
        }
      });
    });

    handleStudents(newStudents);
  };

  // eslint-disable-next-line react/destructuring-assignment
  isSelected = ID => this.state.selected.indexOf(ID) !== -1;

  render() {
    const { students } = this.state;

    if (students.length === 0) {
      return <CircularProgress color="primary" />;
    }

    return (
      <>
        <Grid container justify="center" alignItems="center">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="left" />
                <TableCell align="left">First Name</TableCell>
                <TableCell align="left">Last Name</TableCell>
                <TableCell align="right">Teacher</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {students.map(({
                ID,
                FirstName,
                LastName,
                TeacherName,
              }) => (
                <TableRow key={ID} onClick={() => this.handleClick(ID)}>
                  <TableCell align="left">
                    <Checkbox color="primary" checked={this.isSelected(ID)} />
                  </TableCell>
                  <TableCell align="left">{FirstName}</TableCell>
                  <TableCell align="left">{LastName}</TableCell>
                  <TableCell align="right">{TeacherName}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </>
    );
  }
}

export default SelectParticipants;
