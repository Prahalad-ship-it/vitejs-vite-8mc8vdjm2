import React, { useEffect, useState } from "react";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Replace this with a real API fetch when ready
    const dummyData = [
      { name: "Sri", score: 120 },
      { name: "Alice", score: 110 },
      { name: "Bob", score: 100 },
      { name: "Charlie", score: 90 },
      { name: "Diana", score: 85 }
    ];
    setPlayers(dummyData);
  }, []);

  return (
    <div className="p-6 max-w-md w-full mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">🏆 Leaderboard</h1>
      <ul className="bg-white shadow-xl rounded-xl divide-y">
        {players.map((player, index) => (
          <li key={index} className="p-4 flex justify-between text-lg">
            <span>{index + 1}. {player.name}</span>
            <span className="font-bold">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
