import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <h1>Welcome to My Portfolio</h1>
      <p>How would you like to explore?</p>
      <div className="home-cards">
        <div className="mode-card" onClick={() => navigate('/info')}>
          <span className="card-icon">◈</span>
          <h2>Info Mode</h2>
          <p>A clean overview of my background, skills, and experience.</p>
        </div>
        <div className="mode-card" onClick={() => navigate('/fun')}>
          <span className="card-icon">◉</span>
          <h2>Fun Mode</h2>
          <p>An interactive, game-like way to get to know me.</p>
        </div>
      </div>
    </div>
  )
}

export default Home
