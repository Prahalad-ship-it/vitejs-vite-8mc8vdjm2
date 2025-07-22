function Leaderboard({ onLeadChange }) {
  const [leaderIndex, setLeaderIndex] = useState(0);
  const leader = players[leaderIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (leaderIndex + 1) % players.length;
      setLeaderIndex(nextIndex);
      onLeadChange(`🔥 New leader: ${players[nextIndex].name}!`);
    }, 3000); // Change leader every 3 seconds

    return () => clearInterval(interval);
  }, [leaderIndex, onLeadChange]);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center w-80">
      <h1 className="text-2xl font-bold mb-4">🏆 Leaderboard</h1>
      {players.map((player, index) => (
        <div
          key={index}
          className={`p-2 ${
            player.name === leader.name ? "bg-yellow-200 font-bold" : ""
          }`}
        >
          {player.name} — {player.score} pts
        </div>
      ))}
    </div>
  );
}

