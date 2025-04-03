import Header from "../Header";
import Title from "../Title";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "../../Redux/Slices/authSlice";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Usa Redux para atualizar o estado global

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();

        // Após o login, busca os dados do usuário
        Cookies.set('token', data.token, { expires: 7 }); // Expira em 7 dias
        
        console.log(data.token)
        console.log(data)
        
        await fetchUserData();

        alert("Login realizado com sucesso!");
        navigate("/home");

        // Chamada para a API que irá retornar todos os dados do usuário para guardar no REDUX

      } else {
        const errorData = await response.json();
        alert(`Erro: ${errorData.message || "Erro ao realizar login"}`);
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      alert("Erro ao tentar realizar o login.");
    }
  }

  async function fetchUserData() {
    try {
      const response = await fetch("http://localhost:8080/person/profile", {
        method: "GET",
        credentials: "include", // Inclui o cookie de autenticação
      });

      if (response.ok) {
        const userData = await response.json();
        dispatch(setUser({ user: userData })); // Armazena os dados no Redux
      } else {
        console.warn("Falha ao buscar os dados do usuário.");
      }
    } catch (error) {
      console.error("Erro ao buscar os dados do usuário:", error);
    }
  }

  return (
    <main className="w-full min-h-screen bg-c11">
      <Header />
      <Title title="ENTRAR" subtitle="informe seus dados" />
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
              <label
                className="font-poppins text-2-s pb-[10px]"
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
              <button
                type="submit"
                className="w-fit mt-[20px] px-[32px] py-[16px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins hover:text-c3 transition duration-200"
              >
                Entrar
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default Login;
