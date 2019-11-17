import React, { Component } from "react";
import Restaurant from "../Restaurant";

class RestaurantList extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div>
        {restaurants.map(restaurants => (
          <Restaurant key={restaurants.id} {...restaurants} />
        ))}
      </div>
    );
  }
}
export default RestaurantList;
