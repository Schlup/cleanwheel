import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

// Criação do contexto
const AuthContext = createContext();

function UserAuthContext(props) {
    const [loggedIn, setLoggedIn] = useState(undefined); // Estado que armazena se o usuário está logado
    const [loading, setLoading] = useState(true); // Estado para controlar o carregamento da verificação de login

    // Função para verificar se o usuário está logado
    async function getLoggedIn() {
        const token = localStorage.getItem('token'); // Pegando o token do localStorage

        if (token) {
            try {
                const loggedInRes = await axios.get('http://localhost:8080/person/isLoggedIn', {
                    headers: {
                        Authorization: `Bearer ${token}`, // Passando o token no cabeçalho
                    },
                });
                setLoggedIn(loggedInRes.data); // Armazenando a resposta da API (true ou false)
            } catch (error) {
                console.error('Erro ao verificar o status de login:', error);
                setLoggedIn(false); // Se ocorrer um erro, assume-se que o usuário não está logado
            } finally {
                setLoading(false); // Finaliza o carregamento
            }
        } else {
            setLoggedIn(false); // Se não houver token, assume-se que o usuário não está logado
            setLoading(false); // Finaliza o carregamento
        }
    }

    useEffect(() => {
        getLoggedIn(); // Chama a função para verificar o status de login assim que o componente é montado
    }, []);

    return (
        <AuthContext.Provider value={{ loggedIn, loading, getLoggedIn }}>
            {props.children} {/* Renderiza os filhos do contexto */}
        </AuthContext.Provider>
    );
}

export default AuthContext;
export { UserAuthContext };
