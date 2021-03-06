import React from "react";
import "./App.css";
import RestaurantList from "./Components/restaurantList";

function App(props) {
  return (
    <div className="App">
      <RestaurantList restaurants={props.restaurants} />
    </div>
  );
}

export default App;
