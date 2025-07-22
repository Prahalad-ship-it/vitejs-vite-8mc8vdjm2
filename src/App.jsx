import React, { useEffect, useState } from "react";

// Dummy Leaderboard data
const players = [
  { name: "Alice", score: 120 },
  { name: "Bob", score: 110 },
  { name: "Charlie", score: 100 },
];

// NotificationCenter inline component
function NotificationCenter({ message, show }) {
  const [visible, setVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [show]);

  return (
    visible && (
      <div className="fixed bottom-6 right-6 bg-orange-200 border-l-4 border-red-500 text-black p-4 rounded-lg shadow-lg z-50">
        {message}
      </div>
    )
  );
}

// Leaderboard inline component
function Leaderboard({ onLeadChange }) {
  const [leader, setLeader] = useState(players[0]);

  useEffect(() => {
    // Simulate a lead change after 2 seconds
    const timer = setTimeout(() => {
      setLeader(players[1]);
      onLeadChange(🔥 New leader: ${players[1].name}!);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-center w-80">
      <h1 className="text-2xl font-bold mb-4">🏆 Leaderboard</h1>
      {players.map((player, index) => (
        <div
          key={index}
          className={p-2 ${
            player.name === leader.name ? "bg-yellow-200 font-bold" : ""
          }}
        >
          {player.name} — {player.score} pts
        </div>
      ))}
    </div>
  );
}

// App component
export default function App() {
  const [notif, setNotif] = useState({ message: "", show: false });

  const triggerNotification = (msg) => {
    setNotif({ message: msg, show: true });
    setTimeout(() => setNotif({ message: "", show: false }), 3000);
  };

  return (
    <div className="bg-orange-100 min-h-screen flex flex-col items-center justify-center">
      <Leaderboard onLeadChange={triggerNotification} />
      <NotificationCenter message={notif.message} show={notif.show} />
    </div>
  );
}