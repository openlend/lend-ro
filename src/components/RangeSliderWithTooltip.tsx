'use client';

import { useState, useRef } from 'react';

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
  formatValue
}: RangeSliderWithTooltipProps) {
  const [isActive, setIsActive] = useState(false);
  const sliderRef = useRef<HTMLInputElement>(null);

  const percent = ((value - min) / (max - min)) * 100;
  const displayValue = formatValue ? formatValue(value) : value.toLocaleString('ro-RO');

  return (
    <div className="relative">
      <input
        ref={sliderRef}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        onTouchStart={() => setIsActive(true)}
        onTouchEnd={() => setIsActive(false)}
        className="w-full"
      />
      <div className="slider-tooltip-container">
        <div className="slider-tooltip-subcontainer">
          <div 
            className="slider-tooltip"
            style={{ 
              left: `${percent}%`,
              opacity: isActive ? 1 : 0,
              marginTop: isActive ? '0' : '-50px'
            }}
          >
            {displayValue}
            <span className="slider-tooltip-bg"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
