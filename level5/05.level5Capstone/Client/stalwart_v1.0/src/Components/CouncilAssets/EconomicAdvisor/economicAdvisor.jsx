import AdvisorCard from '../AdvisorCard';

function EconomicAdvisorCard({ onClick }) {
  return (
    <AdvisorCard
      title="Economic Advisor"
      tagline="Oversee budgets, savings, and financial strategy."
      color="#d4a017"
      icon="💰"
      onClick={onClick}
    />
  );
}

export default EconomicAdvisorCard;
