import Header from '../Header';
import Title from '../Title';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  async function goTo() {
    navigate('/home');
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
              action=""
              method="get"
            >
              <label
                className="font-poppins text-2-s pb-[10px]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="email"
                id="email"
                placeholder="contato@email.com"
                autoFocus
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="password"
                id="password"
                placeholder="Insira sua senha"
                autoFocus
              />
            </form>
          </section>
          <button
            onClick={goTo}
            className="w-[126px] h-[56px] ml-[12px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins"
          >
            Entrar
          </button>
        </div>
      </div>
    </main>
  );
};

export default Login;
