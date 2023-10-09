import React from "react";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [dotOutline, setDotOutline] = useState({ x: 0, y: 0 });
  const [clicking, setClicking] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const onMousemove = (e) => {
      setDotOutline({ x: e.clientX, y: e.clientY });
    };

    const onMouseDown = () => {
      setClicking(true);
    };

    const onMouseUp = () => {
      setClicking(false);
    };

    const onMouseEnter = () => {
      setHovered(true);
    };

    const onMouseLeave = () => {
      setHovered(false);
    };

    window.addEventListener("mousemove", onMousemove);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMousemove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("mouseenter", onMouseEnter);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const cursorStyle = {
    left: `${dotOutline.x}px`,
    top: `${dotOutline.y}px`,
    transform: clicking ? "scale(2)" : "scale(1)",
    backgroundColor: clicking ? "#f5c4db" : "#f5c4db",
    border: clicking
      ? "3px solid #f247f5"
      : hovered
      ? "2px solid #f5c4db"
      : "2px solid #f247f5",
  };

  return (
    <>
      <div className="cursor-outline" style={cursorStyle}></div>
    </>
  );
};

export default Cursor;
