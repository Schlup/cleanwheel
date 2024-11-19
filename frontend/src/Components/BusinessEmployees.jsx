import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderL from './HeaderL';
import Title from './Title';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const BusinessEmployees = () => {
  const { businessUuid } = useParams(); // Obtém o UUID do negócio pela URL
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showAddEmployeeForm, setShowAddEmployeeForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    email: '',
    roleId: '', // Este campo será utilizado para armazenar o ID do cargo selecionado
  });

  const navigate = useNavigate();

  // Array de cargos manualmente inserido
  const roles = [
    {
      id: 1,
      role: 'Atendente',
      description: 'Atendimento ao cliente e pedidos',
    },
    {
      id: 2,
      role: 'Lavador',
      description: 'Lavagem externa e interna dos veículos',
    },
    { id: 3, role: 'Polidor', description: 'Polimento e aplicação de ceras' },
    {
      id: 4,
      role: 'Técnico de Higienização',
      description: 'Limpeza e higienização interna',
    },
    {
      id: 5,
      role: 'Especialista em Vitrificação',
      description: 'Aplicação de vitrificação e cristalização',
    },
    {
      id: 6,
      role: 'Aplicador de Película',
      description: 'Instalação de películas protetivas',
    },
    {
      id: 7,
      role: 'Hidratação de Couro',
      description: 'Limpeza e hidratação de bancos de couro',
    },
    {
      id: 8,
      role: 'Especialista em Proteção de Faróis',
      description: 'Polimento e revitalização de faróis',
    },
    {
      id: 9,
      role: 'Gerente de Operações',
      description: 'Supervisão de operações e equipe',
    },
    {
      id: 10,
      role: 'Especialista em Detalhamento de Motor',
      description: 'Limpeza detalhada do motor',
    },
  ];

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
              Authorization: `Bearer ${token}`,
            },
          },
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
            Authorization: `Bearer ${token}`,
          },
        },
      );
      setEmployees(employees.filter((employee) => employee.id !== employeeId));
      alert('Funcionário excluído com sucesso.');
    } catch (error) {
      console.error('Erro ao excluir o funcionário:', error);
      alert('Erro ao excluir o funcionário.');
    }
  };

  const handleAddEmployeeToggle = () => {
    setShowAddEmployeeForm(!showAddEmployeeForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({
      ...newEmployee,
      [name]: value,
    });
  };

  const handleAddEmployee = async () => {
    const token = Cookies.get('token');
    if (!token) {
      alert('Token não encontrado. Faça login novamente.');
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:8080/employee/create`,
        {
          employeeEmail: newEmployee.email, // Verifique se o backend usa este campo
          employeeRole: newEmployee.roleId, // Aqui o ID do cargo será enviado
          business: businessUuid,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      setEmployees([...employees, response.data]);
      setShowAddEmployeeForm(false);
      setNewEmployee({ email: '', roleId: '' });
      navigate(`/myprofile`);
    } catch (error) {
      console.error('Erro ao adicionar funcionário:', error);
      alert('Erro ao adicionar o funcionário.');
    }
  };

  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title
        title="LISTA DE FUNCIONÁRIOS"
        subtitle="Gerencie seus funcionários"
      />

      <div className="w-fit mx-[100px] my-[7px]">
        {loading ? (
          <p className="text-center mt-10 text-white">Carregando...</p>
        ) : error ? (
          <p className="text-center mt-10 text-red-500">{error}</p>
        ) : (
          <>
            <div className="flex justify-start">
              <button
                onClick={handleAddEmployeeToggle}
                className="w-fit px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:text-c3 transition duration-200"
              >
                Adicionar Funcionário
              </button>
            </div>

            {showAddEmployeeForm && (
              <div className="mt-8 bg-w p-4 shadow-md rounded-lg">
                <h3 className="font-poppins text-2cs text-c11 mb-4">
                  Adicionar Funcionário
                </h3>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail do Funcionário"
                  value={newEmployee.email}
                  onChange={handleInputChange}
                  className="w-full p-2 mb-4 border border-c2 rounded-md"
                />
                <select
                  name="roleId"
                  value={newEmployee.roleId}
                  onChange={handleInputChange}
                  className="w-full p-2 mb-4 border border-c2 rounded-md"
                >
                  <option value="" disabled>
                    Selecione o Cargo
                  </option>
                  {roles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.role} - {role.description}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleAddEmployee}
                  className="bg-green-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-green-600 transition duration-200"
                >
                  Adicionar
                </button>
                <button
                  onClick={handleAddEmployeeToggle}
                  className="bg-gray-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-600 transition duration-200 ml-4"
                >
                  Cancelar
                </button>
              </div>
            )}

            <div>
              {employees.map((employee) => (
                <div
                  key={employee.id}
                  className="flex justify-between items-center bg-w shadow-md rounded-lg p-4 mt-4"
                >
                  <div>
                    <p className="font-roboto text-1-s text-c6">
                      ID: {employee.id}
                    </p>
                    <p className="font-roboto text-1-s text-c6">
                      Nome: {employee.name}
                    </p>
                    <p className="font-roboto text-1-s text-c6">
                      Cargo: {employee.role || 'Não especificado'}
                    </p>
                  </div>
                  <button
                    onClick={() => deleteEmployee(employee.id)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-red-600 transition duration-200"
                  >
                    Excluir
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default BusinessEmployees;
