import AdvisorCard from '../AdvisorCard';

function BattleAdvisorCard({ onClick }) {
  return (
    <AdvisorCard
      title="Battle Advisor"
      tagline="Track objectives, missions, and combat readiness."
      color="#e05c5c"
      icon="⚔️"
      onClick={onClick}
    />
  );
}

export default BattleAdvisorCard;
