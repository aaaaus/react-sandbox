import React from 'react';

class PicsSearchBar extends React.Component {

  state = { term: '' }

  //note: in render below, we can implement alternate callback if event handler is one-liner
  // onInputChange(event) {
  //   console.log(event.target.value)
  // }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  //common property names for wiring up event handlers:
  //onChange
  //onClick
  //onSubmit

  //note below, onInputChange is NOT being invoked with () - if done this way, it will be run on render.
  //We want to only pass reference to this function, to be used when there is a change.
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            {/* <input type="text" value={this.state.term} onChange={this.onInputChange}/> uncontrolled */}
            <input type="text" value={this.state.term} onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    )
  }
}

export default PicsSearchBar;
