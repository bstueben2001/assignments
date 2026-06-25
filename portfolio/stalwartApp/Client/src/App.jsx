import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from './Context';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Council from './Components/Council';
import Calendar from './Components/Calendar';
import Settings from './Components/Settings';
import HealthDashboard       from './Components/CouncilAssets/HealthAdvisor/HealthDashboard';
import BattleDashboard       from './Components/CouncilAssets/BattleAdvisor/BattleDashboard';
import DiplomacyDashboard    from './Components/CouncilAssets/DiplomacyAdvisor/DiplomacyDashboard';
import EconomicDashboard     from './Components/CouncilAssets/EconomicAdvisor/EconomicDashboard';
import RomanticDashboard     from './Components/CouncilAssets/RomanticAdvisor/RomanticDashboard';
import EntertainmentDashboard from './Components/CouncilAssets/EntertainmentAdvisor/EntertainmentDashboard';
import Embers from './Components/Embers';

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Embers />
        <Navbar />
        <main className="content-area">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/council" element={<Council />} />
          <Route path="/council/health"        element={<HealthDashboard />} />
          <Route path="/council/battle"        element={<BattleDashboard />} />
          <Route path="/council/diplomacy"     element={<DiplomacyDashboard />} />
          <Route path="/council/economic"      element={<EconomicDashboard />} />
          <Route path="/council/romantic"      element={<RomanticDashboard />} />
          <Route path="/council/entertainment" element={<EntertainmentDashboard />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
        </main>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
