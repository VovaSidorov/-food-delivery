import React, { Component } from "react";
import Restaurant from "../Restaurant";
import accordion from "../../decorator/accordion";

class RestaurantList extends Component {
  render() {
    const {
      restaurants,

      // props from accordion decorator
      openItemId,
      toggleOpenItem
    } = this.props;
    return (
      <div>
        {restaurants.map(restaurant => (
          <Restaurant
            key={restaurant.id}
            {...restaurant}
            isMenuOpen={openItemId === restaurant.id}
            toggleOpenMenu={toggleOpenItem}
          />
        ))}
      </div>
    );
  }
}

export default accordion(RestaurantList);
