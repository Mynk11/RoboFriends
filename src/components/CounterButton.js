import React, {
    PureComponent
} from 'react';
//purecomponents are those which changes only when props changes
class CounterButton extends PureComponent {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    updateCount = () => {
        this.setState((state) => { return { count: this.state.count + 1 } })
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        if (this.state.count !== nextState.count) {
            return true;
        }
        return false;
    }

    render() {
        console.log("CounterButton");
        return <button id="counter" color={this.props.color} onClick={this.updateCount}>Count :{this.state.count}</button>;
    }
}

export default CounterButton;