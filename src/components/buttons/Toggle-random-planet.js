import React from "react";

import "./buttons.css";

const ToggleRandomPlanet = ({toggleRandomPlanet}) => {
  return (
      <button
          className="toggle-planet btn btn-warning btn-lg"
          onClick={toggleRandomPlanet}>
          Toggle Random Planet
      </button>
  )
};

export default ToggleRandomPlanet;