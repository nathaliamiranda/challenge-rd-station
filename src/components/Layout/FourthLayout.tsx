import Play from '../../styles/images/play.svg';
import ImgPlay from '../../styles/images/imgPlay.png';
import Image from 'next/image';

function FourthLayout() {
  return (
    <section>
      <div>
        <h2>Por que mais de 25.000 empresas escolheram o RD Station?</h2>
        <sub>Combinamos nossos produtos de Marketing e Vendas com pessoas que se importam com seus resultados e um ecossistema que apoia o seu negócio do planejamento à prática.</sub>
        <button
          type="button"
        >
          CRIAR CONTA GRATUITA
        </button>
      </div>

      <div>
        <div>
          <h3>Entenda melhor como o RD Station Marketing funciona na prática</h3>
          <button>ASSISTA A DEMONSTRAÇÃO<Play/></button>
        </div>
        <div>
          <Image
            loader={({ src }) => src }
            src={ImgPlay}
            alt="Picture of the author"
            width={649}
            height={365}
          />
          VIDEO AQUI
        </div>
      </div>
    </section>
  )
}

export default FourthLayout;