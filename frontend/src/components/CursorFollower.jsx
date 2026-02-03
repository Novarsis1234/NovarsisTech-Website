import React, { useEffect, useState, useRef } from "react";

const SYMBOLS = ["0", "1", "</>", "{}", "()", "[]", ";", ":=", "<>", "|", "novarsis"];

const CursorFollower = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);
  const idRef = useRef(0);

  // cursor position + smooth follow for hexagon
  useEffect(() => {
    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      // spawn particle on move
      spawnParticle(e.clientX, e.clientY);
    };
    window.addEventListener("mousemove", onMove);

    const follow = setInterval(() => {
      setTrail((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.18,
        y: prev.y + (pos.y - prev.y) * 0.18,
      }));
    }, 16);

    return () => {
      window.removeEventListener("mousemove", onMove);
      clearInterval(follow);
    };
  }, [pos.x, pos.y]);

  // particle spawner (cap ~12 active)
  const spawnParticle = (x, y) => {
    setParticles((prev) => {
      const now = Date.now();
      const life = 600 + Math.floor(Math.random() * 300); // 600-900ms
      const angle = (Math.random() * Math.PI) / 1.2 - Math.PI / 2.4; // slight spread (upwards-ish)
      const distance = 18 + Math.random() * 20;
      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance - (10 + Math.random() * 10);
      const size = 10 + Math.random() * 8;
      const rotate = -20 + Math.random() * 40;

      const item = {
        id: idRef.current++,
        x,
        y,
        dx,
        dy,
        size,
        rotate,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        born: now,
        life,
      };

      const arr = [...prev, item];
      // keep last 12 only
      if (arr.length > 12) arr.splice(0, arr.length - 12);
      return arr;
    });

    // schedule cleanup
    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => Date.now() - p.born < p.life));
    }, 1000);
  };

  return (
    <>
      {/* --- Hexagon Cyber Ring (follows with delay) --- */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          width: 56,
          height: 56,
          transform: `translate(${trail.x - 28}px, ${trail.y - 28}px)`,
          transition: "transform 0.12s ease-out",
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
          border: "2px solid #0cee2b",
          background:
            "radial-gradient(circle at 50% 50%, rgba(80, 240, 35, 0.22), transparent 70%)",
          boxShadow:
            "0 0 18px rgba(2, 237, 88, 0.7), 0 0 42px rgba(13, 238, 66, 0.45)",
        }}
      />

      {/* --- Inner Neon Core Dot (sticks to cursor) --- */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          width: 10,
          height: 10,
          borderRadius: "9999px",
          transform: `translate(${pos.x - 5}px, ${pos.y - 5}px)`,
          transition: "transform 0.05s linear",
          background:
            "linear-gradient(45deg, #1bf543, #0bf20f, #20ef05)",
          boxShadow:
            "0 0 10px #1eea08, 0 0 28px rgba(4, 236, 89, 0.85), 0 0 46px rgba(14, 243, 98, 0.6)",
        }}
      />

      {/* --- Particle trail (10-12) --- */}
      {particles.map((p) => {
        const age = Math.min(1, (Date.now() - p.born) / p.life); // 0 → 1
        const tx = p.x + p.dx * age;
        const ty = p.y + p.dy * age;
        const scale = 1 - age * 0.3; // shrink a bit
        const opacity = 1 - age; // fade out

        return (
          <div
            key={p.id}
            className="fixed top-0 left-0 pointer-events-none z-[9997] select-none"
            style={{
              transform: `translate(${tx}px, ${ty}px) rotate(${p.rotate}deg) scale(${scale})`,
              transition: "transform 0.12s linear",
              opacity,
              fontSize: p.size,
              lineHeight: 1,
              color: "rgba(91, 245, 191, 0.95)",
              textShadow:
                "0 0 8px rgba(4, 225, 23, 0.85), 0 0 18px rgba(13, 228, 59, 0.55)",
              fontFamily:
                "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
              willChange: "transform, opacity",
            }}
          >
            {p.symbol}
          </div>
        );
      })}
    </>
  );
};

export default CursorFollower;