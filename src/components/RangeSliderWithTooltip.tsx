'use client';

import { useRef } from 'react';

interface RangeSliderWithTooltipProps {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
  formatValue?: (value: number) => string;
}

export default function RangeSliderWithTooltip({
  value,
  min,
  max,
  step,
  onChange,
}: RangeSliderWithTooltipProps) {
  const sliderRef = useRef<HTMLInputElement>(null);

  const percent = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative py-2">
      <input
        ref={sliderRef}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{
          '--value': `${percent}%`,
        } as React.CSSProperties}
      />
    </div>
  );
}
