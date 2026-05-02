import { useState, useEffect } from "react";

function TimeIcon({ hour }: { hour: number }) {
  if (hour < 12) {
    // Soft morning sun — smaller, rays have softer color
    return (
      <span style={{ fontSize: 16, lineHeight: 1 }}>🌤️</span>
    );
  } else if (hour < 18) {
    // Bright afternoon sun
    return (
      <span style={{ fontSize: 16, lineHeight: 1 }}>☀️</span>
    );
  } else {
    // Moon
    return (
      <span style={{ fontSize: 16, lineHeight: 1 }}>🌙</span>
    );
  }
}

export function Minimal() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hour = now.getHours();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  // Simulate a portfolio site top bar
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Simulated page header */}
      <header className="w-full border-b border-gray-100 px-8 py-4 flex items-center justify-between bg-white">
        <span className="font-semibold text-gray-900 text-sm tracking-tight">Nikhil V.</span>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 select-none">
          <TimeIcon hour={hour} />
          <span className="font-medium text-gray-700 tabular-nums">{timeStr}</span>
          <span className="text-gray-300 mx-0.5">·</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span>San Francisco, CA</span>
          <span className="text-gray-300 mx-0.5">·</span>
          <span>68°F</span>
        </div>
      </header>
      {/* Page stub */}
      <div className="flex-1 flex items-start justify-center pt-10">
        <div className="text-center text-gray-400 text-xs">← widget lives in the header above</div>
      </div>
    </div>
  );
}
