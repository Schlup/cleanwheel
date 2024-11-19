import './App.css';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp';
import Schedule from './Components/Schedule';
import MyProfile from './Components/MyProfile';
import CreateCompany from './Components/CreateCompany';
import CreateSchedule from './Components/CreateSchedule';
import Home from './Components/Home';
import Lavacao from './Components/Lavacao';
import Polimento from './Components/Polimento';
import Envelopamento from './Components/Envelopamento';
import EditProfile from './Components/EditProfile';
import EditCompany from './Components/EditCompany';
import { CompanyAuthContext } from './Components/Context/CompanyAuthContext';
import ProtectedRoute from './Components/ProtectedRoute';
import BusinessDashboard from './Components/BusinessDashboard';
import BusinessEmployees from './Components/BusinessEmployees';
import BusinessEdit from './Components/BusinessEdit';

const App = () => {

  return (
    <div>
      <CompanyAuthContext>
        <BrowserRouter>
          <Routes>
            {/* Rotas públicas */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/singup" element={<SingUp />} />
            <Route path="/login" element={<Login />} />

            <Route path="/schedule" element={<Schedule />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/createcompany" element={<CreateCompany />} />
            <Route path="/createschedule" element={<CreateSchedule />} />
            <Route path="/home" element={<Home />} />
            <Route path="/lavacao" element={<Lavacao />} />
            <Route path="/polimento" element={<Polimento />} />
            <Route path="/envelopamento" element={<Envelopamento />} />
            <Route path="/editprofile" element={<EditProfile />} />

            {/* Rotas protegidas */}

            <Route path="/dashboard/:businessUuid" element={<BusinessDashboard />} />

            <Route path="/business/:businessUuid/employees" element={<BusinessEmployees />} />

            <Route path="/business/:businessUuid/edit" element={<BusinessEdit />} />

            <Route path="/editcompany" element={<ProtectedRoute><EditCompany /></ProtectedRoute>} />

            {/* Rotas de "Acesso Negado" */}
            <Route path="/not-authorized" element={<div>Você não tem permissão para acessar esta página.</div>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </CompanyAuthContext>
    </div>
  );
};

export default App;
