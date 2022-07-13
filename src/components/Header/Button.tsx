import Arrow from '../../styles/images/longArrow.svg';
function Button() {
  return (
    <section>
      <button
      type='button'
      >BUTTON</button>
      <button
      type='button'
      >BUTTON <Arrow/></button>
    </section>
  )
}

export default Button;