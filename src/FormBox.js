import React from 'react';

const cardinalDirections = ['north', 'south', 'east', 'west'];

const comments = [
  'this is a comment',
  'this is another comment',
  'this is the last comment'
];

class FormBox extends React.Component {

  state = {
    checked: true,
    select: '',
    date: new Date().toISOString().split("T")[0],
    comments: comments
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

  onCommentChange = (event) => {
    console.log(event.target.value, event.target.id);
  }

  onAddCommentClick = (event) => {
    if (this.state.comments.length < 5) {
      this.setState({
        comments: [ ...this.state.comments, '' ]
      });
    }
  }

  onDeleteCommentClick = (event) => {
    const comments = this.state.comments;
    const index = parseInt(event.target.id);
    this.setState({
      comments: [ ...comments.slice(0,index), ...comments.slice(index + 1, comments.length)]
    })
  }

  checkBoxMessage() {
    return this.state.checked ? 'checked' : 'unchecked';
  }

  directionMessage() {
    return this.state.select ? `Looks like we are heading ${this.state.select}.` : ''
  }

  renderCommentAddButton(){
    if (this.state.comments.length < 5) {
      return <button onClick={this.onAddCommentClick}>Add Comment</button>
    }
  }

  renderComments() {
    if (this.state.comments) {
      return(
        <div>
          {this.state.comments.map((comment, index) => {
            return(
              <div key={Math.random()}>
                <input id={index} value={comment} onChange={this.onCommentChange} />
                <button id={index} onClick={this.onDeleteCommentClick}>Delete</button>
                <br />
              </div>
            )
          })}
          {this.renderCommentAddButton()}
        </div>
      )
    }
  }

  render() {

    //note: for HTML option tag, if value is not specified, content is passed as value instead
    return (
      <div style={{ border: '1px solid red', backgroundColor: '#eeeeee' }}>
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

        {this.renderComments()}

      </div>
    );
  }
}

export default FormBox;
