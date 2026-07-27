"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import { Categoria, categorias } from "../_helpers/get-categories";

export default function CategoriasScroll() {
  const [shuffledCategories, setShuffledCategories] = useState<Categoria[]>([]);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef(0);

  const updateScrollButtons = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    setShowLeft(el.scrollLeft > 5);
    setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 5);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons, { passive: true });
    window.addEventListener("resize", updateScrollButtons);
    return () => {
      el.removeEventListener("scroll", updateScrollButtons);
      window.removeEventListener("resize", updateScrollButtons);
    };
  }, [updateScrollButtons, shuffledCategories]);

  const scrollBy = useCallback((direction: number) => {
    const el = containerRef.current;
    if (!el) return;
    cancelAnimationFrame(rafRef.current);
    el.scrollBy({ left: direction * 300, behavior: "smooth" });
  }, []);

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
    <div className="relative flex items-center w-full group">
      {showLeft && (
        <button
          onClick={() => scrollBy(-1)}
          className="absolute left-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      )}
      <div
        ref={containerRef}
        className="flex items-center px-1 w-full gap-3 overflow-x-auto scrollbar-hide"
        style={{
          userSelect: "none",
          maskImage:
            "linear-gradient(to right, transparent, black 10px, black calc(100% - 10px), transparent)",
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
      {showRight && (
        <button
          onClick={() => scrollBy(1)}
          className="absolute right-0 z-10 flex items-center justify-center w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black/80 transition-opacity opacity-0 group-hover:opacity-100 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      )}
    </div>
  );
}
