import React, { useEffect, useState } from "react";

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold text-center mb-4">🏆 Leaderboard</h1>
      <ul className="bg-white shadow rounded-xl divide-y">
        {players.map((player, index) => (
          <li key={index} className="p-4 flex justify-between">
            <span>{index + 1}. {player.name}</span>
            <span className="font-bold">{player.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

