import AdvisorCard from '../AdvisorCard';

function RomanticAdvisorCard({ onClick }) {
  return (
    <AdvisorCard
      title="Romantic Advisor"
      tagline="Nurture connections, plan dates, and track intentions."
      color="#d46fa0"
      icon="💌"
      onClick={onClick}
    />
  );
}

export default RomanticAdvisorCard;
