import React, { PureComponent } from "react";
import RestaurantMenu from "../RestaurantMenu";

class Restaurant extends PureComponent {
  state = {
    isOpen: false
  };
  render() {
    const { image, name, menu, isMenuOpen } = this.props;
    console.log("Restaurant render");
    return (
      <div>
        <img src={image} width={64} height={64} />
        <h3>{name}</h3>
        <button onClick={() => this.handleToogleOpenClick()}>
          {isMenuOpen ? "Close Menu" : "Open Menu"}
        </button>
        {isMenuOpen ? <RestaurantMenu menu={menu} /> : null}
      </div>
    );
  }
  handleToogleOpenClick = () => {
    this.props.toogleOpenMenu(this.props.id);
  };
}
export default Restaurant;
