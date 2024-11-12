import imgLandPage from '../Images/senna.jpg';
const LandingPage = () => {
  return (
    <main className="w-full min-h-screen bg-c11 ps-100px grid grid-cols-2 gap-[20px]">
      <div className="col-start place-self-center">
        <h1 className="font-poppins text-1-xxl text-w pb-46px">
          Nós agendamos seus serviços <span className="text-p1">.</span>
        </h1>
        <p className="font-roboto text-2-l text-c5 pb-5">
          Plataforma de agendamento de serviços para empresas especializadas em
          cuidados automotivos. Simplicidade no agendamento de lavação,
          polimento, envelopamento, revisão, manutenção, funilaria e pintura,
          proporcionando eficiência e controle das operações com Clean Wheel.
        </p>
        <button className="w-[167px] h-[56px] rounded-[5px] bg-gradient-to-b from-[#FFBF00] to-[#F2A50C] text-p5 text-1-m uppercase font-poppins">
          Saiba mais
        </button>
      </div>
      <img
        className="w-[640px] h-[460px] col-end place-self-center drop-shadow-md"
        src={imgLandPage}
        alt="Senna.jpg"
      />
    </main>
  );
};

export default LandingPage;
