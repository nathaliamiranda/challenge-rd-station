import Image from 'next/image';
import Rdoer from '../../styles/images/imgRDoer.png';

function SecondLayout() {
  return (
    <section>
      <div>
      <Image
        loader={({ src }) => src }
        src={Rdoer}
        alt="Picture of the author"
        className='img-rdoer'
      />
      </div>
      <div>
        <h3>Resultados previsíveis e mais clientes para sua empresa</h3>
        <sub>Torne sua atuação no Marketing Digital mais eficaz</sub>
        <ul>
          <li>Ferramentas intuitivas e com modelos prontos, vídeos explicativos e passo a passo guiado</li>
          <li>Implementação com especialistas focada em planejamento e prática (nos planos Marketing Pro e Enterprise)</li>
          <li>Time de especialistas em Sucesso do Cliente para apoiar na otimização da estratégia em cada fase da sua jornada (nos planos Marketing Pro e Enterprise)</li>
          <li>Suporte técnico em português, espanhol e inglês para tirar dúvidas, com 97% de satisfação entre nossos clientes</li>
          <li>Muito conteúdo educativo, eventos, cursos da RD University e comunidades para você continuar evoluindo</li>
        </ul>
      </div>
    </section>
  )
}

export default SecondLayout;