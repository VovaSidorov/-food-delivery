import React, { Component } from "react";
import Restaurant from "../Restaurant";

class RestaurantList extends Component {
  state = {
    openRestaurentMenuId: null
  };
  render() {
    const { restaurants } = this.props;
    const { openRestaurentMenuId } = this.state;
    return (
      <div>
        {restaurants.map(restaurants => (
          <Restaurant
            key={restaurants.id}
            {...restaurants}
            isMenuOpen={openRestaurentMenuId === restaurants.id}
            toogleOpenMenu={() => this.toogleOpenRestaurantMenu(restaurants.id)}
          />
        ))}
      </div>
    );
  }
  toogleOpenRestaurantMenu = id => {
    this.setState({
      openRestaurentMenuId: id
    });
  };
}
export default RestaurantList;
