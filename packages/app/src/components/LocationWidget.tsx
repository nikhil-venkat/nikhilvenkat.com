import React, { useState, useEffect } from 'react';

function getTimeIcon(hour: number) {
  if (hour < 12) {
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-label="Morning sun">
        <circle cx="12" cy="12" r="4" fill="#FBBF24" />
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
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-label="Afternoon sun">
        <circle cx="12" cy="12" r="5" fill="#F59E0B" />
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
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-label="Moon">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#94A3B8" />
      </svg>
    );
  }
}

const LocationWidget: React.FC = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hour = now.getHours();
  const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="flex items-center gap-1.5 text-xs select-none" style={{ color: 'inherit', opacity: 0.7 }}>
      {getTimeIcon(hour)}
      <span className="tabular-nums font-medium">{timeStr}</span>
      <span style={{ opacity: 0.4 }}>·</span>
      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" style={{ opacity: 0.6, flexShrink: 0 }}>
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
      <span>San Francisco, CA</span>
      <span style={{ opacity: 0.4 }}>·</span>
      <span>68°F</span>
    </div>
  );
};

export default LocationWidget;
