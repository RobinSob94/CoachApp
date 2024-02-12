import React from 'react';

export default function TimeSlot ({ key, time, onSelect, selected }) {
    return (
      <div
        className={`time-slot ${selected ? 'selected' : ''}`}
        onClick={() => onSelect(time)}
      >
        {time}
      </div>
    );
  };