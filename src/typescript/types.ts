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
    date: String;
    formulario: FormType;
    products: ProductType;
};

export type StateType = {
    products: ProductType[],
    orders: OrderType[]
}