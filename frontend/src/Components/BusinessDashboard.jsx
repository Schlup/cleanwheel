import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderL from './HeaderL';
import Title from './Title';
import Cookies from 'js-cookie';

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
                    `http://localhost:8080/appointment/listAllAppointments?businessUuid=${businessUuid}&page=${page}&size=${size}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });

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
            <Title title="DASHBOARD DA EMPRESA" subtitle="Gerencie seus agendamentos" />
            {/* Botões de ação */}
            <div className="flex gap-4 mt-6">
                <button
                    className="w-[248px] h-[56px] mt-[16px] ml-[12px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins"
                    onClick={() => navigate(`/business/${businessUuid}/employees`)}
                >
                    FUNCIONÁRIOS
                </button>
                <button
                    className="w-[248px] h-[56px] mt-[16px] ml-[12px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins"
                    onClick={() => navigate(`/business/${businessUuid}/edit`)}
                >
                    EDITAR EMPRESA
                </button>
            </div>

            {/* Conteúdo principal */}
            {loading ? (
                <p className="text-center mt-10 text-white">Carregando...</p>
            ) : error ? (
                <p className="text-center mt-10 text-red-500">{error}</p>
            ) : (
                <div className="mx-[100px] grid grid-cols-3 gap-[20px] mt-8">
                    {appointments.map((appointment) => (
                        <div key={appointment.uuid} className="flex justify-between">
                            <div className="w-fit h-full pl-[18px] pr-[16px] py-[16px] bg-w shadow-md rounded-lg">
                                <div className="flex flex-row justify-between mb-[16px]">
                                    <div className="h-[16px] align-middle col-start inline-flex pl-[18px]">
                                        <p className="pl-[8px] w-max-[250px] font-poppins text-2cs text-c11">
                                            Cliente: {appointment.customerName || 'Não informado'}
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 ml-[40px]">
                                    <div className="mb-[8px]">
                                        <p className="font-poppins text-c4 text-1-s">Data</p>
                                        <p className="font-roboto text-2-s text-c6">{appointment.date}</p>
                                    </div>
                                    <div className="mb-[8px]">
                                        <p className="font-poppins text-c4 text-1-s">Horário</p>
                                        <p className="font-roboto text-2-s text-c6">{appointment.time}</p>
                                    </div>
                                    <div>
                                        <p className="font-poppins text-c4 text-1-s">Serviço</p>
                                        <p className="font-roboto text-2-s text-c6">{appointment.serviceName || 'Não especificado'}</p>
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
