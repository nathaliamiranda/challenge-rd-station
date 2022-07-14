import { GoTriangleDown } from "react-icons/go";

function Form() {
  return (
    <section>
      <h4>Comece seus 10 dias de teste grátis do RD Station Marketing!</h4>
      <p>Não precisa cadastrar cartão de crédito. 😉</p>
      <form>
        <label>Diga, qual seu nome?
          <input
            placeholder="Insira seu nome"
          />
        </label>
        <label>Seu email de trabalho
          <input
            placeholder="Insira seu e-mail"
          />
        </label>
        <label>Seu telefone
          <input
            placeholder="Insira seu número de telefone com DDD"
          ></input>
        </label>
        <label>Seu Cargo de ocupação
          <input 
            placeholder={`Selecione seu Cargo`}
          />
        </label>
        <GoTriangleDown />
        <label>Crie uma senha
          <input
            placeholder="Coloque sua senha"
          />
        </label>
        <label>Confirme sua senha
          <input
            placeholder="Confirme sua senha"
          />
        </label>
      </form>
      <label>Qual o site da sua empresa?
        <input
          type="radio"
        />Meu site é
      </label>
      <label>
        <input
          placeholder="Insira o endereço do seu site"
        />
      </label>
      <label>
        <input
          type="radio"
        />Ainda não tenho site
      </label>
      <sup>
      • Ao criar minha conta estou de acordo com os termos de uso do software e política de privacidade.
      </sup>
      <sup>• Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses.</sup>
      <sup>• Você pode alterar suas permissões de comunicação a qualquer tempo.</sup>
      
      <button
        type="button"
      >
      CRIAR MINHA CONTA
      </button>
    </section>
  );
}

export default Form;