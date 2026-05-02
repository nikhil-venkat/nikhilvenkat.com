import { useState, useEffect } from "react";

function getTimeIcon(hour: number) {
  if (hour < 12) {
    return (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="4.5" fill="#FBBF24" />
        <line x1="12" y1="2" x2="12" y2="5" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="19" x2="12" y2="22" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="12" x2="5" y2="12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
        <line x1="19" y1="12" x2="22" y2="12" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
        <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
        <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
        <line x1="19.78" y1="4.22" x2="17.66" y2="6.34" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
        <line x1="6.34" y1="17.66" x2="4.22" y2="19.78" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  } else if (hour < 18) {
    return (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5.5" fill="#F59E0B" />
        <line x1="12" y1="1" x2="12" y2="4" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="12" y1="20" x2="12" y2="23" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="1" y1="12" x2="4" y2="12" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20" y1="12" x2="23" y2="12" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="3.51" y1="3.51" x2="5.64" y2="5.64" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="18.36" y1="18.36" x2="20.49" y2="20.49" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="20.49" y1="3.51" x2="18.36" y2="5.64" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
        <line x1="5.64" y1="18.36" x2="3.51" y2="20.49" stroke="#F59E0B" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    );
  } else {
    return (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#C7D2FE" />
      </svg>
    );
  }
}

function getCardStyle(hour: number) {
  if (hour < 12) return { bg: "bg-gradient-to-br from-orange-100 to-amber-50", border: "border-orange-200", text: "text-gray-800", muted: "text-gray-500", divider: "bg-orange-200" };
  if (hour < 18) return { bg: "bg-gradient-to-br from-yellow-50 to-amber-100", border: "border-yellow-300", text: "text-gray-800", muted: "text-gray-500", divider: "bg-yellow-200" };
  return { bg: "bg-gradient-to-br from-slate-900 to-indigo-950", border: "border-indigo-800", text: "text-white", muted: "text-indigo-300", divider: "bg-indigo-800" };
}

export function Card() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hour = now.getHours();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
  const dateStr = now.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
  const style = getCardStyle(hour);

  const period = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <div className={`${style.bg} ${style.border} border rounded-2xl shadow-lg p-5 w-72`}>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className={`text-xs font-medium uppercase tracking-widest ${style.muted}`}>{period}</p>
            <p className={`text-2xl font-bold tabular-nums ${style.text}`}>{timeStr}</p>
            <p className={`text-xs ${style.muted} mt-0.5`}>{dateStr}</p>
          </div>
          <div className="opacity-90">{getTimeIcon(hour)}</div>
        </div>

        <div className={`h-px ${style.divider} my-3`} />

        <div className="flex items-center justify-between">
          <div className={`flex items-center gap-1.5 text-sm ${style.text}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className={style.muted}>
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-xs font-medium">San Francisco, CA</span>
          </div>
          <div className={`flex items-center gap-1.5 text-sm ${style.text}`}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={style.muted}>
              <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z"/>
            </svg>
            <span className="text-xs font-medium">68°F · Partly Cloudy</span>
          </div>
        </div>
      </div>
    </div>
  );
}
