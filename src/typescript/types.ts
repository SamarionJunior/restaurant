
export type ProductType = {
    index: number;
    key: number;
    image: string;
    name: string;
    description: string;
    price: number;
    count: number;
    show: boolean;
    preSelected: number;
    total: number;
    itIsInCart: boolean;
}

export type CompanyType = {
  name: string,
  slogan: string,
  endereco: string
}

export type FormType = {
    name: any;
    formaDePagamento: any;
    precisaTroco: any;
    troco: any;
    formaDeRecebimento: any;
    endereco: any;
}

export type OrderType = {
    index: number;
    status: number;
    date: string;
    formulario: FormType;
    products: ProductType;
};

export type StateType = {
    products: ProductType[];
    orders: OrderType[];
    company: CompanyType;
    page: string;
}

export type NavegationItemType = {
    menu: string;
    id: string;
}

export type PropsWarning = {
  id: string;
  className: string;
  message: string;
};