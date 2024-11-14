import Title from './Title';
import HeaderL from './HeaderL';

const EditCompany = () => {
  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title title="MINHA EMPRESA" subtitle="informe os dados de sua empresa" />
      <div className="flex justify-center pb-[120px]">
        <div className="w-fit h-full pl-[48px] pr-[60px] pt-[20px] pb-[60px] bg-w">
          <div className="flex flex-row">
            <p className="w-[4px] h-[8px] my-[7px] mr-[8px] bg-p1"></p>
            <p className="h-[24px] font-poppins text-c9 text-1cs uppercase mb-[20px]">
              Dados empresariais
            </p>
          </div>
          <section>
            <form
              className="flex flex-col ml-[12px] pb-[20px]"
              action=""
              method="get"
            >
              <label className="font-poppins text-2-s pb-[10px]" htmlFor="name">
                Nome
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="name"
                id="name"
                placeholder="Insira o nome da empresa"
                autoFocus
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
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
                htmlFor="phone"
              >
                Telefone
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="phone"
                id="phone"
                placeholder="(47)9999-999"
                autoFocus
              />
              <label
                className="font-poppins text-2-s pt-[20px] pb-[10px]"
                htmlFor="streetName"
              >
                Nome da rua
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="streetName"
                id="streetName"
                placeholder="Rua São Paulo"
                autoFocus
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
                placeholder="Bloco Faculdade"
                autoFocus
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
                placeholder="Victor Konder"
                autoFocus
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
                placeholder="Blumenau"
                autoFocus
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
                placeholder="Santa Catarina"
                autoFocus
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
                placeholder="Brasil"
                autoFocus
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
                placeholder="89012-001"
                autoFocus
              />
            </form>
          </section>
          <button className="w-[248px] h-[56px] ml-[12px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins">
            Alterar
          </button>
        </div>
      </div>
    </main>
  );
};

export default EditCompany;
