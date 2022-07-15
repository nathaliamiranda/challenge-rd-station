import IPasswordInput from "../../../interfaces/IPasswordInput";

function PasswordInput({
  value,
  setField,
  label,
  placeholder,
  setVisibilityPassword,
  visibility,
  name,
}: IPasswordInput) {
  return(
    <>
      <label
        htmlFor={ name }
        className='data-form'
      >
        { label }
      </label>
      <input
        className='input-form'
        name={ name }
        placeholder={ placeholder }
        required={true}
        type={ visibility ? "text" : "password" }
        onChange={ ({ target }) => setField(target.value) }
        value={ value }
      />
      <button
        className='visibility-button'
        onClick={ () => setVisibilityPassword(!visibility) }
        type="button"
      >
          ChangeVisibility
      </button>
    </>
  )
}

export default PasswordInput;
