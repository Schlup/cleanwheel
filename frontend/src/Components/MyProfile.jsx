import HeaderL from './HeaderL';
import Title from './Title';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
  const navigate = useNavigate();

  async function goOut() {
    navigate('/');
  }

  async function goTo() {
    navigate('/createcompany');
  }
  async function goToEditProfile() {
    navigate('/editprofile');
  }
  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title title="MEU PERFIL" subtitle="gerencie seu Perfil" />
      <div className="flex justify-center">
        <div className="w-fit h-full pl-[48px] pr-[60px] pt-[20px] pb-[60px] bg-c12">
          <div className="flex flex-row">
            <p className="w-[4px] h-[8px] my-[7px] mr-[8px] bg-p1"></p>
            <p className="h-[24px] font-poppins text-w text-1cs uppercase mb-[20px]">
              Informações básicas
            </p>
          </div>
          <div className="w-[580px] h-[24px] ml-[12px] flex justify-between">
            <p className="font-poppins text-c4 text-1-s">Nome</p>
            <p className="font-roboto text-2-s text-c6">João da Silva</p>
          </div>
          <div className="w-[580px] h-[1px] ml-[12px] bg-c11 mt-[10px] mb-[9px]"></div>
          <div className="w-[580px] h-[24px] ml-[12px] flex justify-between">
            <p className="font-poppins text-c4 text-1-s uppercase">CPF</p>
            <p className="font-roboto text-2-s text-c6">123.456.789-10</p>
          </div>

          <div className="flex flex-row mt-[40px]">
            <p className="w-[4px] h-[8px] my-[7px] mr-[8px] bg-p1"></p>
            <p className="h-[24px] font-poppins text-w text-1cs uppercase mb-[20px]">
              Informações de contato
            </p>
          </div>
          <div className="w-[580px] h-[24px] ml-[12px] flex justify-between">
            <p className="font-poppins text-c4 text-1-s">Email</p>
            <p className="font-roboto text-2-s text-c6">
              joaozinho_silva@email.com
            </p>
          </div>
          <div className="w-[580px] h-[1px] ml-[12px] bg-c11 mt-[10px] mb-[9px]"></div>
          <div className="w-[580px] h-[24px] ml-[12px] flex justify-between">
            <p className="font-poppins text-c4 text-1-s uppercase">Telefone</p>
            <p className="font-roboto text-2-s text-c6">(47) 9999-9999</p>
          </div>
          <div className="mt-[20px] ml-[12px] flex justify-between">
            <button
              onClick={goOut}
              className="w-[43px] h-[24px] rounded-[5px] bg-c10 text-c4 font-poppins"
            >
              Sair
            </button>
            <button
              onClick={goToEditProfile}
              className="font-poppins text-1-s text-p1"
            >
              Editar conta
            </button>
          </div>
          <button
            onClick={goTo}
            className="w-[248px] h-[56px] mt-[16px] ml-[12px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins"
          >
            Registrar Empresa
          </button>
        </div>
      </div>
    </main>
  );
};

export default MyProfile;
