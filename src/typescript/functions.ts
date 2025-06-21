import type { ProductType } from "./types";
import { ProductsObject } from "./Variables";

export const checkIfUndefined = (value: any): any => value != undefined ? value : null;

export const arrayIsEmpty = (array: any[]): any => array.length > 0 ? false : true;

export const createOrder = (products: any, formulario: any): any => {
  return {
    index: Math.random(),
    status: 0,
    date: Date(),
    formulario: {...formulario},
    products: [...products.filter((product: any) => product.itIsInCart)]
  };
}

let count: number = 0;

export const createProduct = (product: any) => {
  return {
    ...product,
    index: count++,
    key: Math.random(),
    show: false,
    preSelected: 0,
    total: 0,
    // itIsInCart: true
    itIsInCart: false
  }
}

export const getAllProducts = () => {

  const allProducts: ProductType[] = [];
  for (let index: number = 0; index < ProductsObject.length; index++) {
    const newProduct: ProductType = createProduct(ProductsObject[index]);
    // newProduct.itIsInCart = true;
    allProducts.push(newProduct);
  }

  // allProducts[0].show = true;
  // allProducts[0].itIsInCart = true;
  // console.log(typeof(allProducts));

  return allProducts;
  // return [];
}

export const isNotNullAndUndefined = (value: any): boolean => (value != null && value != undefined)

export const isNaturalNumber = (number: number): boolean => isNotNullAndUndefined(number) && number >= 0

export const converteToMoney = (value: number): string => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

export const format = (string: string, value: any) => string + " " + value.toString();

export const formatCountProduct = (value: number) => format("Count", converteToMoney(value));

export const formatPriceProduct = (value: number) => format("Preço", converteToMoney(value));
export const formatPriceTotalProduct = (value: number) => format("Preço", converteToMoney(value));
export const formatPriceTotalProducts = (value: ProductType[]) => format("Preço", converteToMoney(value.reduce((a: any, b: any) : number => a + b.total, 0)));

export const getDataAndHour = (date: string) : string => {
  return (
    new Date(date).toLocaleDateString("pt-br")
    +" - "+
    (((new Date(date)).getHours() < 10) ? 
      ("0" + (new Date(date)).getHours() ) : 
      (new Date(date)).getHours())
    +":"+
    (((new Date(date)).getMinutes() < 10) ? 
      ("0" + (new Date(date)).getMinutes() ) : 
      (new Date(date)).getMinutes())
    +":"+
    (((new Date(date)).getSeconds() < 10) ? 
      ("0" + (new Date(date)).getSeconds() ) : 
      (new Date(date)).getSeconds())
  )
}

// let intr = 0;

export const idString = {id: "a"};

export const scrollTo = (parent: HTMLElement, item: HTMLElement) => {
  const num: number = item.offsetLeft;
  parent.scrollTo({
      top: 0,
      left: num,
      behavior: "smooth"
  });
}

export const resizeScrollTo = () => {
  const item: HTMLElement | null = document.getElementById(idString.id);
  const parent: HTMLElement | null = document.getElementById("root");
  if(item != null && parent != null){
    scrollTo(parent, item);
  }
}

export const toLink = (e: any, id: string) => {
  e?.preventDefault();

  idString.id = id;
  const item: HTMLElement | null = document.getElementById(idString.id);
  const parent: HTMLElement | null = document.getElementById("root");
  // console.log(idString.id, id, item, parent);
  
  if(item != null && parent != null){
    // console.log(idString.id, id, item, parent, item.offsetLeft);

    scrollTo(parent, item);

    removeEventListener("resize", resizeScrollTo);
    addEventListener("resize", resizeScrollTo);
  }
}