import HeaderL from './HeaderL';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { useParams } from 'react-router-dom';

const EditBusiness = () => {
  const { businessUuid } = useParams();
  const navigate = useNavigate();

  // Estados para armazenar os dados do formulário
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

  // Função para lidar com mudanças nos campos do formulário
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Função para enviar os dados ao backend
  const handleSubmit = async () => {
    const token = Cookies.get('token'); // Obtém o token do cookie

    console.log(businessUuid);

    if (!token) {
      setError('Token não encontrado. Faça login novamente.');
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:8080/business/update/${businessUuid}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        setSuccess('Informações atualizadas com sucesso!');
        navigate(`/dashboard/${businessUuid}`); // Redireciona para a página do business após a atualização
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao atualizar as informações.');
      }
    } catch (err) {
      setError('Erro ao se conectar com o servidor.');
    }
  };

  const handleCancel = async () => {
    navigate("/myprofile")
  }

  // Carregar as informações do business ao carregar a página
  useEffect(() => {
    const fetchBusinessData = async () => {
      const token = Cookies.get('token');

      if (!token) {
        setError('Token não encontrado. Faça login novamente.');
        return;
      }

      try {
        const response = await fetch(
          `http://localhost:8080/business/${businessUuid}`,
          {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.ok) {
          const businessData = await response.json();
          setFormData({
            name: businessData.name,
            email: businessData.email,
            phone: businessData.phone,
            streetName: businessData.streetName,
            complement: businessData.complement,
            neighborhood: businessData.neighborhood,
            city: businessData.city,
            state: businessData.state,
            country: businessData.country,
            postalCode: businessData.postalCode,
          });
        } else {
          const errorData = await response.json();
          setError(
            errorData.message || 'Erro ao carregar os dados do business.',
          );
        }
      } catch (err) {
        setError('Erro ao se conectar com o servidor.');
      }
    };

    fetchBusinessData();
  }, [businessUuid]);

  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title
        title="Editar Empresa"
        subtitle="Altere as informações da empresa"
      />
      <div className="flex justify-center pb-[120px]">
        <div className="w-fit h-full pl-[48px] pr-[60px] pt-[20px] pb-[60px] bg-w">
          <div className="flex flex-row">
            <p className="w-[4px] h-[8px] my-[7px] mr-[8px] bg-p1"></p>
            <p className="h-[24px] font-poppins text-c9 text-1cs uppercase mb-[20px]">
              Informações da Empresa
            </p>
          </div>
          <section>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form className="flex flex-col ml-[12px] pb-[20px]">
              <label className="font-poppins text-2-s pb-[10px]" htmlFor="name">
                Nome da Empresa
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="name"
                id="name"
                placeholder="Insira o nome da empresa"
                value={formData.name}
                onChange={handleChange}
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="email"
              >
                E-mail
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="email"
                name="email"
                id="email"
                placeholder="Insira o e-mail"
                value={formData.email}
                onChange={handleChange}
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="phone"
              >
                Telefone
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="phone"
                id="phone"
                placeholder="Insira o telefone"
                value={formData.phone}
                onChange={handleChange}
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="streetName"
              >
                Rua
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="streetName"
                id="streetName"
                placeholder="Insira o nome da rua"
                value={formData.streetName}
                onChange={handleChange}
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="complement"
              >
                Complemento
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="complement"
                id="complement"
                placeholder="Complemento (opcional)"
                value={formData.complement}
                onChange={handleChange}
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="neighborhood"
              >
                Bairro
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="neighborhood"
                id="neighborhood"
                placeholder="Bairro"
                value={formData.neighborhood}
                onChange={handleChange}
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="city"
              >
                Cidade
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="city"
                id="city"
                placeholder="Cidade"
                value={formData.city}
                onChange={handleChange}
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="state"
              >
                Estado
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="state"
                id="state"
                placeholder="Estado"
                value={formData.state}
                onChange={handleChange}
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="country"
              >
                País
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="country"
                id="country"
                placeholder="País"
                value={formData.country}
                onChange={handleChange}
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="postalCode"
              >
                CEP
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="postalCode"
                id="postalCode"
                placeholder="CEP"
                value={formData.postalCode}
                onChange={handleChange}
              />
              <button
                className="w-fit mt-[20px] px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:text-c3 transition duration-200"
                onClick={handleSubmit}
              >
                Alterar
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

export default EditBusiness;
