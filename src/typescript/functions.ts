/// IMAGE ///

import hambuguerImage from "../assets/hambuguer.png";
import hotdogImage from "../assets/hotdog.png";
import pizzaImage from "../assets/pizza.png";

import waitingImage from "../assets/waiting.png";
import cookingImage from "../assets/cooking.png";
import deliveryImage from "../assets/delivery.png";
import confirmImage from "../assets/confirm.png";

export const checkIfUndefined = (value: any): any => value != undefined ? value : null;

export const arrayIsEmpty = (array: any): any => array != undefined && array != null && array?.length != null && array?.length != undefined && array?.length > 0 ? false : true;

export const createOrder = (products: any, formulario: any): any => {
  return {
    index: Math.random(),
    status: 3,
    date: Date(),
    formulario: {...formulario},
    products: [...products.filter((product: any) => product.itIsInCart)]
  };
}

const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.";

const Hambuguer = {
  index: 0,
  key: Math.random(),
  image: hambuguerImage,
  name: "Hambuguer",
  description: description,
  price: 1,
  count: 5,
  show: false,
  preSelected: 1,
  total: 0,
  itIsInCart: false
}
const HotDog = {
  index: 1,
  key: Math.random(),
  image: hotdogImage,
  name: "Hot-Dog",
  description: description,
  price: 2,
  count: 5,
  show: false,
  preSelected: 0,
  total: 0,
  itIsInCart: false
}
const Pizza = {
  index: 2,
  key: Math.random(),
  image: pizzaImage,
  name: "Pizza",
  description: description,
  price: 3,
  count: 5,
  show: false,
  preSelected: 0,
  total: 0,
  itIsInCart: false
}

export const getAllProducts = () => {

  const allProducts = [];
  for (let index = 0; index < 20; index++) {
    const newHambuguer = {
      ...Hambuguer,
      key: Math.random()
    }
    allProducts.push(newHambuguer);
    const newHotDog = {
      ...HotDog,
      key: Math.random()
    }
    allProducts.push(newHotDog);
    const newPizza = {
      ...Pizza,
      key: Math.random()
    }
    allProducts.push(newPizza);
  }
  let count = 0;
  allProducts.map(product => product.index = count++);
  console.log(allProducts);
  return allProducts;
}

export const statusMenssage = ["Arguadando Confirmação", "Em Preparo", "Enviado", "Concluido"];

export const statusImage = [waitingImage, cookingImage, deliveryImage, confirmImage];

export const NavegationItems = [
  "Products", "Product", "Shopping Cart", "Confirmation", "Status"
];

export const isNotNullAndUndefined = (value: any): boolean => (value != null && value != undefined)

export const isNaturalNumber = (number: number): boolean => isNotNullAndUndefined(number) && number >= 0

export const converteToMoney = (value: number): string => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})