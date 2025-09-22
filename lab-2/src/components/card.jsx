import React from "react";
import "./Card.css"; 

function Card({ image, country, hotel, rating, price }) {
  const isGoodRating = rating >= 4.0;

  return (
    <div className="card">
      <img src={image} alt={country} className="card-image" />
      <h3>{country}</h3>
      <p className="hotel">{hotel}</p>
      <p className={isGoodRating ? "rating green" : "rating red"}>
        {rating} ★
      </p>
      <p className="price">${price}/night</p>
    </div>
  );
}

export default Card;
