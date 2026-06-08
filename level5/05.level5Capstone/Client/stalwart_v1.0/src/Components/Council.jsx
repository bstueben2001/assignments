import BattleAdvisorCard from './CouncilAssets/BattleAdvisor/battleAdvisor';
import HealthAdvisorCard from './CouncilAssets/HealthAdvisor/healthAdvisor';
import DiplomacyAdvisorCard from './CouncilAssets/DiplomacyAdvisor/diplomacyAdvisor';
import EconomicAdvisorCard from './CouncilAssets/EconomicAdvisor/economicAdvisor';
import RomanticAdvisorCard from './CouncilAssets/RomanticAdvisor/romanticAdvisor';
import EntertainmentAdvisorCard from './CouncilAssets/EntertainmentAdvisor/entertainmentAdvisor';

function Council() {
  return (
    <main className="council-page">
      <h1 className="council-title">Your Council</h1>
      <p className="council-subtitle">Choose an advisor to open their dashboard.</p>
      <div className="council-grid">
        <HealthAdvisorCard />
        <BattleAdvisorCard />
        <DiplomacyAdvisorCard />
        <EconomicAdvisorCard />
        <RomanticAdvisorCard />
        <EntertainmentAdvisorCard />
      </div>
    </main>
  );
}

export default Council;
