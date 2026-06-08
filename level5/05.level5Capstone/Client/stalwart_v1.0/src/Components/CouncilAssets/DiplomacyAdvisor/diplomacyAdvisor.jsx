import AdvisorCard from '../AdvisorCard';

function DiplomacyAdvisorCard({ onClick }) {
  return (
    <AdvisorCard
      title="Diplomacy Advisor"
      tagline="Manage relationships, alliances, and social goals."
      color="#5b8de8"
      icon="🤝"
      onClick={onClick}
    />
  );
}

export default DiplomacyAdvisorCard;
