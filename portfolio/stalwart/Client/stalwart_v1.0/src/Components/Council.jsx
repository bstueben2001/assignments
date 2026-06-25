import { useNavigate } from 'react-router-dom';
import BattleAdvisorCard from './CouncilAssets/BattleAdvisor/battleAdvisor';
import HealthAdvisorCard from './CouncilAssets/HealthAdvisor/healthAdvisor';
import DiplomacyAdvisorCard from './CouncilAssets/DiplomacyAdvisor/diplomacyAdvisor';
import EconomicAdvisorCard from './CouncilAssets/EconomicAdvisor/economicAdvisor';
import RomanticAdvisorCard from './CouncilAssets/RomanticAdvisor/romanticAdvisor';
import EntertainmentAdvisorCard from './CouncilAssets/EntertainmentAdvisor/entertainmentAdvisor';

function Council() {
  const navigate = useNavigate();

  return (
    <main className="council-page">
      <h1 className="council-title">Your Council</h1>
      <p className="council-subtitle">Choose an advisor to open their dashboard.</p>
      <div className="council-grid">
        <HealthAdvisorCard       onClick={() => navigate('/council/health')} />
        <BattleAdvisorCard       onClick={() => navigate('/council/battle')} />
        <DiplomacyAdvisorCard    onClick={() => navigate('/council/diplomacy')} />
        <EconomicAdvisorCard     onClick={() => navigate('/council/economic')} />
        <RomanticAdvisorCard     onClick={() => navigate('/council/romantic')} />
        <EntertainmentAdvisorCard onClick={() => navigate('/council/entertainment')} />
      </div>
    </main>
  );
}

export default Council;
