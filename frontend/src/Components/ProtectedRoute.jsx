import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CompanyContext from './Context/BusinessAuthContext'; // Certifique-se de importar o contexto correto

const ProtectedRoute = ({ children }) => {
    const { ownCompany, loading } = useContext(CompanyContext);

    // Enquanto o carregamento está acontecendo, pode mostrar um loading spinner ou algo similar
    if (loading) {
        return <div>Carregando...</div>;
    }

    // Se o usuário não for owner, redireciona para a página de "Acesso Negado"
    if (!ownCompany) {
        return <Navigate to="/not-authorized" />;
    }

    // Se for owner, renderiza o componente da rota protegida
    return children;
};

export default ProtectedRoute;
