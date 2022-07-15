import IRadios from "../../../interfaces/IRadios";

function Radios({
  label,
  setDontHaveUrl,
  text,
  setUrl,
  name,
}: IRadios) {
  return (
  <>
    <label
      htmlFor={ name }
      className='data-form'
    >
      <p>{ label }</p>
      <input
        type="radio"
        onClick={ () => setDontHaveUrl(setUrl) }
        name="haveUrl"
      />{ text }</label>
    </>
  );
}

export default Radios;
