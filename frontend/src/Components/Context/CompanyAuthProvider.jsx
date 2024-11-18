import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';

export const CompanyAuthContext = createContext();

export const CompanyAuthProvider = ({ children }) => {
    const [ownCompany, setOwnCompany] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkOwnership = async () => {
            try {
                const token = Cookies.get('token');
                if (!token) {
                    setOwnCompany(false);
                    setLoading(false);
                    return;
                }

                const response = await axios.get('http://localhost:8080/person/isOwner', {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setOwnCompany(response.data); // O valor esperado da API deve ser um booleano
            } catch (err) {
                console.error('Erro ao verificar propriedade:', err);
                setOwnCompany(false);
            } finally {
                setLoading(false);
            }
        };

        checkOwnership();
    }, []);

    return (
        <CompanyAuthContext.Provider value={{ ownCompany, loading }}>
            {children}
        </CompanyAuthContext.Provider>
    );
};

export default CompanyAuthContext;
