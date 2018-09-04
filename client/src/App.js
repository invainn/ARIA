import React, { Component } from 'react';
import { ARIA_SERVER_URL } from './config';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    fetch(`${ARIA_SERVER_URL}`)
    .then(res => res.json())
    .then(result => this.setState({ data: result.data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div>
        {data}
      </div>
    );
  }
}

export default App;