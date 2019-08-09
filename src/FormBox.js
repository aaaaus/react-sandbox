import React from 'react';

const cardinalDirections = ['north', 'south', 'east', 'west'];

class FormBox extends React.Component {

  state = {
    checked: true,
    select: '',
    date: new Date().toISOString().split("T")[0]
  }

  onCheck = () => {
    this.setState({
      checked: !this.state.checked
    })
  }

  onSelect = (event) => {
    this.setState({
      select: event.target.value
    })
  }

  onDateSelect = (event) => {
    this.setState({
      date: event.target.value
    })
  }

  checkBoxMessage() {
    return this.state.checked ? 'checked' : 'unchecked';
  }

  directionMessage() {
    return this.state.select ? `Looks like we are heading ${this.state.select}.` : ''
  }

  render() {

    //note: for HTML option tag, if value is not specified, content is passed as value instead
    return (
      <div>
        <input type="checkbox" onChange={this.onCheck} defaultChecked={this.state.checked} />
        <p>This box is {this.checkBoxMessage()}.</p>

        <label htmlFor="">Which Direction?</label>
        <select value={this.state.select} onChange={this.onSelect}>
          <option value="">Choose a direction...</option>
          {cardinalDirections.map(option => {
            return <option value={option} key={Math.random()}>{option}</option>
          })}
        </select>
        <p>{this.directionMessage()}</p>

        <div>
          <input type="date" value={this.state.date} onChange={this.onDateSelect} />
        </div>
        <p>{this.state.date ? `The date is ${this.state.date}.` : `Pick a date!`}</p>

      </div>
    );
  }
}

export default FormBox;
