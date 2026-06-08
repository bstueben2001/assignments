import AdvisorCard from '../AdvisorCard';

function HealthAdvisorCard({ onClick }) {
  return (
    <AdvisorCard
      title="Health Advisor"
      tagline="Monitor wellness goals, habits, and vitality."
      color="#4caf82"
      icon="🌿"
      onClick={onClick}
    />
  );
}

export default HealthAdvisorCard;
