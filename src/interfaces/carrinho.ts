export interface ICarrinho {
  id: number;
  produto: {
    id: number;
    nome: string;
    preco: number;
    imagem: string;
    categoria: string;
    promocional: boolean;
  };
}
