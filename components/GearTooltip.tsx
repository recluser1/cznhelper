// components/GearTooltip.tsx
"use client";

import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";

interface GearTooltipProps {
  sources: string[];
}

export function GearTooltip({ sources }: GearTooltipProps) {
  const [open, setOpen] = useState(false);
  const btnRef = useRef<HTMLDivElement>(null);

  if (sources.length === 0) return null;

  const rect = btnRef.current?.getBoundingClientRect();

  return (
    <>
      {/* ? Button */}
      <div
        ref={btnRef}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-800/90 border border-gray-600/50 text-gray-300 text-xs font-bold hover:bg-gray-900/60 hover:border-gray-500 transition-all cursor-help shadow-lg">
          ?
        </div>
      </div>

      {/* Tooltip */}
      {open &&
        rect &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: rect.top - 8,
              left: rect.right + 8,
              zIndex: 9999,
            }}
            className="pointer-events-none"
          >
            <div
              className="
              bg-gray-900/95 backdrop-blur-md
              border border-gray-500/50
              rounded-lg px-4 py-3
              text-gray-200 text-sm font-medium
              shadow-2xl shadow-gray-900/40
              min-w-max
            "
            >
              <div className="whitespace-pre-line">{sources.join("\n")}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
