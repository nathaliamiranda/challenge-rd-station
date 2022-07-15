function GenericInput({
  value,
  setField,
  label,
  placeholder
}: any) {
  return(
    <label>{ label }
      <input
        placeholder={ placeholder }
        required={true}
        onChange={ ({ target }) => setField(target.value) }
        value={value}
      />
    </label>
  )
}

export default GenericInput;
