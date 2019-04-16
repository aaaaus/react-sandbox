import React from 'react';

class PicsSearchBar extends React.Component {

  onInputChange(event) {
    console.log(event.target.value)
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
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={this.onInputChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default PicsSearchBar;
