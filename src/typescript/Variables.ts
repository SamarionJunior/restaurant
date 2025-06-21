/// IMAGE ///

import waitingImage from "../assets/waiting.png";
import confirmImage from "../assets/confirm.png";
import cookingImage from "../assets/cooking.png";
import deliveryImage from "../assets/delivery.png";
import deliveredImage from "../assets/delivered.png";

import hambuguerCard from "../assets/products/hambuguer.jpg";
import hotdogCard from "../assets/products/hotdog.jpg";
import pizzaCard from "../assets/products/pizza.jpg";
import pastaCard from "../assets/products/pasta.jpg";
import friesCard from "../assets/products/fries.jpg";
import cakeCard from "../assets/products/cake.jpg";
import iceCreamCard from "../assets/products/ice-cream.jpg";
import sodaCard from "../assets/products/soda.jpg";
import juiceCard from "../assets/products/juice.jpg";
import waterCard from "../assets/products/water.jpg";

import type { NavegationItemType } from "./types";


export const arrayStatus: string[] = [
  "waiting",
  "confirmado",
  "cooking",
  "delivery",
  "entregue"
]

export type statusMenssageType = {
  "waiting": string;
  "confirmado": string;
  "cooking": string;
  "delivery": string;
  "entregue": string;
};

export const statusMenssage = (key: string): string => {
  switch (key) {
    case "waiting":
      return "Aguardando Confirmação do Pedido";
    case "confirmado":
      return "Pedido Confirmado";
    case "cooking":
      return "Pedido Confirmado";
    case "delivery":
      return "Pedido Saiu para Entregar";
    case "entregue":
      return "Pedido Entregue";
    default:
      return "";
  }
}

export type statusIndexType = {
  "waiting": number;
  "confirmado": number;
  "cooking": number;
  "delivery": number;
  "entregue": number;
}

export const statusIndex: statusIndexType = {
  "waiting": 0,
  "confirmado": 1,
  "cooking": 2,
  "delivery": 3,
  "entregue": 4
}

export const statusImage = [waitingImage, confirmImage, cookingImage, deliveryImage, deliveredImage];

export const NavegationItems: NavegationItemType[] = [
  {menu: "Home", id: "a"}, 
  {menu: "Products", id: "b"}, 
  {menu: "Product", id: "c"}, 
  {menu: "Shopping Cart", id: "d"}, 
  {menu: "Confirmation", id: "e"},
  {menu: "Status", id: "f"}
];
export const NavegationItemsAdmin: NavegationItemType[] = [
  {menu: "Company", id: "a"}, 
  {menu: "Menu", id: "b"}, 
  {menu: "Controller", id: "c"}
];

export const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.";

export const Hambuguer = {
  image: hambuguerCard,
  name: "Hambúrguer",
  description: "Pão macio com gergelim, três hambúrgueres de carne 100% bovino grelhado no fogo, alface fresquinha, tomate, cebola, fatias de queijo derretido sabor cheddar e o inédito molho Taste, sabor defumado.",
  price: 15,
  count: 5
}
export const HotDog = {
  image: hotdogCard,
  name: "Cachorro Quente",
  description: "Este cachorro-quente é composto por um pão macio e fresco que envolve a vina Perdigão, acompanhada de suculentos pedaços de alcatra. Acrescentamos ao mix, o crocante bacon picado para um toque de sabor defumado.",
  price: 12,
  count: 5
}
export const Pizza = {
  image: pizzaCard,
  name: "Pizza",
  description: "Pizza com 35,6cm de diâmetro cortada em 12 fatias, massa artezanale com borda de requeijão cremoso, presunto, requeijão cremoso, queijo, azeitonas verdes fatiadas e molho de tomate especial",
  price: 30,
  count: 5
}
export const Pasta = {
  image: pastaCard,
  name: "Macarronada",
  description: "O clássico Spaghetti ao molho bolognesa, acompanhado por pedaços crocantes de bacon, ovo e queijo mozzarela, combinando tradição e sabor marcante.",
  price: 15,
  count: 5
}
export const Fries = {
  image: friesCard,
  name: "Batata Frita",
  description: "Crocantes e irresistíveis, nossas batatas fritas podem vir no tamanho pequeno, médio e grande e são servidas sempre levemente salgadas. Estas delícias são o acompanhamento perfeito para o seu sanduíche perfeito.",
  price: 8,
  count: 5
}
export const Cake = {
  image: cakeCard,
  name: "Bolo",
  description: "Uma super fatia do nosso delicioso pão de ló de chocolate, recheado com farta camada de doce de leite Nestle, produzido e montado artesanalmente pelas nossas confeiteiras.",
  price: 12,
  count: 5,
}
export const IceCream = {
  image: iceCreamCard,
  name: "Sorvete",
  description: "Uma sobremesa deliciosa, com a casquinha recheada de Doce de Leite, massa sabor baunilha, coberta com leite em pó e o irresistível sabor de NUTELLA®",
  price: 5,
  count: 5
}
export const Soda = {
  image: sodaCard,
  name: "Refrigerante",
  description: "Um refrigerante geladinho na medida certa para te refrescar e acompanhar seu sanduíche preferido.",
  price: 6,
  count: 5
}
export const Juice = {
  image: juiceCard,
  name: "Suco",
  description: "Se você prefere uma opção mais saudável e 100% natural, no nosso restaurante você pode escolher o delicioso suco Natural de Laranja.",
  price: 8,
  count: 5
}
export const Water = {
  image: waterCard,
  name: "Água",
  description: "Água Natural Refrescante 500ml.",
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