import Box from "./components/Box"
import Title from "./components/Title"

function App() {
  const boxTexts = [
    "Plano de desenvolvimento institucional",
    "Pesquisa pública processos iftm",
    "Licitações e contratos",
    "Receitas e despesas",
    "Dados abertos",
    "Transparência e prestação de contas",
    "Servidores",
    "Perguntas frequentes"
  ];

  return (
    <>
      <Title mainTitle="Acesso à Informação" informative="Veja dados de transparência e governança" />
      <div className="infoContainer">
        {boxTexts.map((text, index) => (
          <Box key={index} text={text} />
        ))}
      </div>
    </>
  )
}

export default App
