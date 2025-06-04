
const Labels = {
  Price: "Preço",
  Count: "QTD",
  Subtotal: "SubTotal",
  Total: "Total",
  Items: "Itens",
  Products: "Produtos"
}

const Buttons = {
  AddShoppingCart: "Adicionar ao Carrinho",
  Voltar: "Voltar",
  CloseOrder: "Fechar Pedido",
  Confirm: "Confirmar"
}

const Form = {
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

export const Contents = {
  Labels,
  Buttons,
  Form
}