"use client";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: -400, y: -400 });

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-[9999] transition-transform duration-75"
      style={{
        left: pos.x - 240,
        top: pos.y - 240,
        width: 480,
        height: 480,
        background:
          "radial-gradient(circle, rgba(245,158,11,0.07) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
        borderRadius: "50%",
      }}
    />
  );
}
