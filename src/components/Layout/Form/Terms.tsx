function Terms() {
  return(
    <>
      <sup>
        `• Ao criar minha conta estou de acordo com os&nbsp;
        <a 
          className='terms-color'
          target="_blank"
          rel="noreferrer"
          href="https://legal.rdstation.com/pt-BR/rdstation-services-agreement/"
        >
          termos de uso&nbsp;
        </a>
          do software e&nbsp;
        <a
          className='terms-color'
          target="_blank"
          rel="noreferrer"
          href="https://legal.rdstation.com/pt/privacy-policy/"
        >
        política de privacidade
        </a>.`
      </sup>
      <sup>
        • Ao preencher o formulário, concordo em receber comunicações de acordo com meus interesses.
      </sup>
      <sup>
        • Você pode alterar suas permissões de comunicação a qualquer tempo.
      </sup>
    </>
  );
}

export default Terms;