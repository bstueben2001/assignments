const COLS = 15;
const ROWS = 11;
const CELL_W = 100 / COLS;
const CELL_H = 100 / ROWS;

const SPARKLES = Array.from({ length: COLS * ROWS }, (_, i) => {
  const col = i % COLS;
  const row = Math.floor(i / COLS);
  return {
    id: i,
    left: `${(col * CELL_W + (i * 2.718) % CELL_W).toFixed(2)}%`,
    top: `${(row * CELL_H + (i * 1.618) % CELL_H).toFixed(2)}%`,
    delay: `${((i * 0.37) % 5).toFixed(2)}s`,
    duration: `${(2 + (i * 0.23) % 3).toFixed(2)}s`,
  };
});

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
        <h1>Welcome to the Hail Mary Inventory Manifest [HMIM]</h1>
        <p>Please navigate to the Inventory tab to view manifest.</p>
      </div>
    </main>
  );
}

export default Home;
