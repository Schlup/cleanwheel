import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

import HeaderL from './HeaderL';
import Title from './Title';

const CreateSchedule = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [businessId, setBusinessId] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [error, setError] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  const services = [
    { id: 1, service: 'Lavagem Completa' },
    { id: 2, service: 'Polimento e Espelhamento' },
    { id: 3, service: 'Higienização Interna' },
    { id: 4, service: 'Cristalização de Pintura' },
    { id: 5, service: 'Enceramento' },
    { id: 6, service: 'Proteção de Para-brisa' },
    { id: 7, service: 'Remoção de Odor' },
    { id: 8, service: 'Vitrificação de Pintura' },
    { id: 9, service: 'Revitalização de Faróis' },
    { id: 10, service: 'Limpeza de Motor' },
    { id: 11, service: 'Descontaminação de Pintura' },
    { id: 12, service: 'Aplicação de PPF' },
    { id: 13, service: 'Hidratação de Couro' },
    { id: 14, service: 'Proteção de Rodas' },
    { id: 15, service: 'Remoção de Manchas' },
  ];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const businessUuid = queryParams.get('businessId');
    setBusinessId(businessUuid);
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = Cookies.get('token');
    if (!token) {
      setError('Token não encontrado. Faça login novamente.');
      return;
    }

    const appointmentData = {
      business: businessId,
      date: date,
      time: time,
      service: selectedServiceId, // ID do serviço selecionado (exemplo)
    };

    try {
      const response = await axios.post('http://localhost:8080/appointment/create', appointmentData, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      // Navegar para a página de confirmação ou agendamentos
      navigate('/home');
    } catch (err) {
      setError('Erro ao agendar o serviço');
      console.error(err);
    }
  };

  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title title="AGENDAR SERVIÇO" subtitle="confirmar agendamento" />
      <div className="flex justify-center pb-[120px]">
        <div className="w-fit h-full pl-[48px] pr-[60px] pt-[20px] pb-[60px] bg-w">
          <div className="flex flex-row">
            <p className="w-[4px] h-[8px] my-[7px] mr-[8px] bg-p1"></p>
            <p className="h-[24px] font-poppins text-c9 text-1cs uppercase mb-[20px]">
              Informações adicionais
            </p>
          </div>
          <section>
            <form className="flex flex-col ml-[12px] pb-[20px]" onSubmit={handleSubmit}>
              <label className="font-poppins text-c11 text-2-s pb-[10px]" htmlFor="date">
                Data
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="date"
                id="date"
                placeholder="Selecione uma data disponível"
                autoFocus
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <label className="font-poppins text-c11 text-2-s pt-[20px] pb-[10px]" htmlFor="time">
                Horário
              </label>
              <input
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                type="text"
                name="time"
                id="time"
                placeholder="Selecione o horário"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
              <label className="font-poppins text-c11 text-2-s pt-[20px] pb-[10px]" htmlFor="service">
                Serviço
              </label>
              <select
                id="service"
                name="service"
                className="w-[580px] h-[48px] bg-c1 font-roboto text-c7 text-2-s rounded-[5px] outline outline-c2 outline-offset-0 pl-3"
                value={selectedServiceId}
                onChange={(e) => setSelectedServiceId(e.target.value)}
              >
                <option value="">Selecione um serviço</option>
                {services.map((service) => (
                  <option key={service.id} value={service.id}>
                    {service.service}
                  </option>
                ))}
              </select>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">
                Agendar Serviço
              </button>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
};

export default CreateSchedule;
