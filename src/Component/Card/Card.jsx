import React, { useState } from "react";
import { Button } from "../Button/Button";
import "./Card.css";

export const Card = ({ food }) => {
  const [count, setCount] = useState(0);

  const { title, Image: image, price, id } = food;

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="card">
      <span
        className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}
      >
        {count}
      </span>
      <h4 className="card__title">
        {title} <span className="card__price">{price}</span>
      </h4>

      <div>
        <img className="image__container" src={image} alt={title} />
      </div>

      <div className="btn-conta">
        <Button title={"+"} type={"add"} onClick={handleIncrement} />
        {count !== 0 ? (
          <Button title={"-"} type={"remove"} onClick={handleDecrement} />
        ) : null}
      </div>
    </div>
  );
};
