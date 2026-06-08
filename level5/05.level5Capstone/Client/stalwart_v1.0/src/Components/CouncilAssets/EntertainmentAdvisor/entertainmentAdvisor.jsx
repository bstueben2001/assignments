import AdvisorCard from '../AdvisorCard';

function EntertainmentAdvisorCard({ onClick }) {
  return (
    <AdvisorCard
      title="Entertainment Advisor"
      tagline="Curate hobbies, media, and leisure pursuits."
      color="#9b6bd4"
      icon="🎭"
      onClick={onClick}
    />
  );
}

export default EntertainmentAdvisorCard;
