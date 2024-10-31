export interface IProducts {
  nome: string;
  preco: number;
  imagem: string;
  categoria: categoria;
  promocional: boolean;
}

type categoria = "Feminino" | "Masculino" | "Infantil" | "Unissex";
