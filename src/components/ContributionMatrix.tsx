import React, { useState } from 'react';

interface CellMilestone {
  level: 0 | 1 | 2 | 3 | 4;
  note: string;
}

const SHIPPING_NOTES = [
  'Shipped cyrus.ai · 40,017 open issues indexed',
  'Won 1st Place · Agent Arena at CONVERGENCE 2k26',
  'Launched Nirogi AI · 12 preventive health tools',
  'Built Spectre for Karnataka State Police Datathon',
  'Engineered Genesis multi-model research loop',
  'Built BeyondHuman adaptive fitness & nutrition OS',
  'Shipped Static EV & Solar Route Navigator',
  'Published RemixMusicAI browser stem studio',
];

const MATRIX_COLUMNS: CellMilestone[][] = Array.from({ length: 16 }, (_, col) =>
  Array.from({ length: 7 }, (_, row) => {
    const seed = (col * 11 + row * 7 + col * row) % 13;
    let level: 0 | 1 | 2 | 3 | 4 = 0;
    if (seed === 0 || seed === 5) level = 1;
    else if (seed === 2 || seed === 7 || seed === 10) level = 2;
    else if (seed === 4 || seed === 9) level = 3;
    else if (seed === 6 || seed === 11) level = 4;
    else if (col > 10 && row % 2 === 0) level = 3;

    const note = SHIPPING_NOTES[(col + row) % SHIPPING_NOTES.length];
    return { level, note };
  })
);

const LEVEL_COLORS: Record<0 | 1 | 2 | 3 | 4, string> = {
  0: 'bg-[#EBEDF0]',
  1: 'bg-[#9BE9A8]',
  2: 'bg-[#40C463]',
  3: 'bg-[#30A14E]',
  4: 'bg-[#216E39]',
};

export function ContributionMatrix() {
  const [hoveredNote, setHoveredNote] = useState<string | null>(null);

  return (
    <div className="relative inline-flex flex-col items-start">
      <div
        className="inline-flex items-center gap-[3px] p-2.5 rounded-xl bg-white border border-[#E7E5E0] shadow-[0_2px_8px_rgba(20,20,19,0.03)]"
        role="img"
        aria-label="Shipping activity matrix highlighting recent AI builds"
        onMouseLeave={() => setHoveredNote(null)}
      >
        {MATRIX_COLUMNS.map((col, colIdx) => (
          <div key={colIdx} className="flex flex-col gap-[3px]">
            {col.map((cell, rowIdx) => (
              <span
                key={`${colIdx}-${rowIdx}`}
                onMouseEnter={() => setHoveredNote(cell.note)}
                className={`w-[7px] h-[7px] sm:w-[8px] sm:h-[8px] rounded-[2px] transition-transform duration-150 hover:scale-125 ${LEVEL_COLORS[cell.level]}`}
              />
            ))}
          </div>
        ))}
      </div>

      {hoveredNote && (
        <div className="hidden sm:block absolute left-0 -bottom-7 whitespace-nowrap text-xs text-[#625E59] bg-white/95 px-2 py-0.5 rounded-md border border-[#E7E5E0] shadow-xs pointer-events-none z-20">
          {hoveredNote}
        </div>
      )}
    </div>
  );
}
