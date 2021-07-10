import React from 'react';
import ReactDOM from 'react-dom';

class MainCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }
    Increment(){
        this.setState({
            count:this.state.count + 1
        })
    }
    Decrement(){
        this.setState({
            count:this.state.count - 1
        })
    }
    render() {
        return (
            <div>
                <h1 className="head-1">Simple Counter</h1>
                <h1 className="mainc">{this.state.count}</h1>
                <button type="button" className="button-grad" onClick={() => this.Increment()}>Increment</button>
                <button type="button" className="button-grad" onClick={() => this.Decrement()}>Decrement</button>
            </div>
        )
    }
}

export default MainCounter;