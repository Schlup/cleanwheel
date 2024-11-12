import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/LandingPage';
import LandingPage from './Components/LandingPage';
import Login from './Components/Login/Login';
import SingUp from './Components/SingUp/SingUp';
import Schedule from './Components/Schedule';
import Services from './Components/Services';
import MyProfile from './Components/MyProfile';

function Router() {

    const { loggedIn } = useContext(AuthContext)
    console.log("User logged: " + loggedIn)

    const { ownCompany } = useContext(CompanyContext)
    console.log("Company: " + ownCompany)

    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<LandingPage />} />

                {loggedIn === false && (
                    <>
                        
                        <Route path='/singup' element={<SingUp />} />
                        <Route path='/login' element={<Login />} />
                    </>
                )}

                {loggedIn === true && (
                    <>
                        <Route path='/home' element={<Home />} />
                        <Route path='/myprofile' element={<MyProfile />} />
                        <Route path='/services' element={<Services />} />                    
                        <Route path='/agenda' element={<Schedule />} />

                        {ownCompany === false && (
                            <>
                                <Route path='/createcompany' element={<CreateCompany />} />
                            </>
                        )}

                        {ownCompany === true && (
                            <>
                                <Route path='/createservice' element={<CreateService />} />
                                <Route path='/companydashboard' element={<CompanyDashboard />} />
                            </>
                        )}

                    </>
                )}


            </Routes>
        </BrowserRouter>
    )
}

export default Router