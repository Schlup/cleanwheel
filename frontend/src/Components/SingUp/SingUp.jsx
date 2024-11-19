import Header from '../Header';
import Title from '../Title';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate();

  // Estados para os inputs
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  // Atualizar os valores dos inputs no estado
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  // Enviar dados para a API
  async function handleSubmit(event) {
    event.preventDefault(); // Previne o recarregamento da página

    // Validações básicas
    if (formData.password !== formData.repeatPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Cadastro realizado com sucesso!');
        navigate('/login'); // Redireciona para a página de login
      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message || 'Erro no registro'}`);
      }
    } catch (error) {
      console.error('Erro ao registrar:', error);
      alert('Erro ao tentar realizar o registro.');
    }
  }

  return (
    <main className="w-full min-h-screen bg-c11">
      <Header />
      <Title title="REGISTRAR-SE" subtitle="informe seus dados" />
      <div className="flex justify-center pb-[120px]">
        <div className="w-fit h-full pl-[48px] pr-[60px] pt-[20px] pb-[60px] bg-w">
          <div className="flex flex-row">
            <p className="w-[4px] h-[8px] my-[7px] mr-[8px] bg-p1"></p>
            <p className="h-[24px] font-poppins text-c9 text-1cs uppercase mb-[20px]">
              Dados pessoais
            </p>
          </div>
          <section>
            <form
              className="flex flex-col ml-[12px] pb-[20px]"
              onSubmit={handleSubmit}
            >
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
                required
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
                required
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="email"
                name="email"
                id="email"
                placeholder="contato@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="password"
                name="password"
                id="password"
                placeholder="Insira sua senha"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="repeatPassword"
              >
                Confirme a senha
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="password"
                name="repeatPassword"
                id="repeatPassword"
                placeholder="Repita sua senha"
                value={formData.repeatPassword}
                onChange={handleChange}
                required
              />
              <button
                type="submit"
                className="w-fit mt-[20px] px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:text-c3 transition duration-200"
              >
                Registrar-se
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
