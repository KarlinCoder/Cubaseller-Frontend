"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { Categoria, categorias } from "../_helpers/get-categories";

export default function CategoriasScroll() {
  const [shuffledCategories, setShuffledCategories] = useState<Categoria[]>([]);
  const dragging = useRef(false);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef(0);

  const startMomentum = useCallback(
    (container: HTMLDivElement, velocity: number) => {
      cancelAnimationFrame(rafRef.current);
      let v = velocity;
      const friction = 0.95;
      const threshold = 0.5;

      const step = () => {
        if (Math.abs(v) < threshold) return;
        container.scrollLeft -= v;
        v *= friction;
        rafRef.current = requestAnimationFrame(step);
      };

      rafRef.current = requestAnimationFrame(step);
    },
    [],
  );

  const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
    cancelAnimationFrame(rafRef.current);
    const container = e.currentTarget;
    const startX = e.pageX - container.offsetLeft;
    const scrollLeft = container.scrollLeft;

    velocityRef.current = 0;
    lastXRef.current = startX;
    lastTimeRef.current = performance.now();

    const onMove = (ev: MouseEvent) => {
      const x = ev.pageX - container.offsetLeft;
      if (Math.abs(x - startX) > 5) dragging.current = true;

      const now = performance.now();
      const dt = now - lastTimeRef.current;
      if (dt > 0) {
        velocityRef.current = ((x - lastXRef.current) / dt) * 16;
      }
      lastXRef.current = x;
      lastTimeRef.current = now;

      container.scrollLeft = scrollLeft - (x - startX);
    };

    const onUp = () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
      setTimeout(() => (dragging.current = false), 0);

      if (Math.abs(velocityRef.current) > 1) {
        startMomentum(container, velocityRef.current);
      }
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  };

  useEffect(() => {
    const randomizeArray = [...categorias].sort(() => 0.5 - Math.random());
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShuffledCategories(randomizeArray);
  }, []);

  return (
    <div
      className="flex items-center px-5 w-full gap-3 overflow-hidden"
      style={{
        userSelect: "none",
        maskImage:
          "linear-gradient(to right, transparent, black 20px, black calc(100% - 20px), transparent)",
      }}
      onMouseDown={onDragStart}
    >
      {shuffledCategories.map((cat) => {
        const Icon = cat.icon;
        return (
          <div
            key={cat.name}
            className="relative rounded-3xl overflow-hidden transition-all cursor-pointer shrink-0 w-40 h-60 hover:opacity-80 active:opacity-70"
            style={{
              backgroundColor: `color-mix(in srgb, ${cat.color} 25%, transparent)`,
            }}
            onClick={() => {}}
          >
            <Icon
              size={150}
              className="z-1 absolute -bottom-5 -right-5 rotate-20"
              style={{
                color: `color-mix(in srgb, ${cat.color} 35%, transparent)`,
              }}
            />

            <div className="absolute inset-0 z-2 size-full bg-linear-0 from-black/40 to-transparent flex flex-col justify-start items-start gap-2">
              <div className="flex flex-col items-start w-full p-3 gap-2">
                <div
                  className="p-2 rounded-full border border-white/20"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${cat.color} 50%, transparent)`,
                  }}
                >
                  <Icon className="text-white/90" size={25} />
                </div>
                <p className="text-white/80 font-montserrat font-semibold text-sm text-start leading-tight">
                  {cat.name}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
