import Title from './Title';
import HeaderL from './HeaderL';
import { useNavigate } from 'react-router-dom';

const CreateSchedule = () => {
  const navigate = useNavigate();

  async function goTo() {
    navigate('/schedule');
  }
  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title title="AGENDAR SERVIÇO" subtitle="confirmar agendamento" />
      <div className="flex justify-center pb-[120px]">
        <div className="w-fit h-full pl-[48px] pr-[60px] pt-[20px] pb-[60px] bg-w">
          <div className="flex flex-row">
            <p className="w-[4px] h-[8px] my-[7px] mr-[8px] bg-p1"></p>
            <p className="h-[24px] font-poppins text-c9 text-1cs uppercase mb-[20px]">
              Informações adicionais
            </p>
          </div>
          <section>
            <form
              className="flex flex-col ml-[12px] pb-[20px]"
              action=""
              method="get"
            >
              <label
                className="font-poppins text-c11 text-2-s pb-[10px]"
                htmlFor="date"
              >
                Data
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="date"
                id="date"
                placeholder="Selecione uma data disponível"
                autoFocus
              />
              <label
                className="font-poppins text-c11 text-2-s pt-[20px] pb-[10px]"
                htmlFor="time"
              >
                Horário
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="time"
                id="time"
                placeholder="Selecione uma horário disponível"
                autoFocus
              />
            </form>
          </section>
          <button
            onClick={goTo}
            className="w-[151px] h-[56px] ml-[12px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins"
          >
            Agendar
          </button>
        </div>
      </div>
    </main>
  );
};

export default CreateSchedule;
