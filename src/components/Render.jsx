import React from "react";

const Render = ({ name, status, image, species, location }) => {
  return (
    <div className="cards-container">
      <img src={image} alt={name} />

      <div className="card-texts">
        <div className="header-text">
          <h2 className="hover">{name}</h2>

          <div>
            {status === "Alive" ? (
              <div className="alive-status"></div>
            ) : status === "Dead" ? (
              <div className="dead-status"></div>
            ) : (
              <div className="unknown-status"></div>
            )}

            <p>
              {status} - {species}
            </p>
          </div>
        </div>

        <div className="location-container">
          <p className="opacity">Last known location:</p>
          <p className="hover">{location.name}</p>
        </div>

        <div className="location-container">
          <p className="opacity">First seen in:</p>
          <p className="hover">{location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default Render;
