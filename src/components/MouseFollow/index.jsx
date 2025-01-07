"use client";
import { useState, useEffect, useRef } from "react";

export const Mousefollow = () => {
  const [point, setPoint] = useState({ x: 0, y: 0 });
  const { x, y } = point;
  const ref = useRef();

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      const element = ref.current;

      const x = clientX - element.offsetLeft - element.offsetWidth / 2;
      const y = clientY - element.offsetTop - element.offsetHeight / 2;
      setPoint({ x, y });
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="mouse pointer-events-none fixed delay-50 duration-75 top-0 left-0 size-96 rounded-full blur-3xl opacity-15 z-50"
      style={{
        transform: `translate(${x}px, ${y}px)`,
      }}
    ></div>
  );
};
