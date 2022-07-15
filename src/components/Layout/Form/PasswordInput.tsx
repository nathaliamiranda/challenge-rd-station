function PasswordInput({
  value,
  setField,
  label,
  placeholder,
  setVisibilityPassword,
  visibility
}: any) {
  return(
    <label>{ label }
      <input
        placeholder={ placeholder }
        required={true}
        type={ visibility ? "text" : "password" }
        onChange={ ({ target }) => setField(target.value) }
        value={value}
      />
      <button
        onClick={ () => setVisibilityPassword(!visibility) }
        type="button"
      >
        ChangeVisibility
      </button>
    </label>
  )
}

export default PasswordInput;
