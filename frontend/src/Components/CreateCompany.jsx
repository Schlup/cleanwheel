import HeaderL from './HeaderL';
import Title from './Title';
import { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const CreateCompany = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    streetName: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    country: '',
    postalCode: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  // Atualiza os dados do formulário
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCancel = async () => {
    navigate("/myprofile")
  }

  // Envia os dados do formulário para a API
  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = Cookies.get('token'); // Obtém o token do cookie
    if (!token) {
      setError('Token de autenticação não encontrado. Faça login novamente.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/business/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess('Empresa registrada com sucesso!');
        console.log('Dados da API:', data);
        navigate('/myprofile');
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao registrar a empresa.');
      }
    } catch (err) {
      console.error(err);
      setError('Erro ao se conectar com o servidor.');
    }
  };

  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title
        title="REGISTRAR EMPRESA"
        subtitle="Informe os dados de sua empresa"
      />
      <div className="flex justify-center pb-[120px]">
        <div className="w-fit h-full pl-[48px] pr-[60px] pt-[20px] pb-[60px] bg-w">
          <div className="flex flex-row">
            <p className="w-[4px] h-[8px] my-[7px] mr-[8px] bg-p1"></p>
            <p className="h-[24px] font-poppins text-c9 text-1cs uppercase mb-[20px]">
              Dados empresariais
            </p>
          </div>
          <section>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form
              className="flex flex-col ml-[12px] pb-[20px]"
              onSubmit={handleSubmit}
            >
              {[
                {
                  label: 'Nome',
                  name: 'name',
                  placeholder: 'Insira o nome da empresa',
                },
                {
                  label: 'Email',
                  name: 'email',
                  placeholder: 'contato@email.com',
                },
                {
                  label: 'Telefone',
                  name: 'phone',
                  placeholder: '(47)9999-999',
                },
                { label: 'CEP', name: 'postalCode', placeholder: '89012-001' },
                { label: 'País', name: 'country', placeholder: 'Brasil' },
                {
                  label: 'Estado',
                  name: 'state',
                  placeholder: 'Santa Catarina',
                },
                { label: 'Cidade', name: 'city', placeholder: 'Blumenau' },
                {
                  label: 'Bairro',
                  name: 'neighborhood',
                  placeholder: 'Victor Konder',
                },
                {
                  label: 'Nome da rua',
                  name: 'streetName',
                  placeholder: 'Rua São Paulo',
                },
                {
                  label: 'Complemento',
                  name: 'complement',
                  placeholder: 'Bloco Faculdade',
                },
              ].map((field) => (
                <div key={field.name} className="flex flex-col mb-[20px]">
                  <label
                    className="font-poppins text-2-s pb-[10px]"
                    htmlFor={field.name}
                  >
                    {field.label}
                  </label>
                  <input
                    className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                    type="text"
                    name={field.name}
                    id={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name]}
                    onChange={handleInputChange}
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-fit px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:text-c3 transition duration-200"
              >
                Registrar empresa
              </button>
              <button
                className="w-fit mt-[20px] px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:text-c3 transition duration-200"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CreateCompany;
