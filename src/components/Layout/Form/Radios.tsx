function Radios({
  label,
  setDontHaveUrl,
  text,
  setUrl,
}: any) {
  return (
    <label>{ label }
      <input
        type="radio"
        onClick={ () => setDontHaveUrl(setUrl) }
        name="haveUrl"
      />{ text }
    </label>
  );
}

export default Radios;
