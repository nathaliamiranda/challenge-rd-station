import IGenericInput from "../../../interfaces/IGenericInput";

function GenericInput({
  value,
  setField,
  label,
  placeholder,
  name,
}: IGenericInput) {
  return(
    <>
      <label htmlFor={ name }
      className='data-form'
      >{ label }
      </label>
        <input
          className='input-form'
          placeholder={ placeholder }
          required={ true }
          onChange={ ({ target }) => setField(target.value) }
          value={ value }
          id={ name }
        />
      
    </>
  )
}

export default GenericInput;
