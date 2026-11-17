import React, { useState } from 'react';
import { BatteryCharging, MapPin, Zap } from 'lucide-react';

export function StaticPreview() {
  const stops = [
    { city: 'Hyderabad Hub', km: '0 km', power: '120V / 240V', risk: 'Low (92% SoC)', rate: '₹14/kWh' },
    { city: 'Kurnool DC Fast', km: '215 km', power: '240V · 60kW', risk: 'Low (48% SoC)', rate: '₹18/kWh' },
    { city: 'Devanahalli Solar', km: '538 km', power: 'Solar + 120kW', risk: 'Optimal (61%)', rate: '₹12/kWh' },
  ];
  const [selectedIdx, setSelectedIdx] = useState(1);
  const current = stops[selectedIdx];

  return (
    <div className="w-full aspect-[4/3] rounded-[20px] bg-[#080E0B] p-5 sm:p-7 flex flex-col justify-between text-white border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-7 h-7 rounded-lg bg-[#16A34A]/20 border border-[#16A34A]/40 flex items-center justify-center">
            <Zap className="w-4 h-4 text-[#4ADE80]" aria-hidden="true" />
          </span>
          <span className="font-display font-semibold text-sm tracking-tight">Static Route Planner</span>
        </div>
        <span className="text-xs font-mono text-[#86EFAC] tabular-nums">HYD → BLR · 570 km</span>
      </div>

      {/* Interactive Checkpoint Selector */}
      <div className="grid grid-cols-3 gap-2 my-3">
        {stops.map((stop, idx) => {
          const active = idx === selectedIdx;
          return (
            <button
              key={stop.city}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`p-2.5 rounded-xl text-left border transition-all cursor-pointer ${
                active
                  ? 'bg-[#12261A] border-[#4ADE80]/60 shadow-[0_0_20px_rgba(74,222,128,0.12)]'
                  : 'bg-[#0E1712] border-white/10 hover:border-white/25'
              }`}
            >
              <div className="flex items-center gap-1 text-[10px] text-[#9CA3AF]">
                <MapPin className="w-3 h-3 text-[#4ADE80]" aria-hidden="true" />
                <span className="font-mono tabular-nums">{stop.km}</span>
              </div>
              <div className="text-xs font-medium text-white truncate mt-1">{stop.city}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Station Telemetry */}
      <div className="rounded-xl bg-[#0F1914] border border-white/10 p-4 grid grid-cols-3 gap-3">
        <div>
          <div className="text-[11px] text-[#9CA3AF]">Charger Output</div>
          <div className="font-mono text-xs sm:text-sm font-medium text-white mt-0.5 tabular-nums">{current.power}</div>
        </div>
        <div>
          <div className="text-[11px] text-[#9CA3AF]">AI Range Risk</div>
          <div className="font-mono text-xs sm:text-sm font-medium text-[#4ADE80] mt-0.5 tabular-nums">{current.risk}</div>
        </div>
        <div>
          <div className="text-[11px] text-[#9CA3AF]">Tariff Rate</div>
          <div className="font-mono text-xs sm:text-sm font-medium text-white mt-0.5 flex items-center gap-1 tabular-nums">
            <BatteryCharging className="w-3.5 h-3.5 text-[#4ADE80]" aria-hidden="true" />
            {current.rate}
          </div>
        </div>
      </div>
    </div>
  );
}
