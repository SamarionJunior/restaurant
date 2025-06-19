
export type LabelsType = {
  Price: string;
  Count: string;
  Subtotal: string;
  Total: string;
  Items: string;
  Products: string;
}

export const Labels: LabelsType = {
  Price: "Preço",
  Count: "Quantidade",
  Subtotal: "SubTotal",
  Total: "Total",
  Items: "Itens",
  Products: "Produtos"
}

export type ButtonsType = {
  AddShoppingCart: string;
  Voltar: string;
  CloseOrder: string;
  Confirm: string;
}

export const Buttons: ButtonsType = {
  AddShoppingCart: "Adicionar ao Carrinho",
  Voltar: "Voltar",
  CloseOrder: "Fechar Pedido",
  Confirm: "Confirmar"
}

export const Form = {
  Name: {
    Labels: {
      Default: "Nome"
    },
    Placeholders: {
      Default: "Digite seu nome!"
    }
  },
  Payment: {
    Title: {
      Default: "Forma de Pagamento"
    },
    Labels: {
      Default: "",
      Money: "Dinheiro",
      Card: "Cartão",
      PIX: "Pix"
    }
  },
  Troco:{
    Title: {
      Default: "Troco"
    },
    Labels: {
      Default: "Precisa de troco?",
    },
    Placeholders: {
      Default: "Quanto?"
    }
  },
  Delivery:{
    Title: {
      Default: "Forma de Recebimento"
    },
    Labels: {
      Default: "",
      Pickup: "Retirada",
      Delivery: "Entegra"
    }
  },
  Address:{
    Labels: {
      Default: "Endereço"
    },
    Placeholders: {
      Default: "Digite seu endereço!"
    }
  }
}

export type ContentsType = {
  Labels: LabelsType;
  Buttons: ButtonsType;
  Form: any;
}

export const Contents: ContentsType = {
  Labels,
  Buttons,
  Form
}