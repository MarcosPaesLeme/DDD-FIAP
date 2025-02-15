// Entidade
interface Estoque {
  id: number;
  produto: Produto;
  quantidade: number;
}

// Entidade
interface Produto {
  id: number;
  nome: string;
  validade: Date;
  preco: number;
}

// Value Object
interface Catalogo {
  id: number;
  produto: Produto;
  nome: string;
  descricao: string;
}

// Agreggate
interface Pedido {
  id: number;
  usuario: Usuario;
  produto: Produto;
  dataPedido: Date;
  status: string;
  valorTotal: number;
  formaPagamento: string;
  lat: string;
  lng: string;
  observacoes?: string;
}

enum TipoUsuario {
  CLIENTE = "cliente",
  ESTABELECIMENTO = "estabelecimento",
}

// Entidades
interface Usuario {
  nome: string;
  documento: string;
  tipoUsuario: TipoUsuario;
  telefone: string;
  email: string;
  senha: string;
}

enum StatusPagamento {
  PAGO = "pago",
  PENDENTE = "pendente",
  CANCELADO = "cancelado",
}

enum MetodoPagamento {
  CREDITO = "cartão de crédito",
  DINHEIRO = "dinheiro",
  PIX = "PIX",
}

// Agregate
interface Pagamento {
  id: number;
  pedido: Pedido;
  usuario: Usuario;
  valorPago: number;
  dataPagamento: Date;
  statusPagamento: StatusPagamento;
  metodoPagamento: MetodoPagamento;
  observacoes?: string;
  validaValorPago(valorPago: number): void;
  validaMetodoPagamento(metodoPagamento: MetodoPagamento): void;
  validaUsuario(usuario: Usuario): void;
  validaPedido(pedido: Pedido): void;
}

interface PedidoRepository {
  buscaPedidoPorId(id: number): Pedido;
  salvaPedido(pedido: Pedido): void;
  cancelaPedidoPorId(id: number): void;
}
