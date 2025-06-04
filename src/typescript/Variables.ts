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

export const statusMenssage = ["Aguardando Confirmação", "Em Preparo", "Enviado", "Concluído"];

export const statusImage = [waitingImage, cookingImage, deliveryImage, confirmImage];

export const NavegationItems = [
  "Products", "Product", "Shopping Cart", "Confirmation", "Status"
];

export const description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.";

export const Hambuguer = {
  image: hambuguerImage,
  name: "Hambúrguer",
  description: "Pão macio com gergelim, três hambúrgueres de carne 100% bovino grelhado no fogo, alface fresquinha, tomate, cebola, fatias de queijo derretido sabor cheddar e o inédito molho Taste, sabor defumado.",
  price: 15,
  count: 5
}
export const HotDog = {
  image: hotdogImage,
  name: "Cachorro Quente",
  description: "Este cachorro-quente é composto por um pão macio e fresco que envolve a vina Perdigão, acompanhada de suculentos pedaços de alcatra. Acrescentamos ao mix, o crocante bacon picado para um toque de sabor defumado.",
  price: 12,
  count: 5
}
export const Pizza = {
  image: pizzaImage,
  name: "Pizza",
  description: "Pizza com 35,6cm de diâmetro cortada em 12 fatias, massa artezanale com borda de requeijão cremoso, presunto, requeijão cremoso, queijo, azeitonas verdes fatiadas e molho de tomate especial",
  price: 30,
  count: 5
}
export const Pasta = {
  image: pastaImage,
  name: "Macarronada",
  description: "O clássico Spaghetti ao molho bolognesa, acompanhado por pedaços crocantes de bacon, ovo e queijo mozzarela, combinando tradição e sabor marcante.",
  price: 15,
  count: 5
}
export const Fries = {
  image: friesImage,
  name: "Batata Frita",
  description: "Crocantes e irresistíveis, nossas batatas fritas podem vir no tamanho pequeno, médio e grande e são servidas sempre levemente salgadas. Estas delícias são o acompanhamento perfeito para o seu sanduíche perfeito.",
  price: 8,
  count: 5
}
export const Cake = {
  image: cakeImage,
  name: "Bolo",
  description: "Uma super fatia do nosso delicioso pão de ló de chocolate, recheado com farta camada de doce de leite Nestle, produzido e montado artesanalmente pelas nossas confeiteiras.",
  price: 12,
  count: 5,
}
export const IceCream = {
  image: iceCreamImage,
  name: "Sorvete",
  description: "Uma sobremesa deliciosa, com a casquinha recheada de Doce de Leite, massa sabor baunilha, coberta com leite em pó e o irresistível sabor de NUTELLA®",
  price: 5,
  count: 5
}
export const Soda = {
  image: sodaImage,
  name: "Refrigerante",
  description: "Um refrigerante geladinho na medida certa para te refrescar e acompanhar seu sanduíche preferido.",
  price: 6,
  count: 5
}
export const Juice = {
  image: juiceImage,
  name: "Suco",
  description: "Se você prefere uma opção mais saudável e 100% natural, no nosso restaurante você pode escolher o delicioso suco Natural de Laranja.",
  price: 8,
  count: 5
}
export const Water = {
  image: waterImage,
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