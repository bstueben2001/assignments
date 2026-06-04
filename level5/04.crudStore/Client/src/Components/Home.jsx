const SPARKLES = Array.from({ length: 350 }, (_, i) => ({
  id: i,
  left: `${((i * 137.508) % 100).toFixed(2)}%`,
  top: `${((i * 97.3) % 100).toFixed(2)}%`,
  delay: `${((i * 0.37) % 5).toFixed(2)}s`,
  duration: `${(2 + (i * 0.23) % 3).toFixed(2)}s`,
}));

function Home() {
  return (
    <main className="home">
      {SPARKLES.map(s => (
        <span
          key={s.id}
          className="sparkle"
          style={{
            left: s.left,
            top: s.top,
            animationDelay: s.delay,
            animationDuration: s.duration,
          }}
        />
      ))}
      <div className="home-content">
        <h1>Welcome to CRUD Store</h1>
        <p>Your stop for all basic items</p>
      </div>
    </main>
  );
}

export default Home;
