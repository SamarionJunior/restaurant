/// IMAGE ///
import hambuguerImage from "../assets/hambuguer.png";
import hotdogImage from "../assets/hotdog.png";
import pizzaImage from "../assets/pizza.png";
import pastaImage from "../assets/pasta.png";
import friesImage from "../assets/fries.png";
import cakeImage from "../assets/cake.png";
import iceCreamImage from "../assets/ice-cream.png";
import sodaImage from "../assets/soda.png";
import juiceImage from "../assets/juice.png";
import waterImage from "../assets/water.png";

import waitingImage from "../assets/waiting.png";
import cookingImage from "../assets/cooking.png";
import deliveryImage from "../assets/delivery.png";
import confirmImage from "../assets/confirm.png";

export const statusMenssage = ["Arguadando Confirmação", "Em Preparo", "Enviado", "Concluido"];

export const statusImage = [waitingImage, cookingImage, deliveryImage, confirmImage];

export const NavegationItems = [
  "Products", "Product", "Shopping Cart", "Confirmation", "Status"
];

export const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.";

export const Hambuguer = {
  image: hambuguerImage,
  name: "Hambúrguer",
  description: description,
  price: 15,
  count: 5
}
export const HotDog = {
  image: hotdogImage,
  name: "Cachorro Quente",
  description: description,
  price: 12,
  count: 5
}
export const Pizza = {
  image: pizzaImage,
  name: "Pizza",
  description: description,
  price: 30,
  count: 5
}
export const Pasta = {
  image: pastaImage,
  name: "Macarronada",
  description: description,
  price: 15,
  count: 5
}
export const Fries = {
  image: friesImage,
  name: "Batata Frita",
  description: description,
  price: 8,
  count: 5
}
export const Cake = {
  image: cakeImage,
  name: "Bolo",
  description: description,
  price: 12,
  count: 5,
}
export const IceCream = {
  image: iceCreamImage,
  name: "Sorvete",
  description: description,
  price: 5,
  count: 5
}
export const Soda = {
  image: sodaImage,
  name: "Refrigerante",
  description: description,
  price: 6,
  count: 5
}
export const Juice = {
  image: juiceImage,
  name: "Suco",
  description: description,
  price: 8,
  count: 5
}
export const Water = {
  image: waterImage,
  name: "Água",
  description: description,
  price: 3,
  count: 5
}

export const ProductsObject = [
  Hambuguer,
  HotDog,
  Pizza,
  Pasta,
  Fries,
  Cake,
  IceCream,
  Soda,
  Juice,
  Water
];