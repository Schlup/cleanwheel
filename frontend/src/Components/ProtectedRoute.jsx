import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import CompanyContext from './Context/CompanyAuthContext';

const ProtectedRoute = ({ children }) => {
    const { ownCompany, loading } = useContext(CompanyContext);

    console.log('Loading:', loading);
    console.log('OwnCompany:', ownCompany);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (!ownCompany) {
        return <Navigate to="/not-authorized" />;
    }

    return children;
};

export default ProtectedRoute;
