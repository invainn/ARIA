import React, { Component } from 'react';

class App extends Component {
    componentDidMount() {
        this.props.firstAction();
    }

    render() {
        const { result } = this.props.data.FirstAction;

        return (
            <div>
                {result}
            </div>
        );
    }
}

export default App;