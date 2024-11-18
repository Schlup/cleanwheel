import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import axios from 'axios';

import HeaderL from './HeaderL';
import Title from './Title';
import IcoAlbum from '../Assets/IcoAlbum';
import IcoPhone from '../Assets/IcoPhone';
import IcoLocation from '../Assets/IcoLocation';
import imgCarWash from '../Images/carwash1.jpg'; // Imagem padrão caso não haja uma disponível

const Lavacao = () => {
  const navigate = useNavigate();
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(0);  // Página inicial
  const [size, setSize] = useState(12); // Tamanho da página

  useEffect(() => {
    const fetchBusinesses = async () => {
      const token = Cookies.get('token');

      if (!token) {
        setError('Token não encontrado. Faça login novamente.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8080/business/listAllBusiness?page=0&size=12', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        setBusinesses(response.data.content || []); // Verifique se `content` existe
      } catch (error) {
        console.error('Erro ao buscar os negócios:', error);
        setError(error.message || 'Erro desconhecido');
      } finally {
        setLoading(false);
      }
    };

    fetchBusinesses();
  }, [page, size]); // Recarrega os dados quando page ou size mudam

  function goTo(businessId) {
    navigate(`/createschedule?businessId=${businessId}`);
  }

  return (
    <main className="w-full min-h-screen bg-c11">
      <HeaderL />
      <Title title="Lavacao" subtitle="solicite um serviço" />
      {loading ? (
        <p className="text-center mt-10">Carregando...</p>
      ) : (
        <div className="mx-[100px] grid grid-cols-3 gap-[20px]">
          {businesses.map((business) => (
            <div key={business.UUID} className="flex justify-between">
              <button onClick={() => goTo(business.UUID)}>
                <div className="w-fit h-full pl-[18px] pr-[16px] py-[16px] bg-w shadow-md rounded-lg">
                  <div className="flex flex-row justify-between mb-[16px]">
                    <div className="h-[16px] align-middle col-start inline-flex pl-[18px]">
                      <span className="mt-[5px]">
                        <IcoAlbum />
                      </span>
                      <p className="pl-[8px] w-max-[250px] font-poppins text-2cs text-c11">
                        {business.businessName || 'Negócio sem nome'}
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="ml-[40px] col-start">
                      <div className="mr-[16px] grid grid-flow-row auto-rows-max">
                        <div className="inline-flex">
                          <span className="pt-[4px] mr-[8px]">
                            <IcoPhone />
                          </span>
                          <p>{business.businessPhone || '(47) 9999-9999'}</p>
                        </div>
                        <div className="inline-flex">
                          <span className="pt-[4px] mr-[8px]">
                            <IcoLocation />
                          </span>
                          <p className="w-[180px]">
                            {`${business.streetName}, ${business.neighborhood}, ${business.city}` ||
                              'Endereço não informado'}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-end">
                      <img
                        className="w-max-[116px] h-max-[116px] rounded-[5px]"
                        src={imgCarWash}
                        alt={business.businessName || 'Imagem padrão'}
                      />
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
      )}
      {error && <p className="text-center mt-10 text-red-500">{error}</p>}
    </main>
  );
};

export default Lavacao;
