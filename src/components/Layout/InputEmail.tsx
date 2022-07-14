function EmailInput({ email, setEmail }: any) {
  return(
    <label>Seu email de trabalho
      <input
        placeholder="Insira seu e-mail"
        required={true}
        onChange={ ({ target }) => setEmail(target.value) }
        value={email}
      />
    </label>
  )
}

export default EmailInput;