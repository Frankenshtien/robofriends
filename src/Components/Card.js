import React from "react";
import "tachyons";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib tc br3 pa3 ma3 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
