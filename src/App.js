import './App.css';
import { Routes, Route } from "react-router-dom"
import MainPage from "./jsx_components/pages/main"
import RecoveryProgramPlanPage from "./jsx_components/pages/recovery_program_plan"
import AccomodationAndDietPage from "./jsx_components/pages/accomodation_diet"
import MainNSRTeamPage from "./jsx_components/pages/main_nsr_team"
import OnlineProgramPage from "./jsx_components/pages/online_programs"
import OnSiteProgramPage from "./jsx_components/pages/on_site_proram"
import AOS from "aos"


function App() {
  AOS.init();
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
    </Routes>
  );
}

export default App;
