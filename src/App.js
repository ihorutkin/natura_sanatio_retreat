import './App.css';
import {useEffect} from 'react';
import { Routes, Route, useLocation } from "react-router-dom"
import MainPage from "./jsx_components/pages/main"
import RecoveryProgramPlanPage from "./jsx_components/pages/recovery_program_plan"
import AccomodationAndDietPage from "./jsx_components/pages/accomodation_diet"
import MainNSRTeamPage from "./jsx_components/pages/main_nsr_team"
import OnlineProgramPage from "./jsx_components/pages/online_programs"
import OnSiteProgramPage from "./jsx_components/pages/on_site_proram"
import ContactForm from './jsx_components/pages/contact';
import AOS from "aos"
import "aos/dist/aos.css";

function App() {
  let location = useLocation()
  useEffect(() => {
    setTimeout(() => {
      AOS.init();
    }, 200);
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <Routes>
      <Route
        path='/'
        element={<MainPage />}
      />
      <Route
        path='/recovery_plan'
        element={<RecoveryProgramPlanPage />}
      />
      <Route
        path='/online_program'
        element={<OnlineProgramPage />}
      />
      <Route
        path='/on-site_program'
        element={<OnSiteProgramPage />}
      />
      <Route
        path='/accomodation_and_diet'
        element={<AccomodationAndDietPage />}
      />
      <Route
        path='/main_nsr_team'
        element={<MainNSRTeamPage />}
      />
      <Route
        path='/contact'
        element={<ContactForm />}
      />
    </Routes>
  );
}

export default App;
