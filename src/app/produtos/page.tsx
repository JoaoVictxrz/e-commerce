interface ProdutosProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

const Produtos = ({ searchParams }: ProdutosProps) => {
  const categoria = searchParams.categoria as string | undefined;
  const query = searchParams.query as string | undefined;

  if (query === "") return <div> Ops! Digite um produto que você quer.</div>;
  return (
    <div>
      <h1>Categoria: {categoria ?? "Nenhuma categoria selecionada"}</h1>
    </div>
  );
};

export default Produtos;
