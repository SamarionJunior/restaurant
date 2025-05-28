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

export type Form = {
    name: any;
    formaDePagamento: any;
    precisaTroco: any;
    troco: any;
    formaDeRecebimento: any;
    endereco: any;
}

export type Order = {
    index: number;
    status: number;
    date: String;
    formulario: Form;
    products: ProductType;
};