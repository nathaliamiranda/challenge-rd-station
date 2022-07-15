const occupations = [
  "Selecione Seu Cargo",
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
];

function Occupation({ change, value }: any) {
  return(
    <label>Seu Cargo de ocupação
      <select
        defaultValue={ value }
        onChange={ ({ target }) => change(target.value)}
      >
        {occupations.map((occupation, index) => (
          <option
            disabled={ index === 0 && value !== "" && true }
            key={ occupation }
          >
            { occupation }
          </option>
        ))}
      </select>
    </label>
  );
}

export default Occupation;