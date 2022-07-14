const occupations = [
  "Selecione seu cargo",
  "Sócio(a) / CEO / Proprietário(a)",
  "Diretor(a) de Vendas",
  "Diretor(a) de Marketing",
  "Diretor(a) Outras Áreas",
  "Gerente de Marketing",
  "Gerente de Vendas",
  "Coordenador(a)/Supervisor(a) de Marketing",
  "Coordenador(a)/Supervisor(a) de Vendas",
  "Analista/Assistente de Marketing",
  "Analista/Assistente de Vendas",
  "Vendedor(a) / Executivo(a) de Contas",
  "Estudante",
  "Outros Cargos"
]

function Occupation({ change, value }: any) {
  return(
    <label>Seu Cargo de ocupação
      <select
        onChange={ ({ target }) => change(target.value)}
        value={value}
      >
        {occupations.map((occupation) => (
          <option key={occupation}>
            {occupation}
          </option>
        ))}
      </select>
    </label>
  );
}

export default Occupation;