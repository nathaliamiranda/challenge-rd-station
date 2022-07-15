import IOccupation from "../../../interfaces/IOccupation";

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

function Occupation({ change, value, name }: IOccupation) {
  return(
    <>
      <label
        htmlFor={ name }
        className='data-form'
      >
        Seu cargo de ocupação
      </label>
      <select
        className='select-form'
        defaultValue={ value }
        onChange={ ({ target }) => change(target.value) }
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
    </>
  );
}

export default Occupation;