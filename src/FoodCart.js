import React from 'react';

class FoodCart extends React.Component {

  state = {
    nowServing: 'Gyros'
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        nowServing: 'Tacos'
      })
    }, 5000)
  }

  render() {
    return(
      <div>
        FoodCart is now serving {this.state.nowServing}!
      </div>
    )
  }
}

export default FoodCart;
