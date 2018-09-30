import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class App extends Component {
    componentDidMount() {
        this.props.firstAction();
    }

    render() {
        const { result } = this.props.data.FirstAction;

        return (
            <Button variant="contained" color="primary">
                { result } 
            </Button>
        );
    }
}

export default App;