import type { ProductType } from "./types";
import { ProductsObject } from "./Variables";

export const checkIfUndefined = (value: any): any => value != undefined ? value : null;

export const arrayIsEmpty = (array: any[]): any => array.length > 0 ? false : true;

export const createOrder = (products: any, formulario: any): any => {
  return {
    index: Math.random(),
    status: 3,
    date: Date(),
    formulario: {...formulario},
    products: [...products.filter((product: any) => product.itIsInCart)]
  };
}

export const getAllProducts = () => {

  const allProducts: ProductType[] = [];
  let count: number = 0;
  for (let index: number = 0; index < ProductsObject.length; index++) {
    const newProduct: ProductType = {
      ...ProductsObject[index],
      index: count++,
      key: Math.random(),
      show: false,
      preSelected: 0,
      total: 0,
      itIsInCart: false
    }
    allProducts.push(newProduct);
  }
  // console.log(typeof(allProducts));
  return allProducts;
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

const idString = {id: "a"};

export const toLink = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => {
    e.preventDefault();
    // const target = document.querySelector(id);
    // window.smoothScroll.animateScroll( target );
    const item: HTMLElement | null = document.getElementById(id);
    const parent: HTMLElement | null = document.getElementById("root");
    
    if(item != null && parent != null){
      const num: number = item.offsetLeft;
    
      console.log(id, item, parent);
      console.log(num);
      parent.scrollTo({
          left: num,
          behavior: "smooth"
      });
      idString.id = id;
      // clearInterval(intr);
      // const handle = element => {
      //   // console.log(element, numb, intr);
      // };
      removeEventListener("resize", e => {
        const numb: number = item.offsetLeft;
        parent.scrollTo({
            left: numb,
            behavior: "smooth"
        })
      });
      addEventListener("resize", e => {
        const numb: number = item.offsetLeft;
        parent.scrollTo({
            left: numb,
            behavior: "smooth"
        })
      });
      // intr = setInterval(handle, 1000, parent);
    }
}