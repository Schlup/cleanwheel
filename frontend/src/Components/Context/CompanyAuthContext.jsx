import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

// Criação do contexto
const CompanyContext = createContext();

function CompanyAuthContext(props) {
    const [ownCompany, setOwnCompany] = useState(false); // Estado para armazenar a informação de se o usuário é owner
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento

    // Função que faz a requisição à API para verificar se o usuário é owner
    async function getOwnCompany(token) {
        try {
            const ownCompanyRes = await axios.get("http://localhost:8080/person/isOwner", {
                headers: {
                    Authorization: `Bearer ${token}`, // Passando o token de autenticação
                },
            });
            setOwnCompany(ownCompanyRes.data); // Armazenando o resultado da API (true ou false)
        } catch (error) {
            console.error("Erro ao verificar a propriedade da empresa:", error);
            setOwnCompany(false); // Caso ocorra algum erro, assume-se que o usuário não é owner
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token"); // Pegando o token do localStorage

        if (token) {
            getOwnCompany(token); // Chama a função para verificar se o usuário é owner
        } else {
            setLoading(false); // Se não houver token, finaliza o carregamento
        }
    }, []); // Executa apenas uma vez quando o componente é montado

    return (
        <CompanyContext.Provider value={{ ownCompany, loading, getOwnCompany }}>
            {props.children}
        </CompanyContext.Provider>
    );
}

export default CompanyContext;
export { CompanyAuthContext };
