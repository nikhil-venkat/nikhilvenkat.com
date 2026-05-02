import { useState, useEffect } from "react";

function TimeIcon({ hour }: { hour: number }) {
  if (hour < 12) return <span style={{ fontSize: 15, lineHeight: 1 }}>🌤️</span>;
  if (hour < 18) return <span style={{ fontSize: 15, lineHeight: 1 }}>☀️</span>;
  return <span style={{ fontSize: 15, lineHeight: 1 }}>🌙</span>;
}

const sections = [
  { title: "About me", body: "Engineering leader based in the SF Bay Area with 10+ years of experience building and scaling enterprise SaaS products, and 2+ years leading high-performing engineering teams." },
  { title: "Work Experience", body: "Senior Engineering Manager at Okta, Inc. — leading a group comprised of 4 teams across 3 continents. Driving horizontal UI platform modernization and global design system adoption." },
  { title: "Skills", body: "TypeScript · React · Node.js · GraphQL · Design Systems · Engineering Management · Team Building · Cross-functional Leadership · Agile · CI/CD" },
  { title: "Projects", body: "Global UI Platform · Okta Design System · Engineering Growth Framework · Cross-timezone Collaboration Tooling" },
  { title: "Education", body: "B.S. Computer Science — University of Illinois at Urbana-Champaign." },
];

export function Minimal() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hour = now.getHours();
  const timeStr = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Sticky header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 px-8 py-4 flex items-center justify-between bg-white/95 backdrop-blur-sm shadow-sm">
        <span className="font-semibold text-gray-900 text-sm tracking-tight">Nikhil V.</span>
        <div className="flex items-center gap-1.5 text-xs text-gray-500 select-none">
          <TimeIcon hour={hour} />
          <span className="font-medium text-gray-700 tabular-nums">{timeStr}</span>
          <span className="text-gray-300 mx-0.5">·</span>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 shrink-0">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span>San Francisco, CA</span>
          <span className="text-gray-300 mx-0.5">·</span>
          <span>68°F</span>
        </div>
      </header>

      {/* Scrollable page content */}
      <main className="flex-1 px-8 py-10 max-w-2xl mx-auto w-full">
        <div className="mb-10">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">👋 Hello, I am Nikhil!</h1>
          <p className="text-gray-500 text-sm">Welcome to my personal webspace.</p>
        </div>

        <div className="space-y-10">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2 border-b border-gray-100 pb-1">{s.title}</h2>
              <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-16 text-xs text-center text-gray-300">↑ Scroll back up to see the sticky header</div>
      </main>
    </div>
  );
}
