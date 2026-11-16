import React, { useEffect, useRef, useState } from 'react';
import { BatteryCharging, MapPin, Pause, Play, Volume2, Zap } from 'lucide-react';

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

export function RemixMusicPreview() {
  const tracks = [
    { title: 'Deccan Dusk (Stem Mix)', category: 'Telugu Indie', bpm: '96 BPM', source: 'NoCopyright Hub' },
    { title: 'Monsoon Lo-Fi Tape', category: 'Hindi Soft', bpm: '84 BPM', source: 'Open Audio Commons' },
    { title: 'Circuit Sunrise', category: 'Morning Focus', bpm: '112 BPM', source: 'Creator Stem Pack' },
  ];
  const [activeTrack, setActiveTrack] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscNodesRef = useRef<OscillatorNode[]>([]);

  const stopSynth = () => {
    oscNodesRef.current.forEach((osc) => {
      try {
        osc.stop();
        osc.disconnect();
      } catch {
        // ignore already stopped
      }
    });
    oscNodesRef.current = [];
  };

  const togglePlayback = () => {
    if (isPlaying) {
      stopSynth();
      setIsPlaying(false);
      return;
    }

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioCtxRef.current) {
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        void ctx.resume();
      }
      stopSynth();
      const chords = [
        [220, 261.63, 329.63],
        [196, 246.94, 293.66],
        [261.63, 329.63, 392.0],
      ];
      const freqs = chords[activeTrack];
      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.03, ctx.currentTime);
      masterGain.connect(ctx.destination);

      freqs.forEach((freq) => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        osc.connect(masterGain);
        osc.start();
        oscNodesRef.current.push(osc);
      });
      setIsPlaying(true);
    } catch {
      setIsPlaying((prev) => !prev);
    }
  };

  useEffect(() => {
    return () => {
      stopSynth();
    };
  }, []);

  const handleSelectTrack = (idx: number) => {
    setActiveTrack(idx);
    if (isPlaying) {
      stopSynth();
      setIsPlaying(false);
    }
  };

  return (
    <div className="w-full aspect-[4/3] rounded-[20px] bg-gradient-to-br from-[#190910] via-[#120B14] to-[#0A0A0C] p-5 sm:p-7 flex flex-col justify-between text-white border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.22)] overflow-hidden">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <Volume2 className="w-4 h-4 text-[#FB7185]" aria-hidden="true" />
          <span className="font-display font-semibold text-sm">RemixMusicAI Deck</span>
        </div>
        <span className="text-xs text-[#FDA4AF] font-mono tabular-nums">{tracks[activeTrack].bpm}</span>
      </div>

      {/* Category & Track Switcher */}
      <div className="space-y-2 my-2">
        {tracks.map((track, idx) => {
          const active = idx === activeTrack;
          return (
            <button
              key={track.title}
              type="button"
              onClick={() => handleSelectTrack(idx)}
              className={`w-full px-3.5 py-2.5 rounded-xl flex items-center justify-between gap-2 text-left border transition-colors cursor-pointer ${
                active
                  ? 'bg-white/10 border-[#FB7185]/50'
                  : 'bg-white/[0.03] border-white/5 hover:bg-white/[0.06]'
              }`}
            >
              <div className="min-w-0">
                <div className="text-xs font-medium text-white truncate">{track.title}</div>
                <div className="text-[11px] text-[#A1A1AA] truncate">
                  {track.category} · {track.source}
                </div>
              </div>
              <span className="text-[11px] font-mono text-[#FDA4AF] shrink-0 tabular-nums">{track.bpm}</span>
            </button>
          );
        })}
      </div>

      {/* Playable Bar */}
      <div className="flex items-center justify-between gap-4 pt-2 border-t border-white/10">
        <button
          type="button"
          onClick={togglePlayback}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white text-xs font-medium transition-colors cursor-pointer shrink-0"
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" aria-hidden="true" /> : <Play className="w-3.5 h-3.5" aria-hidden="true" />}
          <span>{isPlaying ? 'Pause Stem' : 'Preview Audio'}</span>
        </button>

        {/* Minimal Equalizer Bars */}
        <div className="flex items-end gap-1 h-6" aria-hidden="true">
          {[45, 85, 60, 95, 50, 75, 40, 80].map((h, i) => (
            <span
              key={i}
              className={`w-1 rounded-full bg-[#FB7185] transition-all duration-300 ${
                isPlaying ? 'animate-pulse' : 'opacity-40'
              }`}
              style={{ height: `${isPlaying ? h : 28}%`, animationDelay: `${i * 90}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
