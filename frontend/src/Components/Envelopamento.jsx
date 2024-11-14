import IcoAlbum from '../Assets/IcoAlbum';
import IcoStar from '../Assets/IcoStar';
import IcoSchedule from '../Assets/IcoSchedule';
import IcoPhone from '../Assets/IcoPhone';
import IcoLocation from '../Assets/IcoLocation';
import { useNavigate } from 'react-router-dom';

import HeaderL from './HeaderL';
import Title from './Title';
import imgCarWash from '../Images/carwash1.jpg';

const Envelopamento = () => {
  const navigate = useNavigate();

  async function goTo() {
    navigate('/createschedule');
  }
  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title title="Envelopamento" subtitle="solicite um serviço" />
      <div className="mx-[100px] grid grid-cols-3 gap-[20px]">
        <div className="flex justify-beetwen">
          <button onClick={goTo}>
            <div className="w-fit h-full pl-[18px] pr-[16px] py-[16px] bg-w">
              <div className="flex flex-row justify-between mb-[16px]">
                <div className="h-[16px] align-middle col-start inline-flex pl-[18px]">
                  <span className="mt-[5px]">
                    <IcoAlbum />
                  </span>
                  <p className="pl-[8px] w-max-[250px] font-poppins text-2cs text-c11">
                    Brian Auto Wash
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2">
                <div className="ml-[40px] col-start">
                  <div className="mr-[16px] grid grid-flow-row auto-rows-max">
                    <div className="inline-flex">
                      <span className="pt-[4px] mr-[8px]">
                        <IcoStar />
                      </span>
                      <p>4 Estrelas</p>
                    </div>
                    <div className="inline-flex">
                      <span className="pt-[4px] mr-[8px]">
                        <IcoPhone />
                      </span>
                      <p>(47) 9999-9999</p>
                    </div>
                    <div className="inline-flex">
                      <span className="pt-[4px] mr-[8px]">
                        <IcoSchedule />
                      </span>
                      <p>12/07/2024 - 13:30</p>
                    </div>
                    <div className="inline-flex">
                      <span className="pt-[4px] mr-[8px]">
                        <IcoLocation />
                      </span>
                      <p className="w-[180px]">
                        Rua São Paulo, 1147 Bloco Faculdade - Victor Konder,
                        Blumenau - SC
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-end">
                  <img
                    className="w-max-[116px] h-max-[116px] rounded-[5px]"
                    src={imgCarWash}
                    alt="carwash.jpg"
                  />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Envelopamento;
