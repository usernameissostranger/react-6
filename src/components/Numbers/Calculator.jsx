import React, { Component } from 'react';
import './Calculator.css';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      result: '',
    };
  }

  handleClick = (value) => {
    if (value === '^') {
      this.setState((prevState) => ({
        input: prevState.input + '**',
      }));
    } else {
      this.setState((prevState) => ({
        input: prevState.input + value,
      }));
    }
  };

  handleCalculate = () => {
    this.setState({
      result: eval(this.state.input).toString(),
    });
  };

  render() {
    return (
      <div className="calculator">
        <input
          onChange={(e) => this.setState({ input: e.target.value })}
          value={this.state.input}
          className="inputField"
        />
        <div className="buttonRow">
          {['1', '2', '3', '+'].map((value) => (
            <button key={value} onClick={() => this.handleClick(value)}>
              {value}
            </button>
          ))}
        </div>
        <div className="buttonRow">
          {['4', '5', '6', '-'].map((value) => (
            <button key={value} onClick={() => this.handleClick(value)}>
              {value}
            </button>
          ))}
        </div>
        <div className="buttonRow">
          {['7', '8', '9', '*'].map((value) => (
            <button key={value} onClick={() => this.handleClick(value)}>
              {value}
            </button>
          ))}
        </div>
        <div className="buttonRow">
          {['0', '√', '^', '/'].map((value) => (
            <button key={value} onClick={() => this.handleClick(value)}>
              {value}
            </button>
          ))}
        </div>
        <div className="buttonRow">
          <button onClick={this.handleCalculate} className="equalButton">
            =
          </button>
        </div>
        <div className="result">
          <p>{this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
