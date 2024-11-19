import HeaderL from './HeaderL';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie'; // Para obter o token salvo
import axios from 'axios';

const MyProfile = () => {
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null); // Armazena os dados do perfil
  const [loading, setLoading] = useState(true); // Controla o estado de carregamento
  const [error, setError] = useState(null); // Armazena possíveis erros
  const [isOwner, setIsOwner] = useState(false); // Armazena se o usuário é owner da empresa

  useEffect(() => {
    const fetchProfileData = async () => {
      const token = Cookies.get('token'); // Obtém o token do cookie

      if (!token) {
        setError('Token não encontrado. Faça login novamente.');
        setLoading(false);
        return;
      }

      try {
        // Buscando dados do perfil
        const profileResponse = await fetch(
          'http://localhost:8080/person/profile',
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (profileResponse.ok) {
          const profileData = await profileResponse.json();
          setProfileData(profileData);
        } else {
          const errorData = await profileResponse.json();
          setError(errorData.message || 'Erro ao carregar os dados do perfil.');
        }

        // Verificando se o usuário é OWNER de uma empresa
        const ownerResponse = await axios.get(
          'http://localhost:8080/person/isOwner',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setIsOwner(ownerResponse.data);
      } catch (err) {
        setError('Erro ao se conectar com o servidor.');
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  // Funções de navegação
  const goOut = () => navigate('/');
  const goToCreateCompany = () => navigate('/createcompany');
  const goToEditProfile = () => navigate('/editprofile');

  const goToCompanyDashboard = async () => {
    const token = Cookies.get('token'); // Obtém o token do cookie

    if (!token) {
      setError('Token não encontrado. Faça login novamente.');
      return;
    }

    try {
      const response = await axios.get(
        'http://localhost:8080/person/getBusinessUuid',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (response.status === 200) {
        const businessUuid = response.data;
        navigate(`/dashboard/${businessUuid}`); // Redireciona para o dashboard com o UUID
      } else {
        setError('Não foi possível obter o UUID da empresa.');
      }
    } catch (err) {
      setError('Erro ao tentar redirecionar para o dashboard da empresa.');
    }
  };

  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title title="MEU PERFIL" subtitle="gerencie seu Perfil" />

      <div className="flex justify-center">
        <div className="w-fit h-full pl-[48px] pr-[60px] pt-[20px] pb-[60px] bg-c12">
          {loading ? (
            <p className="text-white">Carregando...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            <>
              <div className="flex flex-row">
                <p className="w-[4px] h-[8px] my-[7px] mr-[8px] bg-p1"></p>
                <p className="h-[24px] font-poppins text-w text-1cs uppercase mb-[20px]">
                  Informações básicas
                </p>
              </div>
              <div className="w-[580px] h-[24px] ml-[12px] flex justify-between">
                <p className="font-poppins text-c4 text-1-s">Nome</p>
                <p className="font-roboto text-2-s text-c6 flex">
                  {profileData?.name + ' ' + profileData?.lastname}
                </p>
              </div>
              <div className="w-[580px] h-[1px] ml-[12px] bg-c11 mt-[10px] mb-[9px]"></div>
              <div className="w-[580px] h-[24px] ml-[12px] flex justify-between">
                <p className="font-poppins text-c4 text-1-s uppercase">CPF</p>
                <p className="font-roboto text-2-s text-c6">
                  {profileData?.cpf}
                </p>
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
                  {profileData?.email}
                </p>
              </div>
              <div className="w-[580px] h-[1px] ml-[12px] bg-c11 mt-[10px] mb-[9px]"></div>
              <div className="w-[580px] h-[24px] ml-[12px] flex justify-between">
                <p className="font-poppins text-c4 text-1-s">Telefone</p>
                <p className="font-roboto text-2-s text-c6">
                  {profileData?.phone}
                </p>
              </div>
              <div className="mt-[20px] ml-[12px] flex justify-between">
                <button
                  onClick={goOut}
                  className="w-fit px-[8px] py-[4px] rounded-[5px] text-c4 font-poppins bg-c10 hover:bg-[#FFBF00] hover:text-[#332200] transition duration-200"
                >
                  Sair
                </button>
                <button
                  onClick={goToEditProfile}
                  className="font-poppins text-1-s text-p1 hover:underline transition duration-200"
                >
                  Editar conta
                </button>
              </div>

              {isOwner && (
                <button
                  onClick={goToCompanyDashboard}
                  className="w-fit mt-[16px] ml-[12px] px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:bg-[#FFBF00] hover:text-c3 transition duration-200"
                >
                  Ver minha empresa
                </button>
              )}

              {!isOwner && (
                <button
                  onClick={goToCreateCompany}
                  className="w-fit mt-[16px] ml-[12px] px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:bg-[#FFBF00] hover:text-c3 transition duration-200"
                >
                  Registrar empresa
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default MyProfile;
