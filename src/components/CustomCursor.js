import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [cursorPos, setCursorPos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [clicking, setClicking] = useState(false);
  const [hovered, setHovered] = useState(false);

  const updateCursorPos = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
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

  useEffect(() => {
    window.addEventListener("mousemove", updateCursorPos);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);
    window.addEventListener("mouseenter", onMouseEnter);
    window.addEventListener("mouseleave", onMouseLeave);
    return () => {
      window.removeEventListener("mousemove", updateCursorPos);
      window.addEventListener("mousedown", onMouseDown);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("mouseenter", onMouseEnter);
      window.addEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const Customcursor = {
    left: `${cursorPos.x}px`,
    top: `${cursorPos.y}px`,
    transform: clicking ? "scale(2) translate(-25%, -25%)" : "",
    backgroundColor: clicking ? "#f5c4db" : "#f5c4db",
    border: clicking
      ? "3px solid #f247f5"
      : hovered
      ? "2px solid #f5c4db"
      : "2px solid #f247f5",
  };

  return <div className="custom-cursor" style={Customcursor}></div>;
};

export default CustomCursor;
