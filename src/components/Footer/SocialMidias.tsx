import Twitter from '../../styles/images/twitter.svg';
import Facebook from '../../styles/images/facebook.svg';
import Instagram from '../../styles/images/instagram.svg';
import Linkedin from '../../styles/images/linkedin.svg';
import Youtube from '../../styles/images/ytb.svg';

function SocialMidias() {
  return (
    <div>
       <a
        target="_blank"
        rel="noreferrer"
        href="https://twitter.com/rd_station"
      >
        <Twitter/> 
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.facebook.com/ResultadosDigitais/"
      >
        <Facebook/>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/company/resultadosdigitais"
      >
        <Linkedin/>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.instagram.com/resdigitais/"
      >
        <Instagram/>
      </a>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.youtube.com/channel/UC5lPKvmw6-DFya_qreisENQ"
      >
        <Youtube/>
      </a>  
    </div>
  )
}

export default SocialMidias;