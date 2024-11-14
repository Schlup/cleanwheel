import imgHome from '../Images/home.png';
import imgLavacao from '../Images/lavacao.png';
import imgPolimento from '../Images/polimento.png';
import imgEnvelopamento from '../Images/envelopamento.png';
import HeaderL from './HeaderL';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="w-full min-h-screen bg-w">
      <HeaderL />
      <div className="w-full h-[680px] bg-c12 ps-100px mb-[240px]">
        <div className="h-[800px] grid grid-cols-2 gap-[20px]">
          <div className="col-start place-self-center">
            <h1 className="text-wrap font-poppins text-1-xxl text-w pb-[32px]">
              Promoções especiais <span className="text-p1">.</span>
            </h1>
            <p className="text-wrap font-roboto text-2-l text-c5 pb-[56px]">
              Aproveite agora as melhores promoções por tempo limitado!
            </p>
            <button className="w-[271px] h-[56px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins">
              RESGATE O SEU CUPOM
            </button>
          </div>

          <img
            className="h-[800px] col-end place-self-center rounded-[5px]"
            src={imgHome}
            alt="Home.png"
          />
        </div>
      </div>
      <h1 className="text-wrap font-poppins text-1-xxl text-c11 pb-[32px] ms-[166px] mb-[40px]">
        agende seu serviço <span className="text-p1">.</span>
      </h1>
      <div className="w-full mx-[70px] grid grid-cols-3">
        <Link className="w-[400px]" to="/lavacao">
          <img
            className="col-end place-self-center mb-[16px]"
            src={imgLavacao}
            alt="Lavação.png"
          />
          <div className="flex flex-row mb-[120px]">
            <p className="w-[12px] h-[8px] mt-[16px] mr-[8px] bg-p1"></p>
            <p className="font-poppins text-1-xl text-c11">Lavação</p>
          </div>
        </Link>
        <Link className="w-[400px]" to="/polimento">
          <img
            className="col-end place-self-center mb-[16px]"
            src={imgPolimento}
            alt="Polimento.png"
          />
          <div className="flex flex-row mb-[120px]">
            <p className="w-[12px] h-[8px] mt-[16px] mr-[8px] bg-p1"></p>
            <p className="font-poppins text-1-xl text-c11">Polimento</p>
          </div>
        </Link>
        <Link className="w-[400px]" to="/envelopamento">
          <img
            className="col-end place-self-center mb-[16px]"
            src={imgEnvelopamento}
            alt="Envelopamento.png"
          />
          <div className="flex flex-row mb-[120px]">
            <p className="w-[12px] h-[8px] mt-[16px] mr-[8px] bg-p1"></p>
            <p className="font-poppins text-1-xl text-c11">Envelopamento</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Home;
