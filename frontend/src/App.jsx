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

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
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
          <Route path="/editcompany" element={<EditCompany />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
