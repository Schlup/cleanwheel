import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderL from './HeaderL';
import Title from './Title';
import Cookies from 'js-cookie';
import IcoCategory from '../Assets/IcoCategory';
import IcoPerson from '../Assets/IcoPerson';
import IcoSchedule from '../Assets/IcoSchedule';

const BusinessDashboard = () => {
  const { businessUuid } = useParams(); // Obtém o UUID da empresa pela URL
  const navigate = useNavigate(); // Para navegação entre páginas
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0); // Página inicial
  const [size, setSize] = useState(12); // Tamanho da página

  useEffect(() => {
    const fetchAppointments = async () => {
      const token = Cookies.get('token');

      if (!token) {
        setError('Token não encontrado. Faça login novamente.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:8080/appointment/listAllAppointments?businessUuid=${businessUuid}&page=${page}&size=${size}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        setAppointments(response.data.content || []); // Verifique se `content` existe
      } catch (error) {
        console.error('Erro ao buscar os appointments:', error);
        setError(error.message || 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [businessUuid, page, size]); // Recarrega os dados quando businessUuid, page ou size mudam

  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title
        title="DASHBOARD DA EMPRESA"
        subtitle="Gerencie seus agendamentos"
      />
      {/* Botões de ação */}
      <div className="w-fit mx-[100px] my-[7px]">
        <div className="flex justify-start">
          <button
            className="w-fit mr-[20px] px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:text-c3 transition duration-200"
            onClick={() => navigate(`/business/${businessUuid}/employees`)}
          >
            FUNCIONÁRIOS
          </button>
          <button
            className="w-fit px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:text-c3 transition duration-200"
            onClick={() => navigate(`/business/${businessUuid}/edit`)}
          >
            EDITAR EMPRESA
          </button>
        </div>
      </div>

      {/* Conteúdo principal */}
      {loading ? (
        <p className="text-center mt-10 text-white">Carregando...</p>
      ) : error ? (
        <p className="text-center mt-10 text-red-500">{error}</p>
      ) : (
        <div className="mx-[100px] grid grid-cols-6 gap-[20px] mt-8">
          {appointments.map((appointment) => (
            <div key={appointment.uuid} className="flex justify-start">
              <div className="w-fit h-full mr-[20px] p-[20px] bg-w rounded-[5px]">
                <div className="grid grid-cols-1">
                  <div className="mb-[8px] inline-flex">
                    <span className="pt-[4px] mr-[8px]">
                      <IcoPerson />
                    </span>
                    <p className="font-poppins text-c8 text-1-cxs">
                      {appointment.person || 'Não informado'}
                    </p>
                  </div>
                  <div className="mb-[8px] inline-flex">
                    <span className="pt-[4px] mr-[8px]">
                      <IcoSchedule />
                    </span>
                    <p className="font-poppins text-c8 text-1-cxs">
                      {appointment.date + ' - ' + appointment.time}
                    </p>
                  </div>
                  <div className="inline-flex">
                    <span className="pt-[4px] mr-[8px]">
                      <IcoCategory />
                    </span>
                    <p className="font-poppins text-c8 text-1-cxs">
                      {appointment.service || 'Não especificado'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
};

export default BusinessDashboard;
