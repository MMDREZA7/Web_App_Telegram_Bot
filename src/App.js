import React, { useState } from "react";
import { Button } from "./Component/Button/Button";
import { Card } from "./Component/Card/Card";
import { getData } from "./db/db";
import "./App.css";

const foods = getData();

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      Hello There!
      <Button
        type={"add"}
        title="ADD"
        disable={false}
        onClick={() => {
          setNumber(number + 1);
        }}
      />
      <Button
        type={"remove"}
        title="REMOVE"
        disable={false}
        onClick={() => {
          console.log(getData());
        }}
      />
      <Button
        type={"checkout"}
        title="CHECKOUT"
        disable={false}
        onClick={() => {
          setNumber(number + 1);
        }}
      />
      <h1>{number}</h1>
      <div className="app">
        {foods.map((food) => (
          <Card food={food} key={food.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
