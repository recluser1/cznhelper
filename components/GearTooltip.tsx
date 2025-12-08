// components/GearTooltip.tsx
"use client";
export function GearTooltip({ text }: { text: string }) {
  return (
    <div className="absolute top-2 right-2 group inline-block">

      <div className="w-5 h-5 flex items-center justify-center rounded-full bg-black/40 text-gray-300 text-xs cursor-pointer">
        ?
      </div>


      <div
        className="
          absolute -right-2 -top-12
          opacity-0 group-hover:opacity-100
          pointer-events-none
          transition-all duration-150
          bg-gray-200 text-gray-900 text-xs font-normal
          px-3 py-1.5 rounded-md shadow-lg
          whitespace-pre-line
          min-w-max
          z-50
        "
      >
        {text}

        <div
          className="
            absolute right-2 top-full
            w-0 h-0
            border-l-[10px] border-r-[10px] border-t-[10px]
            border-l-transparent border-r-transparent border-t-gray-200
          "
        />
      </div>
    </div>
  );
}
