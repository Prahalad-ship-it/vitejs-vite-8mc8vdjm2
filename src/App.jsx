import React, { useEffect, useState, useRef } from "react";

function Leaderboard({ onLeadChange }) {
  const [leaderIndex, setLeaderIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setLeaderIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % players.length;
        onLeadChange(`🔥 New leader: ${players[nextIndex].name}!`);
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [onLeadChange]);

  const leader = players[leaderIndex];

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
