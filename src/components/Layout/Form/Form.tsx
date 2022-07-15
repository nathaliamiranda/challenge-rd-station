import React, { useEffect, useState } from "react";
import regexUrl from "../../../utils/regexUrl";
import PersonalData from "./PersonalData";
import Radios from "./Radios";
import Terms from "./Terms";

function Form() {
  const [dontHaveUrl, setDontHaveUrl] = useState(true);
  const [validUrl, setValidUrl] = useState("");
  const [url, setUrl] = useState("");
  const [buttonChange, setButtonChange] = useState(true);
  const [message, setMessage] = useState(false);
  const [clearState, setClearState] = useState(false);

  const verifyUrl = (url: string) => {
    setUrl(url);
    const regExp = regexUrl;
    if (!regExp.test(url)) return;
    setValidUrl(url);
  }

  useEffect(() => {
    if (dontHaveUrl) setValidUrl("");

    if (dontHaveUrl) setUrl("");
  }, [buttonChange, dontHaveUrl]);

  const sendForm = () => {
    setDontHaveUrl(true);
    setValidUrl("");
    setUrl("");
    setButtonChange(true);
    setMessage(true);
    setClearState(true);
  }

  return (
    <section className="form-section">
      <form
        action="https://app.rdstation.com.br/signup"
        method="POST"
        className="form-section"
      >
      <h4 className="form-h4">Comece seus 10 dias de teste grátis do RD Station Marketing!</h4>
      <p className="form-p">Não precisa cadastrar cartão de crédito. 😉</p>
      <hr/>
        <PersonalData
          buttonChange={ buttonChange }
          setButtonChange={ setButtonChange }
          clearState={ clearState }
          dontHaveUrl={ dontHaveUrl }
          validUrl={ validUrl }
          setClearState={ setClearState }
        />
        <Radios
          label="Qual o site da sua empresa?"
          setDontHaveUrl={ setDontHaveUrl }
          text="Meu site é"
          setUrl={ false }
          name={ "radio" }
        />
        <label>
          <input
            className='input-form'
            placeholder="Insira o endereço do seu site"
            disabled={ dontHaveUrl }
            onChange={ ({ target }) => verifyUrl(target.value) }
            value={ url }
          />
        </label>
        <Radios
          setDontHaveUrl={ setDontHaveUrl }
          text="Ainda não tenho site"
          setUrl={ true }
        />
        <Terms />
        <button 
          className = 'button-form'
          type="button"
          disabled={ buttonChange }
          onClick= { () => sendForm() }
        >
          CRIAR MINHA CONTA
        </button>
        { message && <p>Obrigado! Entraremos em contato</p> }
      </form>
    </section>
  );
}

export default Form;