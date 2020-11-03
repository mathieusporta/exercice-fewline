import React from "react";
import zelda from "../../../data/zelda";

let genres = [];
for (let i = 0; i < zelda.genres.length; i++) {
  genres.push([zelda.genres[i].name]);
}

const CardBody = () => {
  return (
    <div className="card-body bg-light">
      <img
        className="card-img"
        src={zelda.cover.url}
        alt={zelda.name}
        style={{ width: "30%" }}
      />
      <p>First release date : {zelda.first_release_date}</p>
      <p>
        Genre :<span className="badge badge-primary">{genres.join(" / ")}</span>
      </p>
      <p className="card-text">{zelda.summary}</p>
    </div>
  );
};

export default CardBody;