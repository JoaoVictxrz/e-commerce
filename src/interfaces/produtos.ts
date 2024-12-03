export interface IProducts {
  id: string | number;
  nome: string;
  preco: number;
  imagem: string;
  categoria: string;
  descricao: string;
  subcategoria?: string;
  estoque: {
    minimo: number;
    maximo: number;
  };
  marca: string;
  promocional: boolean;
  promocao: {
    precoPromocional?: number;
    inicioPromocao?: Date;
    fimPromocao?: Date;
  };
  tamanho: "P" | "M" | "G" | "GG" | "XG";
  dataCriacao?: Date;
  dataAtualizacao?: Date;
  disponivel?: boolean;
}
