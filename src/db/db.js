import pizzaImg from "../images/pizza.png";
import saladImg from "../images/salad.png";
import bigIceCreamImg from "../images/big-ice-cream.png";
import iceCreamImg from "../images/ice-cream.png";
import burgerImg from "../images/burger.png";
import cocaImg from "../images/soda-bottle.png";
import waterImg from "../images/water.png";
import kebabImg from "../images/kebab.png";

export function getData() {
  return [
    { title: "Pizza", price: 17.99, Image: pizzaImg },
    { title: "Salad", price: 10.0, Image: saladImg },
    { title: "Big IceCream", price: 20.3, Image: bigIceCreamImg },
    { title: "IceCream", price: 15.0, Image: iceCreamImg },
    { title: "Burger", price: 50.4, Image: burgerImg },
    { title: "Coca-Cola", price: 2.5, Image: cocaImg },
    { title: "Bottle of Water", price: 1.0, Image: waterImg },
    { title: "Barbecue", price: 74.25, Image: kebabImg },
  ];
}
