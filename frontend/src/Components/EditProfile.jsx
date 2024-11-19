import HeaderL from './HeaderL';
import Title from './Title';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Cookies from 'js-cookie';

const EditProfile = () => {
  const navigate = useNavigate();

  // Estados para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    phone: '',
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

  const handleCancel = async () => {
    navigate("/myprofile")
  }

  // Função para enviar os dados ao backend
  const handleSubmit = async () => {
    const token = Cookies.get('token'); // Obtém o token do cookie

    if (!token) {
      setError('Token não encontrado. Faça login novamente.');
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      setError('As senhas não coincidem.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/person/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          name: formData.name,
          lastname: formData.lastname,
          phone: formData.phone,
        }),
      });

      if (response.ok) {
        setSuccess('Informações atualizadas com sucesso!');
        navigate('/myprofile'); // Redireciona para o perfil após o sucesso
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Erro ao atualizar as informações.');
      }
    } catch (err) {
      setError('Erro ao se conectar com o servidor.');
    }
  };

  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title title="Minha Conta" subtitle="informe seus dados" />
      <div className="flex justify-center pb-[120px]">
        <div className="w-fit h-full pl-[48px] pr-[60px] pt-[20px] pb-[60px] bg-w">
          <div className="flex flex-row">
            <p className="w-[4px] h-[8px] my-[7px] mr-[8px] bg-p1"></p>
            <p className="h-[24px] font-poppins text-c9 text-1cs uppercase mb-[20px]">
              Dados pessoais
            </p>
          </div>
          <section>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form className="flex flex-col ml-[12px] pb-[20px]">
              <label className="font-poppins text-2-s pb-[10px]" htmlFor="name">
                Nome
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="name"
                id="name"
                placeholder="Insira seu nome"
                value={formData.name}
                onChange={handleChange}
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="lastname"
              >
                Sobrenome
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Insira seu sobrenome"
                value={formData.lastname}
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
                placeholder="Insira seu telefone"
                value={formData.phone}
                onChange={handleChange}
              />
            </form>
          </section>
          <button
            onClick={handleSubmit}
            className="w-fit ml-[12px] px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:bg-[#FFBF00] hover:text-c3 transition duration-200"
          >
            Alterar
          </button>
          <button
            onClick={handleCancel}
            className="w-fit ml-[12px] px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:bg-[#FFBF00] hover:text-c3 transition duration-200"
          >
            Cancelar
          </button>
        </div>
      </div>
    </main>
  );
};

export default EditProfile;
