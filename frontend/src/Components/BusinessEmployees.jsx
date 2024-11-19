import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderL from './HeaderL';
import Title from './Title';
import Cookies from 'js-cookie';

const BusinessEmployees = () => {
    const { businessUuid } = useParams(); // Obtém o UUID do negócio pela URL
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            const token = Cookies.get('token');

            if (!token) {
                setError('Token não encontrado. Faça login novamente.');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                const response = await axios.get(
                    `http://localhost:8080/employee/list/${businessUuid}`,
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                        },
                    }
                );
                setEmployees(response.data || []);
            } catch (error) {
                console.error('Erro ao buscar os employees:', error);
                setError(error.message || 'Erro desconhecido');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, [businessUuid]);

    const deleteEmployee = async (employeeId) => {
        const token = Cookies.get('token');

        if (!token) {
            alert('Token não encontrado. Faça login novamente.');
            return;
        }

        try {
            await axios.delete(
                `http://localhost:8080/employee/delete/${employeeId}`,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                }
            );
            setEmployees(employees.filter(employee => employee.id !== employeeId));
            alert('Funcionário excluído com sucesso.');
        } catch (error) {
            console.error('Erro ao excluir o funcionário:', error);
            alert('Erro ao excluir o funcionário.');
        }
    };

    return (
        <main className="w-full min-h-screen bg-c11">
            <HeaderL />
            <Title title="LISTA DE FUNCIONÁRIOS" subtitle="Gerencie seus funcionários" />

            {loading ? (
                <p className="text-center mt-10 text-white">Carregando...</p>
            ) : error ? (
                <p className="text-center mt-10 text-red-500">{error}</p>
            ) : (
                <div className="mx-[100px] mt-8 space-y-4">
                    {employees.map((employee) => (
                        <div
                            key={employee.id}
                            className="flex justify-between items-center bg-w shadow-md rounded-lg p-4"
                        >
                            <div>
                                <p className="font-poppins text-2cs text-c11">
                                    {employee.name || 'Nome não informado'}
                                </p>
                                <p className="font-roboto text-1-s text-c6">
                                    Cargo: {employee.role || 'Não especificado'}
                                </p>
                                <p className="font-roboto text-1-s text-c6">
                                    E-mail: {employee.email || 'Não informado'}
                                </p>
                            </div>
                            <button
                                className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition duration-200"
                                onClick={() => deleteEmployee(employee.id)}
                            >
                                EXCLUIR
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </main>
    );
};

export default BusinessEmployees;
