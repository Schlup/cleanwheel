import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderL from './HeaderL';
import Title from './Title';
import Cookies from 'js-cookie';

const BusinessDashboard = () => {
    const { businessUuid } = useParams(); // Obtém o UUID da URL
    const [companyData, setCompanyData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCompanyData = async () => {
            const token = Cookies.get('token'); //
            try {
                console.log(businessUuid)
                const response = await axios.get(`http://localhost:8080/business/${businessUuid}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    },
                });
                setCompanyData(response.data); // Armazena os dados da empresa
            } catch (err) {
                setError('Erro ao carregar os dados da empresa.');
            } finally {
                setLoading(false);
            }
        };

        fetchCompanyData();
    }, [businessUuid]);

    return (
        <main className="w-full min-h-screen bg-c11">
            <HeaderL />
            <Title title="DASHBOARD DA EMPRESA" subtitle="Gerencie sua empresa" />

            <div className="flex justify-center">
                <div className="w-fit h-full pl-[48px] pr-[60px] pt-[20px] pb-[60px] bg-c12">
                    {loading ? (
                        <p className="text-white">Carregando...</p>
                    ) : error ? (
                        <p className="text-red-500">{error}</p>
                    ) : (
                        <>
                            <div className="flex flex-row">
                                <p className="w-[4px] h-[8px] my-[7px] mr-[8px] bg-p1"></p>
                                <p className="h-[24px] font-poppins text-w text-1cs uppercase mb-[20px]">
                                    Informações da Empresa
                                </p>
                            </div>
                            <div className="w-[580px] h-[24px] ml-[12px] flex justify-between">
                                <p className="font-poppins text-c4 text-1-s">Nome da Empresa</p>
                                <p className="font-roboto text-2-s text-c6">{companyData?.name}</p>
                            </div>
                            <div className="w-[580px] h-[24px] ml-[12px] flex justify-between">
                                <p className="font-poppins text-c4 text-1-s">CNPJ</p>
                                <p className="font-roboto text-2-s text-c6">{companyData?.cnpj}</p>
                            </div>
                            <div className="w-[580px] h-[24px] ml-[12px] flex justify-between">
                                <p className="font-poppins text-c4 text-1-s">Endereço</p>
                                <p className="font-roboto text-2-s text-c6">{companyData?.address}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </main>
    );
};

export default BusinessDashboard;
