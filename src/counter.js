import React from 'react';
import Button from 'react-bootstrap/Button';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count: 0};
        this.increment = this.increment.bind(this)
    }

    increment() {
        this.setState(state => ({
            count: state.count + 1
        }));
    }

    render() {
        return (
            <div>
                <Button onClick={this.increment}>Click Me!</Button>
                <h3>{this.state.count}</h3>
            </div>
        )
    }
}

export default Counter