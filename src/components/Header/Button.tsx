import Arrow from '../../styles/images/longArrow.svg';
function Button() {
  return (
    <section className='section-button'>
      <button className='first-button'
      type='button'
      >BUTTON</button>
      <button className='second-button'
      type='button'
      >BUTTON <Arrow/></button>
    </section>
  )
}

export default Button;